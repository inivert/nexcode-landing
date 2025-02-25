import type { User } from '@prisma/client'
import { useSupabaseClient } from '#imports'
import { ref } from 'vue'

export function useDatabase() {
  const supabase = useSupabaseClient()
  const isInitialized = ref(true)
  
  if (!supabase) {
    console.error('Supabase client not initialized. Check your environment variables.')
    isInitialized.value = false
  }
  
  /**
   * Example function to fetch users using Prisma
   */
  const getUsers = async (): Promise<User[]> => {
    try {
      // Using Prisma through server route
      const response = await $fetch('/api/users')
      return response.users
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }

  /**
   * Example function using Supabase directly
   */
  const getSupabaseData = async (table: string) => {
    if (!isInitialized.value) {
      throw new Error('Supabase client not initialized. Check your environment variables.')
    }
    
    try {
      const { data, error } = await supabase.from(table).select('*')
      if (error) throw error
      return data || []
    } catch (error) {
      console.error(`Error fetching data from ${table}:`, error)
      throw error
    }
  }

  return {
    getUsers,
    getSupabaseData,
    isInitialized
  }
} 