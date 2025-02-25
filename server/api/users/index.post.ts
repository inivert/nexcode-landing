import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.email) {
      throw createError({
        statusCode: 400,
        message: 'Email is required'
      })
    }
    
    if (!body.id) {
      throw createError({
        statusCode: 400,
        message: 'User ID is required'
      })
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email }
    })
    
    if (existingUser) {
      return { user: existingUser }
    }
    
    // Create new user
    const newUser = await prisma.user.create({
      data: {
        id: body.id,
        email: body.email,
        name: body.name || null
      }
    })
    
    return { user: newUser }
  } catch (error) {
    console.error('Error creating user:', error)
    
    if (error.code === 'P2002') {
      throw createError({
        statusCode: 409,
        message: 'A user with this email already exists'
      })
    }
    
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to create user'
    })
  }
}) 