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
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: var(--text-color-white);
    transition: 0.2s;
}

.btn:hover{
    scale: 1.01;
    cursor: pointer;
}

</style>