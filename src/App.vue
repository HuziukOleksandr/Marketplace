<template>
    <div class=" bg-bg-color ">
        <router-view name="Header"/>
        <router-view name="default"/>
        <router-view name="Footer"/>
    </div>

    <!-- <div>
    <h1>Your Component</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.key">{{ todo.value }}</li>
    </ul>
  </div> -->
</template>

<script>
import { RouterView } from 'vue-router';

    export default {
        components: {
            RouterView
        },
    }
</script>