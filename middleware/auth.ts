/**
 * Auth middleware to protect routes that require authentication
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  
  // Check if user is authenticated
  if (!user.value) {
    // If not authenticated, redirect to login page
    return navigateTo('/auth/login')
  }
}) 