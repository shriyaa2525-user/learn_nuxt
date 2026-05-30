export const useTodos = () => {
    const todos = ref([
        {
            id: 1,
            text: "Learn nuxt",
            completed: false
        }
    ])

    const addTodo = (text: string) => {
        todos.value.push({
            id: Date.now(),
            text,
            completed: false
        })
    }

    const toggleTodo = (id: number) => {
        const todo = todos.value.find(todo => todo.id === id)

        if (todo) {
            todo.completed = !todo.completed
        }
    }

    return{
        todos,
        addTodo, 
        toggleTodo
    }
}