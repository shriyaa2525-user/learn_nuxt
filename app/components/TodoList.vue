<script setup lang="ts">
    defineProps<{
        list: {
            id: number
            title: string
            todos: {
                id: number
                text: string
                completed: boolean
            }[]
        }
    }>()

    const emit = defineEmits<{
        toggle: [todoId: number]
    }>()
</script>

<template>
    <div class="mb-8">
        <h2 class="text-lg font-semibold">{{ list.title }}</h2>
        <ul class="mt-2 space-y-2">
            <TodoItem
                v-for="todo in list.todos"
                :key="todo.id"
                :todo="todo"
                @toggle="emit('toggle', todo.id)"
            />
        </ul>
    </div>
</template>