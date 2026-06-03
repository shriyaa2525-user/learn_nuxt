import { watch } from 'vue'

export const useNotes = () => {
  type ChecklistItem = {
    id: number
    text: string
    completed: boolean
  }
  
  type Note = {
    id: number
    title: string
    type: 'text' | 'checklist'

    content?: string
    items?: ChecklistItem[] 
  }

  const notes = ref<Note[]>([])

  if(import.meta.client){
    const savedNotes = localStorage.getItem('notes')

    if(savedNotes){
      notes.value = JSON.parse(savedNotes)
    }
  }

  watch(
    notes,
    () => {
      localStorage.setItem(
        'notes',
        JSON.stringify(notes.value)
      )
    },
    { deep: true }
  )

  const addNote = (
    note:Omit<Note, 'id'>
  ) => {
    notes.value.push({
      id: Date.now(),
      ...note
    })
  }

  return {
    notes,
    addNote
  }
}
