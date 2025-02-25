<template>
  <div class="container mx-auto p-8">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <p class="text-muted-foreground">Welcome to your dashboard, {{ user?.user_metadata?.name || 'User' }}</p>
        </div>
        
        <div class="flex gap-2">
          <Button variant="outline" @click="refreshUserData">
            Refresh
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Your account information</CardDescription>
        </CardHeader>
        <CardContent>
          <div v-if="loading" class="py-8 text-center">
            <p class="text-muted-foreground">Loading user data...</p>
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class="text-sm font-medium text-muted-foreground">Name</h3>
              <p>{{ userData?.name || 'Not provided' }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-muted-foreground">Email</h3>
              <p>{{ userData?.email }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-muted-foreground">Account Created</h3>
              <p>{{ formatDate(userData?.createdAt) }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-muted-foreground">Last Updated</h3>
              <p>{{ formatDate(userData?.updatedAt) }}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupabaseUser } from '#imports'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User } from '@prisma/client'
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'default',
  middleware: ['auth']
})

const user = useSupabaseUser()
const userData = ref<User | null>(null)
const loading = ref(true)

// Format date for display
function formatDate(dateString?: string | Date | null) {
  if (!dateString) return 'N/A'
  
  const date = typeof dateString === 'string' 
    ? new Date(dateString) 
    : dateString
    
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// Get user data from our database
async function fetchUserData() {
  loading.value = true
  try {
    const response = await $fetch(`/api/users/${user.value?.id}`)
    userData.value = response.user
  } catch (error) {
    console.error('Error fetching user data:', error)
  } finally {
    loading.value = false
  }
}

function refreshUserData() {
  fetchUserData()
}

onMounted(() => {
  fetchUserData()
})
</script> 