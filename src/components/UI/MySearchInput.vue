<template>
    <div class="input-wrapper">
        <input v-bind="$attrs"  class="input" @input="updateInput" type="text" />
        <div class="image-slot">
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

<style scoped>
.input-wrapper {
    display: flex;
    gap: 10px;
    border-radius: 20px;
    height: 60px;
    border: 1px solid  var(--background-secondary);
    padding: 18px 20px;
}

.input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
}

.image-slot {
    height: 24px;
}

.image-slot:hover {
    cursor: pointer;
}
.input:focus {
    outline: none;
}

.input {
    width: 100%;
    height: 100%;
}
</style>