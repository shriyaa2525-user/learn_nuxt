export const useNotes = () => {
  type Note = {
    id: number
    title: string
    content: string
  }
  const notes = ref<Note[]>([])

  const addNote = (note: {
    title: string
    content: string
  }) => {
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
