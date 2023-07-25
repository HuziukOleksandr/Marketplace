<template>
    <div class="card" v-for="card in cards">
        <div class="preview">
            <img :src="getImageUrl(card.icon)" :alt="card.icon">
        </div>
        <div class="header">
            <h2 :class="getTitleClasses()">{{ card.title }}</h2>
            <p class="text">{{ card.text }}</p>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
    export default {
        props: {
            cards: {
                type: Object,
                reqired: true
            },
        },
        setup(){
            const {locale} = useI18n();
            return{
                locale
            }
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../../../assets/images/Work/${name}.svg`, import.meta.url).href;
            },
            getTitleClasses(){
                return {
                    'english-title': this.locale === 'EN',
                    'ukrainian-title': this.locale === 'UA'
                };
            },
        },
    }
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 1280px) {

    /* Main Style Start */

    .card{
        max-width: 330px;
        width: 100%;
        padding: 10px 30px 30px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: start;
        border-radius: 20px;
        background-color: var(--background-secondary);
    }

    /* Main Style End */

    /* Preview Styles Start */

    .preview{
        display: flex;
        justify-content: center;
    }

    /* Preview Styles End */
    /* Header Styles Start */

    .header{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
    }

    /* English Styles Start */

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: var(--text-color-white);
        text-align: center;
    }

    /* English Styles End */

    /* Ukrainian Styles Start */

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        color: var(--text-color-white);
        text-align: center;
    }

    /* Ukrainian Styles End */

    .text{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-white);
        text-align: center;
    }

    /* Header Styles End */

    /* Content Styles Start */

    /* Content Styles End */
}

/* Tablet */
@media only screen and (max-width: 960px) {   

    /* Main Style Start */

    /* Main Style End */

    /* Header Styles Start */

    /* Header Styles End */
    
    /* Content Styles Start */

    /* Content Styles End */

}

/* Mobile */
@media only screen and (max-width: 540px) {  
    
    /* Main Style Start */

    /* Main Style End */

    /* Header Styles Start */

    /* Header Styles End */
    
    /* Content Styles Start */

    /* Content Styles End */

}

</style>