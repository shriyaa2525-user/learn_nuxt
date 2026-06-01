export const useTodos = () => {
    const lists = ref([
        { 
            id: 1,
            title: "Study",
            todos:[
            {
            id: 1,
            text: "Learn nuxt",
            completed: false
            },
        ]
},

{            id: 2,
            title: "Work",
            todos:[
                {
                    id: 2,
                    text: "Finish project",
                    completed: false
                }
            ]
        }
    ])

    const toggleTodo = (listId: number, todoId: number) => {
        const list = lists.value.find(list => list.id === listId)

        if (!list) return
        const todo = list.todos.find(todo => todo.id === todoId)

        if (todo) {
            todo.completed = !todo.completed
        }
    }

    const addList = (text: string) => {
        lists.value.push({
            id: Date.now(),
            title: text,
            todos: []
        })
    }

    

    return{
        lists,
        addList,
        toggleTodo
    }
}