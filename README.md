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
