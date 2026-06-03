<script setup lang="ts">
import NoteEditor from '~/components/NoteEditor.vue'
import NoteCard from '~/components/NoteCard.vue';
import { useNotes } from '~/composables/useNotes'

const { notes, addNote } = useNotes()
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-900 py-14">
        <main class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto space-y-10">
                <section class="text-center">
                    <p class="text-sm uppercase tracking-[0.35em] text-slate-500">Task list</p>
                    <h1 class="mt-4 text-3xl font-semibold tracking-tight">The Keeper</h1>
                </section>

                <section class="rounded-3xl bg-white border border-lime-400 p-6 shadow-sm">
                    <NoteEditor @add="addNote"/>
                </section>
            </div>

            <div class="max-w-2xl mx-auto space-y-10">
                <div class="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <NoteCard
                        v-for="note in notes"
                        :key="note.id"
                        :note="note"/>
                </div>
            </div>
        </main>
    </div>
</template>
