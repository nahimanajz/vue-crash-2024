# vue-crash-2024

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

## Vue lifecyle methods

- onBeforeMount - called before begins
- onMounted - called when component is mounted
- onBeforeUpdate - called when reactive data changes and before re-render
- onUpdated - called after re-render
- onBeforeUnmoun - called after the instance is destoyed
- onActivated - called when a kept-alive component is activated
- onDeactivated - called when a kept alive component is deactated
  onErrorCaptured - called when an error is captured from a child component

# Notes for React devs

React`<div> {children}` ====> vue `<div><slot></slot></div>`

# ref vs react 
used as `import {ref, reactive} from 'vue'`
- Ref: can take object or primitves
- ref() has a `.value` property for reassigning, `reactive()` doesn't `.value` and can't be reassigned
- ``reactive()`` only takes objects, it doesnot take primitives like strings, numbers, and boolean, it uses `ref()` under the hood

## example using reactive
```
<script setup>
import {reactive} from 'vue'`
const state = reactive({
  data: [],
  isLoading: false
})

onMounted(async()=>{
  try{
    const response = await axios.get(URL)
    state.data = response.data
  }catch(){
    console.error('Error fetching job', error)
  }finally{
    state.isLoading = false
  }
}) 
</script>
<template>
//TODO: use data here
</template>
```

## example using ref()
```
<script>
const jobs = ref([]);
onMounted(async()=>{
  try {
      const {data} = await axios.get("http://localhost:5001/jobs")
      jobs.value = data
  } catch (error) {
    console.log("Error fetching ...", error)
  }
  <template>
  //TODO: use data here
  </template>
  </script>
```

## VueJs style guides and folder structure

### Folder structure
```
├─ api/ 
│  ├─ index.ts 
│  ├─ product.ts 
│  └─ category.ts 
├─ composables/ # for reusable utilities (like date/time helpers). 
│  └─ format-date.ts     # example of reuasable codes
├─ constants/ 
│  └─ constants.ts   
├─ types/ 
│  └─ index.ts                                                         |  
├─ layouts/  
├─ router/ 
│  └─ index.ts 
├─ services/ 
│  └─ MyService.ts 
├─ store/ 
│  └─ MyStore.ts 
├─ views/ 
│  └─ moduleA/
│  └─ moduleB/
├─ components/ 
│  └─ shared/ui
│  └─ ModuleA/
│  └─ ModuleB/
├─ .env.local 
├─ .env.staging 
├─ .env.production 
└─ main.ts
└─ App.vue 
```
##  Ressources link
1. [Code style guideline](https://vuejs.org/style-guide/rules-strongly-recommended.html)

2. [Folder structure](https://medium.com/@mohandabdiche/building-efficient-frontends-a-vue-3-blueprint-for-modern-medium-sized-applications-671dd403ca62)


