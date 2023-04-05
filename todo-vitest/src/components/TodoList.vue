<script setup lang="ts">
import { useTodoListStore } from '../store/todo'
const todoStore = useTodoListStore()

const newTodo = ref('')
const addTodo = () => {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div>
    <div class="text-center">
      <h1>todo-list</h1>
      <input v-model="newTodo" class="p-10px" @keypress.enter="addTodo" />
    </div>
    <div>
      <TodoItem v-for="todo in todoStore.todoList" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<style scoped>
input {
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
