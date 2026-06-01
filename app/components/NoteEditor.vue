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
    if((!title).value.trim() && !content.value.trim()) return

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
    <div class="bg-base-100 border border-base-300 rounded-2xl shadow-md p-4 max-w-xl mx-auto">
        <input
            v-if="!isExpanded"
            @focus="isExpanded = true"
            type="text"
            placeholder="write a note..."
            class="w-full bg-transparent outline-none"/>

        <div v-else class="space-y-3">
            <input
                v-model="title"
                type="text"
                placeholder="title"
                class="w-full bg-transparent outline-none font-semibold text-lg"/>

            <textarea
                v-model="content"
                placeholder="write a note..."
                rows="4"
                class="w-full bg-transparent outline-none resize-none"/>

                <div class="flex justify-end gap-2">
                    <button class="btn btn-ghost btn-sm">close</button>
                    <button class="btn btn-primaty btn-sm" @click="handleAdd">Add Note</button>
                </div>
        </div>
    </div>
</template>
