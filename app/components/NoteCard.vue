<script setup lang="ts">
defineProps<{
  note: {
    id: number
    title: string
    content: string
  }
}>()
</script>

<template>
    <div class="rounded-3xl bg-slate-50 border border-amber-300 shadow-sm p-5">
        <h2 class="text-lg font-semibold text-slate-900 mb-2">{{ note.title }}</h2>
        <p class="text-sm leading-relaxed text-slate-700">{{ note.content }}</p>
    </div>
</template>
