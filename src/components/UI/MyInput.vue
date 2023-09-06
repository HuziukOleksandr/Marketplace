<template>
    <div class="flex">
        <div class="image-slot">
            <slot name="image"></slot>
        </div>
        <input v-bind="$attrs"  class=" bg-white text-base custom-text-input focus:outline-none px-5" />
    </div>
</template>

<script>
    export default {
        name: "my-input"
    }
</script>