<template>
    <div class="page">
        <Main />
    </div>
</template>

<script>
import Main from './views/Main.vue'
    export default {
        components: {
            Main
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