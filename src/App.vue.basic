<script setup>// short form of using composition API
import { ref, onMounted } from "vue"
//Composition API by it everything is housed in setup() methods

const name = ref("John doe");
const stringStatus = ref("active");
const status = true;
const tasks = ref(["task One", "Task two", "Task Three"]);
const newTask = ref(""); // By using v-model directive on text input we can change this state

const toggleStringStatus = () => {
  if (stringStatus.value === "active") {
    stringStatus.value = "pending"
  } else if (stringStatus.value === "pending") {
    stringStatus.value = "active"
  }
}

const addTask = ()=> {
  if(newTask.value.trim() !== ''){
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
const deleteTask = (index) =>{
  tasks.value.splice(index, 1);
};
 onMounted (async() => {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      tasks.value = data.map(task=> task.title)
  } catch (error) {
    console.log(error)
    
  }

})

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status"> User is active</p>
  <p v-else> User is inactive</p>
  <p v-if="stringStatus === 'active'"> User is active</p>
  <p v-if="stringStatus === 'pending'"> User is Pending</p>

  <form @submit.prevent="addTask">
    <label>Write a task here</label>
    <input type="text"  name="newTask" id="newTask" v-model="newTask">
    <button type="submit"> Submit</button>
  </form>
  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task"> 
      <span> {{ task }} </span>
      <button @click="deleteTask(index)"></button>
      
    
    </li>
  </ul>

  <br>
  <button @click="toggleStringStatus"> change status</button>
  <!-- <button v-on:click="toggleStringStatus"> change status</button> -->
</template>


<style></style>