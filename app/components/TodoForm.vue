<script setup lang="ts">
    const todoText = ref('')

    const emit = defineEmits<{
        add: [text: string]
    }>()

    const handleAdd = () => {
        if (!todoText.value.trim()) return

        emit("add", todoText.value)

        todoText.value = ""
    }
</script>

<template>
    <div class="flex flex-col gap-3 w-full">
        <div class="relative w-full">
            <input 
                v-model="todoText"
                type="text"
                placeholder="Add a task..."
                class="input input-bordered w-full rounded-2xl border border-base-200 bg-white text-slate-900 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
        <button @click="handleAdd" class="btn btn-sm btn-outline self-start rounded-full px-6">
            Add task
        </button>
    </div>
</template>