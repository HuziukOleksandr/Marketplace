<template>
    <div class="custom-frame-styles">
        <!-- Header Start -->
        <div class="w-[100%]">
            <h2 class="custom-title">
                {{ $t("Category.title") }}
            </h2>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="w-[100%] grid gap-[30px] grid-cols-4 grid-rows-2 sm:grid-cols-2">
            <Card :cards="cards"/>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import Card from './CategoryCard.vue'
import { useI18n } from 'vue-i18n'

    export default {
        components:{
            Card
        },

        setup(){
            const {t}  = useI18n()
            return{
                t
            }
        },

        computed: {
            cards(){
                return [
                    {id: 1, name: this.$t("Category.art"), background: "Art", image: "Art-icon"},
                    {id: 2, name: this.$t("Category.collectibles"), background: "Collectibles", image: "Collectibles-icon"},
                    {id: 3, name: this.$t("Category.music"), background: "Music", image: "Music-icon"},
                    {id: 4, name: this.$t("Category.photography"), background: "Photography", image: "Photography-icon"},
                    {id: 5, name: this.$t("Category.video"), background: "Video", image: "Video-icon"},
                    {id: 6, name: this.$t("Category.utility"), background: "Utility", image: "Utility-icon"},
                    {id: 7, name: this.$t("Category.sport"), background: "Sport", image: "Sport-icon"},
                    {id: 8, name: this.$t("Category.virtualWorlds"), background: "VirtualWorlds", image: "VirtualWorlds-icon"}
                ]
            }
        }
    }
</script>