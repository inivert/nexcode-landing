/**
 * Health check endpoint
 */
export default defineEventHandler(async () => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    supabase: process.env.SUPABASE_URL ? 'configured' : 'not configured'
  }
}) 