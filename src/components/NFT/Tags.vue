<template>

    <h2 class="font-space font-semibold text-xl text-grey mb-[20px] sm:text-base">
        {{ $t("NFTPage.tags") }}
    </h2>

    <div class="flex gap-[20px] md:flex-col sm:flex-col">
        <div 
            class="tag" 
            v-for="tag in tags"
        >
            {{ tag }}
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            tags: {
                type: Object,
                required: true  
            }
        }
    }
</script>

<style scoped>

.title {
    @apply font-space font-semibold text-xl text-grey mb-[20px]
}

.tag {
    @apply w-fit h-[45px] px-[20px]
    flex items-center rounded-[20px]
    bg-bg-secondary text-white
    font-serrat font-semibold text-base uppercase
    transition duration-300
    hover:cursor-pointer hover:scale-102
}

</style>