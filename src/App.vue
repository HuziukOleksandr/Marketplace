<template>
    <div class="page">
        <router-view name="Header"/>
        <router-view name="default"/>
        <router-view name="Footer"/>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

    export default {
        components: {
            RouterView
        }
    }
</script>

<style scoped>

.page{
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    
    background-color: var(--background-color);
}

</style>