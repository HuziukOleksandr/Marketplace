<template>
    <section 
        class="flex gap-[30px] py-20 m-auto justify-center items-center sm:flex-col sm:gap-0 sm:py-10"
    >
        <div class="max-w-[510px] md:max-w-[330px] sm:max-w-[315px]">
            <h2 
                class="mb-[20px] text-start md:text-4xl sm:text-2xl custom-text-lg"
                :class="getHeroTitleStyles()"
            >
                {{ $t("Hero.title") }}
            </h2>
            <p 
                class="text-[22px] mb-[40px] md:text-base  sm:text-base custom-text-nm"
                :class="getHeroTextStyles()"
            >
                {{ $t("Hero.text") }}
            </p>

            <Info 
                :infoList="infoList" 
                class="sm:hidden"
            />
        </div>

        <div class="max-w-[510px] w-[100%] flex flex-col md:max-w-[330px] sm:max-w-[315px]">
            <img 
                src="../../../assets/images/Hero/hero.svg" 
                alt="Space Walking"
            >

            <div 
                class="h-[110px] flex flex-col rounded-b-[20px] gap-[10px] 
                    bg-bg-secondary px-[22px] py-[20px] sm:mb-[40px]"
            >
                <h2 class="leading-[30px] text-[22px] custom-text-nm">
                    {{previewTitle}}
                </h2>

                <my-user :userName="userName" />
            </div>

            <Info :infoList="infoList"  class="hidden sm:flex"/>
        </div>      
    </section>
</template>

<script>
import Info from './HeroInfo.vue'
import { useI18n } from 'vue-i18n'
import { getHeroTitleStyles, getHeroTextStyles } from '../../../helpers/localization'
    export default {
        components: {
            Info
        },

        setup(){
            const {t, locale}  = useI18n()
            return{
                t,
                locale
            }
        },

        data(){
            
            return {
                userName: 'Animakid',
                previewTitle: 'Space Walking',
            }
        },

        computed: {
            infoList(){
                return [
                    { id: 1, number: '240k+ ', title: this.t("Hero.totalSale")},
                    { id: 2, number: '100k+ ', title: this.t("Hero.auctions")},
                    { id: 3, number: '240k+ ', title: this.t("Hero.artists")}
                ] 
            }
        },

        methods: {
            getHeroTitleStyles,
            getHeroTextStyles
        },
    }
</script>