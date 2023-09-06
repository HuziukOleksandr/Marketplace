<template>
    <button 
        class="button flex items-center font-serrat font-semibold rounded-[20px] gap-[10px]"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>

.button { 
    @apply
    transition duration-300
    hover:scale-102
}

</style>