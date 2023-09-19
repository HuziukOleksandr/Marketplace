<template>
    <div class="custom-frame-styles">
        <!-- Header Start -->
        <div class="w-[100%]">
            <h2 class="custom-title mb-[10px]">
                {{ $t("Works.title") }}
            </h2>
            
            <h3 class="custom-sub-title">
                {{ $t("Works.subTitle") }}
            </h3>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div 
            class="w-[100%] flex justify-between gap-[30px] sm:flex-col sm:gap-[20px]"
        >
            <Card :cards="cards"/>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import Card from './WorksCard.vue'
import {useI18n} from 'vue-i18n'

    export default {
        components: {
            Card
        },

        setup(){
            const {t}  = useI18n()
            return {
                t
            }
        },

        computed: {
            cards() {
                return [
                { ad: 1, icon: "First", title: this.t("Works.cardTitle.first"), text: this.t("Works.cardText.first") },
                { ad: 1, icon: "Second", title: this.t("Works.cardTitle.second"), text: this.t("Works.cardText.second") },
                { ad: 1, icon: "Third", title: this.t("Works.cardTitle.third"), text: this.t("Works.cardText.third") }
                ]
            }
        }
    }
</script>