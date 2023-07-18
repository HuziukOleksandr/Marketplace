<template>
    <div class="card" v-for="card in cards">
        <!-- Preview Start -->
        <div class="preview">
            <img :src="getImageUrl(card.background)" alt="" class="bg-img">
            <img :src="getImageUrl(card.image)" alt="" class="preview-icon">
        </div>
        <!-- Preview Start -->

        <!-- Title Start -->
        <div class="title">
            <h2 :class="getTitleClasses()">{{ card.name}}</h2>
        </div>
        <!-- Title End -->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
    export default {
        props: {
            cards:{
                type: Object,
                reqired: true
            }
        },
        setup(){
            const {t, locale}  = useI18n()
            return{
                t, locale
            }
        },
        data(){
            return {
                
            }
        },
        methods: {
            getTitleClasses(){
                return {
                    'english-title': this.locale === 'EN',
                    'ukrainian-title': this.locale === 'UA'
                };
            },
            getImageUrl(name) {
                
                return new URL(`../../assets/images/Categories/${name}.svg`, import.meta.url).href;
            } 
        },
        computed:{
            background(){
                return{
                    backgroundImage: `url(${this.getImageUrl(this.cards.background)})`
                }
            }
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Styles Start */

    .card{
        max-width: 240px;
        width: 100%;
        height: 316px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        background-color: var(--background-secondary);
        transition: 0.2s;
    }

    .card:hover .bg-img, .preview-icon, .title{
        filter: blur(0);
        cursor: pointer;
    }

    /* Main Styles End */
    
    /* Preview Styles Start */

    .preview{
        position: relative;
        width: 100%;
        height: 240px;
        overflow: hidden;
        border-radius: 20px 20px 0 0;
    }

    .bg-img {
        filter: blur(4px);
        transition: 0.6s;
    }

    .preview-icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }

    /* Preview Styles End */

    /* Title Styles Start */

    .title{
        padding: 20px 30px 25px 30px;
    }

    /* English Style Start */

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 31px;
        color: var(--text-color-white);
    }

    /* English Style End */
    
    /* Ukrainian Style Start */

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 21px;
        line-height: 31px;
        color: var(--text-color-white);
    }

    /* Ukrainian Style End */

    /* Title Styles End */
}

/* Tablet */
@media only screen and (max-width: 960px) {

    /* Main Styles Start */

    /* Main Styles End */
    
    /* Preview Styles Start */

    /* Preview Styles End */

    /* Title Styles Start */

    /* English Style Start */



    /* English Style End */
    
    /* Ukrainian Style Start */

    

    /* Ukrainian Style End */

    /* Title Styles End */

}

/* Mobile */
@media only screen and (max-width: 540px) {   

    /* Main Styles Start */

    /* Main Styles End */
    
    /* Preview Styles Start */

    /* Preview Styles End */

    /* Titte Styles Start */

    /* English Style Start */



    /* English Style End */
    
    /* Ukrainian Style Start */

    

    /* Ukrainian Style End */

    /* Titte Styles End */

}

</style>