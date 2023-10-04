<template>
    <div class="h-[60px] flex gap-[10px] rounded-[20px] px-[20px] py-[18px] border-2 border-bg-secondary border-solid">
        <input 
            v-bind="$attrs"  
            class=" font-base focus:outline-none custom-text-nm bg-bg-color" 
            @input="updateInput" 
            type="text"
        />

        <div class="h-[24px] hover:cursor-pointer">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-search",

        methods: {
            updateInput(event){
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>
