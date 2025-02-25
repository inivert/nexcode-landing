# Nuxt, Supabase, and Prisma Integration

This project demonstrates how to use Supabase with Prisma ORM in a Nuxt 3 application, enhanced with motion-v animations.

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env` (if it doesn't exist)
- Fill in your Supabase URL, key, and PostgreSQL connection strings in the `.env` file

```
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_KEY="your-anon-key"

# For pooled connections (through connection pooler)
DATABASE_URL="postgresql://postgres:your-password@your-project-ref.supabase.co:5432/postgres?schema=public"

# For direct connections (required for migrations)
DIRECT_URL="postgresql://postgres:your-password@your-project-ref.supabase.co:5432/postgres?schema=public"
```

> **Important**: For Supabase, you need both DATABASE_URL and DIRECT_URL. The DATABASE_URL can use the connection pooler, while DIRECT_URL must be a direct connection to the database for migrations to work properly.

3. Generate Prisma client:
```bash
pnpm prisma:generate
```

4. Push schema changes to the database:
```bash
pnpm prisma:push
```

5. Start the development server:
```bash
pnpm dev:noprompt
```

## Project Structure

- `/prisma`: Prisma schema and migrations
- `/server/api`: Server API routes using Prisma
- `/server/utils`: Server utilities
- `/composables`: Reusable Vue composables (including database access and animations)
- `/components/motion`: Animation components using motion-v
- `/pages`: Application pages

## Using Prisma and Supabase

### Prisma Client

Access Prisma client from server routes:

```typescript
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany()
  return { users }
})
```

### Supabase Client

Access Supabase client in Vue components:

```typescript
// In Vue components/pages with composables
import { useDatabase } from '~/composables/useDatabase'

const { getSupabaseData } = useDatabase()
const data = await getSupabaseData('your_table')

// Or directly with the useSupabaseClient composable
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()
const { data, error } = await supabase.from('your_table').select('*')
```

## Animations with Motion-V

This project includes motion-v for smooth animations. There are multiple ways to use animations:

### 1. Using Animation Components

```vue
<template>
  <FadeIn>
    <div>This content will fade in when visible</div>
  </FadeIn>
  
  <SlideIn direction="left" :delay="0.2">
    <div>This content will slide in from the left</div>
  </SlideIn>
</template>

<script setup>
import FadeIn from '~/components/motion/FadeIn.vue'
import SlideIn from '~/components/motion/SlideIn.vue'
</script>
```

### 2. Using the Animation Composable

```vue
<template>
  <div ref="fadeTarget">This will fade in</div>
  <div ref="slideTarget">This will slide in</div>
  
  <button @click="animate(buttonTarget, { scale: [1, 1.2, 1] })">
    Click me for animation
  </button>
</template>

<script setup>
import { useMotionAnimation } from '~/composables/useMotionAnimation'

const { createFadeIn, createSlideIn, animate } = useMotionAnimation()

// Elements will animate when they become visible
const fadeTarget = createFadeIn({ duration: 0.8 })
const slideTarget = createSlideIn({ direction: 'right', delay: 0.2 })
const buttonTarget = ref(null)
</script>
```

### 3. Using the v-motion Directive

```vue
<div v-motion="{ 
  initial: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}">
  This content uses the v-motion directive
</div>
```

Visit the `/motion-demo` and `/composable-demo` pages to see examples of these animations in action.

## Helpful Commands

- `pnpm dev:noprompt`: Start the development server (skipping Prisma prompts)
- `pnpm dev`: Start the development server (may prompt for migrations)
- `pnpm build`: Build the app for production
- `pnpm prisma:generate`: Generate Prisma client
- `pnpm prisma:push`: Push schema changes to the database
- `pnpm prisma:push:force`: Force push schema changes (may cause data loss)
- `pnpm prisma:migrate`: Create and apply migrations (use for production)
