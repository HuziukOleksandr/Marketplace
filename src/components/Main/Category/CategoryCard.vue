<template>
    <div 
        class="max-w-[240px] w-[100%] flex flex-col rounded-[20px] bg-bg-secondary card md:max-w-[150px]" 
        v-for="card in cards"
    >
        <!-- Preview Start -->
        <div class="relative w-[100%] overflow-hidden rounded-t-[20px]">
            <img 
                :src="getCategoryImageUrl(card.background)" 
                :alt="card.background" 
                class="blur-sm bg-img"
            >
            <img 
                :src="getCategoryIconUrl(card.image)" 
                :alt="card.image" 
                class="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] preview-icon"
            >
        </div>
        <!-- Preview Start -->

        <!-- Title Start -->
        <div class="px-[30px] py-[20px] title md:px-[20px] sm:px-[20px]">
            <h2 class="text-2xl custom-text-lg md:text-base sm:text-base">
                {{ card.name}}
            </h2>
        </div>
        <!-- Title End -->
    </div>
</template>

<script>
import { getCategoryImageUrl, getCategoryIconUrl} from '../../../helpers/helpers'
    export default {
        props: {
            cards:{
                type: Object,
                reqired: true
            }
        },

        methods: {
            getCategoryImageUrl,
            getCategoryIconUrl
        }
    }
</script>

<style scoped>
.card, .bg-img, .preview-icon, .title{
    @apply transition duration-1000
}
.card:hover .bg-img, .preview-icon, .title {
    @apply blur-none cursor-pointer     
}

</style>