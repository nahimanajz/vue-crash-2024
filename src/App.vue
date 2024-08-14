<script setup>// short form of using composition API
import { ref } from "vue"
//Composition API by it everything is housed in setup() methods

const name = ref("John doe");
const stringStatus = ref("active");
const status = true;
const tasks = ref(["task One", "Task two", "Task Three"]);

const toggleStringStatus = () => {
  if (stringStatus.value === "active") {
    stringStatus.value = "pending"
  } else if (stringStatus.value === "pending") {
    stringStatus.value = "active"
  }
}



</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status"> User is active</p>
  <p v-else> User is inactive</p>
  <p v-if="stringStatus === 'active'"> User is active</p>
  <p v-if="stringStatus === 'pending'"> User is Pending</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }}</li>
  </ul>

  <br>
  <button @click="toggleStringStatus"> change status</button>
  <!-- <button v-on:click="toggleStringStatus"> change status</button> -->
</template>


<style></style>