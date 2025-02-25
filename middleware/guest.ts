/**
 * Guest middleware to prevent authenticated users from accessing login/signup pages
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  
  // If user is authenticated, redirect to dashboard
  if (user.value) {
    return navigateTo('/dashboard')
  }
}) 