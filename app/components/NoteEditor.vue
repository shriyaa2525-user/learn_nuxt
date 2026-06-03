<script setup lang="ts">
const isExpanded=ref(false)

const title=ref("")
const content=ref("")

const noteType = ref<'text' | 'checklist'>('text')

const emit=defineEmits<{
    add: [
        {
            title: string
            type: 'text' | 'checklist'
            content?: string
            items?: {
                id: number
                text: string
                completed: boolean
            }[]
        }
    ]
}>()

const openTextNote = () => {
    noteType.value = 'text'
    isExpanded.value = true
}

const openChecklistNote = () => {
     console.log('checklist clicked')

    noteType.value = 'checklist'
    isExpanded.value = true
}

const checklistItem = ref([
    {
        id: Date.now(),
        text: '',
        completed: false
    }
])

const handleAdd=()=>{
  if (noteType.value === 'text'){
    emit('add',{
        title: title.value,
        type: 'text',
        content: content.value
    })
  } else {
    emit('add', {
        title: title.value,
        type: 'checklist',
        items: checklistItem.value
    })

    checklistItem.value = [
      {
          id: Date.now(),
          text: '',
          completed: false
      }
    ]
  }

  title.value = ''
  content.value = ''

  isExpanded.value = false
}

const handleClose = () => {
  if (!title.value.trim() && !content.value.trim()) {
    isExpanded.value=false
  }
}
</script>

<template>
    <div class="rounded-3xl bg-amber-100 border border-amber-300 shadow-sm p-5 max-w-xl mx-auto">
        <div
            v-if="!isExpanded"
            class="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
                <button
                    class="flex-1 text-left text-slate-400"
                    @click="openTextNote">
                        Take a note...
                </button>

                <button @click="openChecklistNote">☑</button>
        </div>

        <div v-else class="space-y-4">
            <input
                v-model="title"
                type="text"
                placeholder="title"
                class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-500 font-semibold text-lg transition focus:border-pink-300"
            />

            <div v-if="noteType === 'text'">
                <textarea
                    v-model="content"
                    placeholder="write a note..."
                    rows="4"
                    class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-500 resize-none transition focus:border-blue-300"/>
            </div>

            <div v-else class="space-y-3">
                <div 
                    v-for="item in checklistItem"
                    :key="item.id"
                    class="flex items-center w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 transition focus-within:border-pink-300">
    
    <input
        type="checkbox"
        v-model="item.completed"
        class="mr-3 h-5 w-5 cursor-pointer text-slate-900"/>

    <input 
        v-model="item.text"
        type="text"
        placeholder="List item"
        class="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-500"
    />
</div>
            </div>

            <div class="flex justify-end gap-2">
                <button class="rounded-full bg-transparent px-4 py-2 text-sm font-medium text-black border border-slate-900 transition hover:bg-yellow-500" @click="handleClose">close</button>
                <button class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium border text-white transition hover:bg-lime-400 hover:border-slate-900 hover:text-slate-900" @click="handleAdd">Add Note</button>
            </div>
        </div>
    </div>
</template>
