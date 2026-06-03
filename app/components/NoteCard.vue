<script setup lang="ts">
defineProps<{
  note: {
    id: number
    title: string
    type: 'text' | 'checklist'
    content?: string
    items?: {
      id: number
      text: string
      completed: boolean
    }[]
  }
}>()
</script>

<template>
    <div class="rounded-3xl bg-slate-50 border border-amber-300 shadow-sm p-5">

        <h2 class="text-lg font-semibold text-slate-900 mb-2">
          {{ note.title }}
        </h2>
        <p
        v-if="note.type === 'text'" 
        class="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
          {{ note.content }}
        </p>

        <div v-else>
          <div
            v-for="item in note.items ?? []"
            :key="item.id"
            class="flex items-center gap-2 text-sm leading-relaxed text-slate-700">
            <input 
              type="checkbox"
              :checked="item.completed"
              disabled
              class="h-4 w-4 rounded border-slate-300 text-slate-900" />

            <span class="break-words">
              {{ item.text }}
            </span>
          </div>
        </div>
    </div>
</template>
