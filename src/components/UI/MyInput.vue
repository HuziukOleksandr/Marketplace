<template>
    <div class="input-wrapper">
        <div class="image-slot">
            <slot name="image"></slot>
        </div>
        <input v-bind="$attrs"  class="input" />
    </div>
</template>

<script>
    export default {
        name: "my-input"
    }
</script>

<style scoped>


.input-wrapper{
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
}

.input{
    background-color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: black;
}
.input:focus{
    outline: none;
}

.input{
    width: 300px;
    height: 100%;
}
</style>