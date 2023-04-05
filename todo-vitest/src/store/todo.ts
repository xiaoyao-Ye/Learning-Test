import { defineStore } from 'pinia'

export interface Todo {
  title: string
  id: number
}

export const useTodoListStore = defineStore(
  'todo',
  () => {
    const todoList = ref<Todo[]>([])

    const addTodo = (title: string) => {
      type COMMAND_TYPE = 'reverse' | 'top'
      const COMMANDHandlers = {
        reverse: (todo: Todo, _todoList: Ref<Todo[]>) => (todo.title = title.split('').reverse().join('')),
        top: (todo: Todo, todoList: Ref<Todo[]>) => todoList.value.unshift(todo),
      }

      const commands: COMMAND_TYPE[] = []
      const COMMAND_END_CHAR = ':'
      const hasCOMMAND = title.includes(COMMAND_END_CHAR)
      if (hasCOMMAND) {
        const index = title.indexOf(COMMAND_END_CHAR)
        const commandStr = title.slice(0, index)
        commands.push(...(commandStr.split(' ').filter((f) => f) as COMMAND_TYPE[]))
        title = title.slice(index + 1).trim()
      }

      const todo = { title, id: new Date().getTime() }

      commands.forEach((COMMAND) => COMMANDHandlers[COMMAND](todo, todoList))

      if (!commands.includes('top')) todoList.value.push(todo)

      return todo
    }

    const removeTodo = (id: number) => {
      const index = todoList.value.findIndex((todo) => todo.id === id)
      todoList.value.splice(index, 1)
    }

    return {
      todoList,
      addTodo,
      removeTodo,
    }
  },
  {
    persist: true,
    // https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
    // persist: { key: 'todo', storage: localStorage },
  },
)
