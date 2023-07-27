<template>
    <div class="highlight">
        <div class="background">
            <div class="content">
                <Card :card="card"/>
                <Timer :endtime="endtime"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './HighlightCard.vue'
import Timer from './HighlightTimer.vue'
    export default {
        components: {
            Card, Timer
        },
        data(){
            return {
                endtime: '2023-07-28',
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

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    /* Main Style Start */

    .highlight{
        max-width: 1440px;
        width: 100%;
        height: 640px;
        margin: 0 auto;
        background-image:  url("../../../assets/images/Highlight/Highlight.svg");
    }
    .background{
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

    .content{
        max-width: 1050px;
        width: 100%;
        height: 220px;
        display: flex;
    }

    /* Content Styles End */

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    /* Main Style Start */
    
    .highlight{
        max-width: 834px;
        width: 100%;
        height: 630px;
        margin: 0 auto;
        background: url("../../../assets/images/Highlight/HighlightMedium.svg");
        
    }
    .background{
        width: 100%;
        min-height: 630px;
        display: flex;
        justify-content: center;
        align-items: end;
        padding-bottom: 60px;
        background:  linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%);
    }

    /* Main Style End */

    /* Content Styles Start */

    .content{
        max-width: 670px;
        width: 100%;
        height: 210px;
        display: flex;
    }

    /* Content Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) { 

    /* Main Style Start */
    
    .highlight{
        max-width: 375px;
        width: 100%;
        min-height:500px;
        margin: 0 auto;
        background: url("../../../assets/images/Highlight/HighlightMedium.svg") center/ cover;
        
    }
    .background{
        width: 100%;
        min-height: 600px;
        display: flex;
        justify-content: center;
        align-items: end;
        padding-bottom: 60px;
        background:  linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%);
    }

    /* Main Style End */

    /* Content Styles Start */

    .content{
        max-width: 315px;
        width: 100%;
        min-height: 210px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    /* Content Styles End */

}

</style>