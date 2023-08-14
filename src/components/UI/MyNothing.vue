<template>
    <div class="nothing">
        <h1 class="title">Woops, nothing here</h1>
    </div>
</template>

<script>
    export default {
        name: 'my-nothing',
    }
</script>

<style scoped>

.nothing {
    width: 800px;
   
    height: 70px;
    margin: 0 auto;
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 55px;
    color: var(--background-color);
    text-align: center;
}
</style>