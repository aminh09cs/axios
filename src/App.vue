<template>
  <div v-for="user in dataUsers" :key="user.id">
    <User :user="user" @delete="onDeleteUser" />
  </div>
  <div>
    <button @click="post">POST</button>
  </div>
</template>

<script setup>
import { getAllUsers, postNewUser } from './apiService/apiService'
import { onMounted, ref, watch } from 'vue';
import User from './components/User.vue'

const dataUsers = ref([]);
const getAllUsers_ = async () => {
  const res = await getAllUsers();
  if (res) {
    dataUsers.value = res.data;
  }
}
const post = async () => {
  let name = "Minh";
  let data = await postNewUser(name);
  if (data) {
    alert("SUCCESS POST USER");
  }
  getAllUsers_();
}

const onDeleteUser = (id) => {
  dataUsers.value = dataUsers.value.filter((item) => {
    return item.id !== id;
  })
}

onMounted(() => {
  getAllUsers_();
})
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
