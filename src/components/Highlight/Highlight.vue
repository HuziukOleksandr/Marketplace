<template>
    <div class="highlight">
        <div class="background">
            <div class="content">
                <Card :card="card"/>
                <Timer/>
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
                card:{
                    userIcon: "Shroomie",
                    userName: "Shroomie", 
                    title: "Magic Mashrooms"}
                
            }
        },
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Style Start */

    .highlight{
        max-width: 1440px;
        width: 100%;
        height: 640px; 
        background-image:  url("../../assets/images/Highlight/Highlight.svg");
        margin-bottom: 400px;
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

/* Tablet */
@media only screen and (max-width: 960px) { 

    /* Main Style Start */

    /* Main Style End */

    /* Logo Styles Start */

    /* Logo Styles End */

    /* Lins Styles Start */

    /* Links Styles End */

}

/* Mobile */
@media only screen and (max-width: 540px) { 

    /* Main Style Start */

    /* Main Style End */

    /* Logo Styles Start */

    /* Logo Styles End */

    /* Lins Styles Start */

    /* Links Styles End */ 

}

</style>