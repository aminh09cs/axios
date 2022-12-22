<template>
  <div @click="handleShow(user.id)">
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
  </div>
  <div>
    <button @click="deleteUser(user.id)">DELETE</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { getUserById, deleteUserById } from '../apiService/apiService';

//emit
const emit = defineEmits(["delete"]);
const getUserById_ = async (id) => {
  const res = await getUserById(id);
  if (res) {
    console.log(res.data);
  }
}
const props = defineProps([
  "user"
])

const handleShow = (id) => {
  getUserById_(id);
}
const deleteUser = async (id) => {
  const res = await deleteUserById(id);
  if (res) {
    emit('delete', id);
  }

}
</script>