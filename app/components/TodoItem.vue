<script setup lang="ts">
defineProps<{
    todo: {
        id: number
        text: string
        completed: boolean
    }
}>()

const emit = defineEmits<{
    toggle: [id: number]
}>()
</script>

<template>
    <li class="py-4">
        <label class="flex items-center gap-4 cursor-pointer text-sm leading-tight">
            <input
                type="checkbox"
                class="checkbox checkbox-primary"
                :checked="todo.completed"
                @change="emit('toggle', todo.id)"
            />
            <span
                :class="[
                    'transition-colors duration-200',
                    todo.completed ? 'line-through text-base-content/50' : 'font-medium text-base-content'
                ]"
            >
                {{ todo.text }}
            </span>
        </label>
    </li>
</template>