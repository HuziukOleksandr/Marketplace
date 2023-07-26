<template>
    <input type="text" class="input">
</template>

<script>
    export default {
        name: "my-input"
    }
</script>

<style scoped>

.input{
    background-color: var(--text-color-white);
    border-radius: 20px;
}
.input:focus{
    outline: none;
}
</style>