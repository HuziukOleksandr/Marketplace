<template>
    <div class="category">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">
                {{ $t("Category.title") }}
            </h2>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="content">
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
        data(){
            return{
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

<style scoped>

/* Desktop */
@media only screen and (min-width: 1280px) {
   
    /* Main Styles Start */

    .category{
        min-height: 840px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        padding: 80px 0;
    }

    /* Main Styles End */
    
    /* Header Styles Start */

    .header{
        max-width: 1050px;
        width: 100%;
    }

    .title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 38px;
        line-height: 45px;
        color: var(--text-color-white);    
    }   

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 1050px;
        width: 100%;
        min-height: 662px;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        
    }

    /* Content Styles End */

}

/* Tablet */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
    
    /* Main Styles Start */
    
    .category{
        min-height: 630px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */
    
    /* Header Styles Start */ 

    .header{
        max-width: 690px;
        width: 100%;
    }

    .title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 28px;
        line-height: 39px;
        color: var(--text-color-white);    
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 690px;
        width: 100%;
        min-height: 470px;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    /* Content Styles End */

}

</style>