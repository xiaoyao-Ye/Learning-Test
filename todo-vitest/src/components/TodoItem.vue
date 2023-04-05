<script setup lang="ts">
import type { Todo } from '../store/todo'
import { useTodoListStore } from '../store/todo'
defineProps<{ todo: Todo }>()
const todoStore = useTodoListStore()
</script>

<template>
  <div class="flex justify-center items-center flex-col my-2">
    <h1>{{ todo.title }}</h1>
    <div>
      <button class="px-2 py-1 bg-red text-white rounded-4px" @click="todoStore.removeTodo(todo.id)">remove</button>
    </div>
  </div>
</template>

<style scoped></style>
