<script setup lang="ts">
import TodoList from '~/components/TodoList.vue'
import NoteEditor from '~/components/NoteEditor.vue'
import { useTodos } from '~/composables/useTodos'

const { lists, addList, toggleTodo } = useTodos()
</script>

<template>
    <div class="min-h-screen bg-base-200 text-base-content py-14">
        <main class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto space-y-10">
                <section class="text-center">
                    <p class="text-sm uppercase tracking-[0.35em] text-base-content/50">Task list</p>
                    <h1 class="mt-4 text-3xl font-semibold tracking-tight">Simple todo tracker</h1>
                </section>

                <section class="rounded-3xl bg-base-100/80 border border-base-200 p-6 shadow-sm">

                    <NoteEditor
                        @addNote="(note)=>console.log(note)"/>

                    <ul class="mt-6 divide-y divide-base-200">
                        <TodoList
                            v-for="list in lists"
                            :key="list.id"
                            :list="list"
                            @toggle="toggleTodo(list.id, $event)"
                        />
                    </ul>
                </section>
            </div>
        </main>
    </div>
</template>
