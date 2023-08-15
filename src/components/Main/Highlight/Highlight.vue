<template>
    <div class="highlight">
        <div class="background">
            <div class="content">
                <Card :card="card"/>
                <my-timer :endtime="endtime"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './HighlightCard.vue'

    export default {
        components: {
            Card
        },

        data(){
            return {
                endtime: '2023-12-29',
                card:{
                    userIcon: "Shroomie",
                    userName: "Shroomie", 
                    title: "Magic Mashrooms"
                }
            }
        },
    }
</script>

<style scoped>

/* Main Style Start */

.highlight {
    max-width: 1440px;
    width: 100%;
    height: 640px;
    margin: 0 auto;
    background:  url("../../../assets/images/Highlight/Highlight.png") no-repeat center/cover;
}

.background {
    max-width: 1440px;
    width: 100%;
    height: 640px;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 60px;
    background:  linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%);
}

/* Main Style End */

/* Content Styles Start */

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 220px;
    display: flex;
}

/* Content Styles End */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    /* Main Style Start */
    
    .highlight {
        max-width: 834px;
        height: 630px;
        background: url("../../../assets/images/Highlight/HighlightMedium.png") no-repeat center/cover;
    }

    .background {
        min-height: 630px;
    }

    /* Main Style End */

    /* Content Styles Start */

    .content {
        max-width: 670px;
        height: 210px;
    }

    /* Content Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) { 

    /* Main Style Start */
    
    .highlight {
        max-width: 375px;
        min-height:500px;
        background: url("../../../assets/images/Highlight/HighlightMedium.png") center/ cover;
    }

    .background {
        min-height: 600px;
    }

    /* Main Style End */

    /* Content Styles Start */

    .content {
        max-width: 315px;   
        min-height: 210px;
        flex-direction: column;
        gap: 30px;
    }

    /* Content Styles End */

}

</style>