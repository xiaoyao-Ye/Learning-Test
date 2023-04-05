import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTodoListStore } from './todo'

describe('todo store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('add todo', () => {
    const todoStore = useTodoListStore()
    todoStore.addTodo('吃饭')
    expect(todoStore.todoList[0].title).toBe('吃饭')
  })

  it('add remove todo', () => {
    const todoStore = useTodoListStore()
    const todo = todoStore.addTodo('吃饭')
    expect(todoStore.todoList.length).toBe(1)
    todoStore.removeTodo(todo.id)
    expect(todoStore.todoList.length).toBe(0)
  })

  it('add reverse todo', () => {
    const todoStore = useTodoListStore()
    todoStore.addTodo('reverse: 吃饭')
    expect(todoStore.todoList[0].title).toBe('饭吃')
  })

  it('add top todo', () => {
    const todoStore = useTodoListStore()
    todoStore.addTodo('吃饭')
    todoStore.addTodo('top:吃饭')
    expect(todoStore.todoList[0].title).toBe('吃饭')
  })

  it('add top and reverse todo', () => {
    const todoStore = useTodoListStore()
    todoStore.addTodo('打豆豆')
    todoStore.addTodo('top reverse: 吃饭')
    expect(todoStore.todoList[0].title).toBe('饭吃')
  })
})
