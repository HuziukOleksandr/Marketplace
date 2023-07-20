<template>
    <div class="discover">
        <!-- Header Start -->
        <div class="header">
            <div class="left-side">
                <h2 class="title">{{ $t("Discover.title") }}</h2>
            <h3 class="sub-title">{{ $t("Discover.subTitle") }}</h3>
            </div>
            <div class="right-side">
                <my-button
                    class="button">
                    <img src="../../../assets/images/Buttons/RocketLaunch.svg" alt="RocketLaunch">
                    {{ $t("Discover.button") }}
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
import Card from './DiscoverCard.vue'
    export default {
        components:{
            Card
        },
        data() {
            return {
                cards: [
                    {id: "1", image: "Discover_1", name: "NFT Name", userIcon: "Keepitreal", userName: "NFT Artist", price: "1.63 ETH", bid: "0.33 wETH"},
                    {id: "2", image: "Discover_2", name: "NFT Name", userIcon: "Keepitreal", userName: "NFT Artist", price: "1.63 ETH", bid: "0.33 wETH"},
                    {id: "3", image: "Discover_3", name: "NFT Name", userIcon: "Keepitreal", userName: "NFT Artist", price: "1.63 ETH", bid: "0.33 wETH"}
                ]
            }
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Styles Start */

    .discover{
        min-height: 240px;
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
        height: 470px;
        display: flex;
        justify-content: space-between;
        gap: 30px;
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