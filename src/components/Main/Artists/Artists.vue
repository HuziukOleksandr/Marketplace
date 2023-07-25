<template>
    <div class="artists">
        <!-- Header Start -->
        <div class="header">
            <div class="left-side">
                <h2 class="title">{{ $t("Artists.title") }}</h2>
            <h3 class="sub-title">{{ $t("Artists.subTitle") }}</h3>
            </div>
            <div class="right-side">
                <my-button
                    class="button">
                    <img src="../../../assets/images/Buttons/RocketLaunch.svg" alt="RocketLaunch">
                    {{ $t("Artists.button") }}
                </my-button>
            </div>
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
import Card from './ArtistCards.vue'
import { useI18n } from 'vue-i18n'

    export default {
        components: {
            Card
        }, 
        setup(){
            const {locale}  = useI18n()
            return{
                locale
            }
        },
        data(){
            return {
                cards: [
                    { id: 1, name: 'Keepitreal', sale: '34.53 ETH'},
                    { id: 2, name: 'DigiLab', sale: '34.53 ETH'},
                    { id: 3, name: 'GravityOne', sale: '34.53 ETH'},
                    { id: 4, name: 'Juanie', sale: '34.53 ETH'},
                    { id: 5, name: 'BlueWhale', sale: '34.53 ETH'},
                    { id: 6, name: 'Mr Fox', sale: '34.53 ETH'},
                    { id: 7, name: 'Shroomie', sale: '34.53 ETH'},
                    { id: 8, name: 'Robotica', sale: '34.53 ETH'},
                    { id: 9, name: 'RustyRobot', sale: '34.53 ETH'},
                    { id: 10, name: 'Animakid', sale: '34.53 ETH'},
                    { id: 11, name: 'Dotgu', sale: '34.53 ETH'},
                    { id: 12, name: 'Ghiblier', sale: '34.53 ETH'}
                ]
            }
        },
        methods: {
            getSubTitleClasses() { 
                return {
                    'english-subTitle': this.locale === 'EN',
                    'ukrainian-subTitle': this.locale === 'UA'
                };
            }
        }
    }
</script>

<style  scoped>

/* Desktop */
@media only screen and (min-width: 1280px) {

    /* Main Styles Start */

    .artists{
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
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .left-side{
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 38px;
        line-height: 46px;
        text-align: start;
    }
    
    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 35px;
        text-align: start;
    }

    .right{
        display: flex;
        justify-content: end;
        align-items: end;
    }

    .button{
        height: 60px;
        padding: 0 50px;
        background-color: var(--background-color);
        border: 2px solid var(--button-background-color);
        color: var(--text-color-white);
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 1050px;
        width: 100%;
        min-height: 775px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    /* Content Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) { 
    
    /* Main Styles Start */

    /* Main Styles End */

    /* Header Styles Start */

    /* Header Styles End */

    /* Content Styles Start */

    /* Content Styles End */
    
}

/* Mobile */
@media only screen and (max-width: 540px) {   

    /* Main Styles Start */

    /* Main Styles End */

    /* Header Styles Start */

    /* Header Styles End */

    /* Content Styles Start */

    /* Content Styles End */

}

</style>