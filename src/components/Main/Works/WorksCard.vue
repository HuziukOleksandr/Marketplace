<template>
    <div 
        class="w-[100%] max-w-[330px] p-[30px] pt-[10px] flex flex-col 
            gap-[10px] rounded-[20px] bg-bg-secondary md:max-w-[210px] 
            md:px-[20px] sm:max-w-[315px] sm:flex-row sm:p-[20px] sm:gap-[20px]" 
        v-for="card in cards"
    >
        <div class="flex justify-center items-center">
            <img 
                :src="getWorkImageUrl(card.icon)" 
                :alt="card.icon"
                class="sm:w-[100px] sm:h-[100px]"
            >
        </div>
        
        <div class="flex flex-col gap-[10px] justify-center sm:w-[150px]">
            <h2 class="custom-text-lg text-xl text-center sm:text-base">
                {{ card.title }}
            </h2>

            <p class="custom-text-nm text-base text-center  sm:text-xs">
                {{ card.text }}
            </p>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { getWorkImageUrl } from '../../../helpers/helpers'
    export default {
        props: {
            cards: {
                type: Object,
                reqired: true
            },
        },

        setup() {
            const {locale} = useI18n();
            return {
                locale
            }
        },

        methods: {
            getWorkImageUrl
        },
    }
</script>