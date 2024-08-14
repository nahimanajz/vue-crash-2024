
<script>
export default {
  data(){
    return {
      name: "John doe",
      status: true,
      stringStatus:"pending",
      tasks: ["task 1", "task 2", "task 3"],
      link:"https://www.google.com"    }
  },
  methods:{
    toggleStringStatus(){
      if(this.stringStatus === "active"){
        this.stringStatus = "pending"
      } else if(this.stringStatus === "pending"){
        this.stringStatus = "active"
      } 
    }
  }
}
</script>

<template>
  <h1>{{  name}}</h1>
  <p v-if="status"> User is active</p>
  <p v-else> User is inactive</p>
  <p v-if="stringStatus === 'active'"> User is active</p>
  <p v-if="stringStatus === 'pending'"> User is Pending</p>
  
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for google</a> -->
  <a :href="link">Click for google</a>
<br>
  <button @click="toggleStringStatus"> change status</button>
  <!-- <button v-on:click="toggleStringStatus"> change status</button> -->
</template>


<style>

</style>