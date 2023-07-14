<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>

.btn{
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    font-family: 'WorkSans', sans-serif;
    font-weight: 600;
    color: var(--text-color-white);
    background-color: var(--button-background-color);
    border: none;
    transition: 0.2s;
}

.btn:hover{
    transform: scale(1.01);
    cursor: pointer;
}

</style>