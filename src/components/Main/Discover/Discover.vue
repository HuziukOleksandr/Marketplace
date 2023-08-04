<template>
    <div class="discover">
        <!-- Header Start -->
        <div class="header">
            <div class="left-side">
                <h2 class="title">{{ $t("Discover.title") }}</h2>
            <h3 class="sub-title">{{ $t("Discover.subTitle") }}</h3>
            </div>
            <div class="right-side">
                <my-button class="button">
                    <img 
                        src="../../../assets/images/Buttons/RocketLaunch.svg" 
                        alt="RocketLaunch">
                    {{ $t("Discover.button") }}
                </my-button>
            </div>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="content">
            <Card :cards="cards.slice(0,4)" />
        </div>
        <!-- Content End -->

        <div class="bottom">
                <my-button class="button">
                    <img 
                        src="../../../assets/images/Buttons/RocketLaunch.svg" 
                        alt="RocketLaunch">
                    {{ $t("Discover.button") }}
                </my-button>
            </div>
    </div>
</template>

<script>
import Card from './DiscoverCard.vue'
import axios from 'axios';

    export default {
        components:{
            Card
        },

        data() {
            return {
                cards: '',
            }
        },

        mounted() {

            axios
                .get('/data/Cards.json')
                .then(response =>  {
                    this.cards = response.data.Cards
                });

        }
    }
</script>

<style scoped>

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
    min-height: 470px;
    /* display: flex;
    justify-content: space-between;
    gap: 30px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Content Styles End */

.bottom{
    display: none;
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
    
    /* Main Styles Start */

    .discover{
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 690px;
        width: 100%;
    }

    .left-side{
        max-width: 400px;
    }

    .title{
        font-size: 28px;
        line-height: 39px;
    }
    
    .sub-title{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 690px;
    }

    /* Content Styles End */
    
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {  

    /* Main Styles Start */

    .discover{
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 315px;
        gap: 10px;
        flex-direction: column;
    }

    .left-side{
        max-width: 400px;
    }

    .title{
        font-size: 28px;
        line-height: 39px;
    }
    
    .sub-title{
        font-size: 16px;
        line-height: 22px;
    }
    .right-side{
        display: none;
    }

    .button{
        width: 315px;
        justify-content: center;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 315px;
        flex-direction: column;
    }

    /* Content Styles End */

    .bottom{
        display: block;
    }
}

</style>