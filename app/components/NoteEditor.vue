<script setup lang="ts">
const isExpanded=ref(false)

const title=ref("")
const content=ref("")

const emit=defineEmits<{
    add: [
        {
            title: string
            content: string
        }
    ]
}>()

const handleAdd=()=>{
  if (!title.value.trim() && !content.value.trim()) return

  console.log("Add clicked")

  emit('add',{
    title: title.value,
    content: content.value
  })

  title.value=''
  content.value=''

  isExpanded.value=false
}

const handleClose = () => {
  if (!title.value.trim() && !content.value.trim()) {
    isExpanded.value=false
  }
}
</script>

<template>
    <div class="rounded-3xl bg-amber-100 border border-amber-300 shadow-sm p-5 max-w-xl mx-auto">
        <input
            v-if="!isExpanded"
            @focus="isExpanded = true"
            type="text"
            placeholder="write a note..."
            class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-400 transition focus:border-slate-400"
        />

        <div v-else class="space-y-4">
            <input
                v-model="title"
                type="text"
                placeholder="title"
                class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-500 font-semibold text-lg transition focus:border-pink-300"
            />

            <textarea
                v-model="content"
                placeholder="write a note..."
                rows="4"
                class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-500 resize-none transition focus:border-blue-300"
            />

            <div class="flex justify-end gap-2">
                <button class="rounded-full bg-transparent px-4 py-2 text-sm font-medium text-black border border-slate-900 transition hover:bg-yellow-500" @click="handleClose">close</button>
                <button class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium border text-white transition hover:bg-lime-400 hover:border-slate-900 hover:text-slate-900" @click="handleAdd">Add Note</button>
            </div>
        </div>
    </div>
</template>
