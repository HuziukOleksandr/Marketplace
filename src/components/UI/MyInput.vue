<template>
    <div class="flex items-center relative ">
        <div class="absolute left-3">
            <slot name="image"></slot>
        </div>
        <input v-bind="$attrs"  class="input custom-text-input" />
    </div>
</template>

<script>
    export default {
        name: "my-input"
    }
</script>

<style scoped>



.input {
    @apply 
    w-[100%] h-[100%] 
    bg-white text-base focus:outline-none 
    px-5 rounded-[20px]
}

</style>