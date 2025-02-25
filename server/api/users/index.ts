import prisma from '~/server/utils/prisma'
import { H3Error } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return { users }
  } catch (error) {
    console.error('Error fetching users:', error)
    
    // Create a proper error response
    const h3Error = createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users',
      data: {
        message: error instanceof Error ? error.message : 'Unknown database error'
      }
    })
    
    throw h3Error
  }
}) 