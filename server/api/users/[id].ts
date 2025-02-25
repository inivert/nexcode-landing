import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'User ID is required'
      })
    }
    
    const user = await prisma.user.findUnique({
      where: { id }
    })
    
    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }
    
    return { user }
  } catch (error) {
    console.error('Error fetching user:', error)
    return handleError(event, error)
  }
})

function handleError(event: any, error: any) {
  if (error.statusCode) {
    throw error
  } else {
    throw createError({
      statusCode: 500,
      message: error.message || 'Internal server error'
    })
  }
} 