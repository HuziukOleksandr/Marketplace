<template>
    <div class="trending">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Trending.title") }}</h2>
            <h3 class="sub-title">{{ $t("Trending.subTitle") }}</h3>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="content">
            <Card :collections="collections" />
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import Card from './TrendingCard.vue'
import axios from 'axios'

    export default {

        components: {
            Card
        },

        data() {
            return {
                collections: '',
            }
        },

        async mounted() {
            axios
                .get('/data/Collections.json')
                .then(response =>  {
                    this.collections = response.data.Collections;
                });
        }
    }
</script>

<style scoped>

/* Main Styles Start */

.trending{
    min-height: 725px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 80px 0;
}

/* Main Styles Start */

/* Header Styles Start */

.header{
    max-width: 1050px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;  
}

/* Header Styles Start */

/* Title Styles Start */

.title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 38px;
    line-height: 45px;
}

.sub-title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
}

/* Title Styles Start */

/* Content Styles Start */

.content{
    max-width: 1050px;
    width: 100%;
    min-height: 505px;
    display: flex;
    justify-content: space-between;
}

/* Content Styles Start */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Main Styles Start */
    .trending{
        min-height: 716px;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 690px;
    }

    /* Header Styles Start */

    /* Title Styles Start */

    .title{
        font-weight: 600;
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    /* Title Styles End */

    /* Content Styles Start */

    .content{
        max-width: 690px;
    }

    /* Content Styles Start */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* Main Styles Start */

    .trending{
        min-height: 716px;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 315px;
    }

    /* Header Styles Start */

    /* Title Styles Start */

    .title{
        font-weight: 600;
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    /* Title Styles End */

    /* Content Styles Start */
    
    .content{
        max-width: 315px;
    }

    /* Content Styles Start */
}

</style>