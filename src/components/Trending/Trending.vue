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
            <Card :cards="cards"/>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import Card from './TrendingCards.vue'

    export default {
        components: {
            Card
        },
        data() {
            return {
                cards: [
                    { mainPicture: 'DSGNAnimals',
                    secondaryPicture: [ 
                        { id: 1, name: 'DSGNAnimals-1' },
                        { id: 1,name: 'DSGNAnimals-2' }
                    ],
                    lenght: '1025+', preview: 'DSGN Animals', namePicture: 'MrFox', userName: 'MrFox' },
                    { mainPicture: 'MagicMushrooms', secondaryPicture: [ 
                        { id: 1, name: 'MagicMushrooms-1' },
                        { id: 1, name: 'MagicMushrooms-2' }
                    ],
                    lenght: '1025+', preview: 'Magic Mushrooms', namePicture: 'Shroomie', userName: 'Shroomie' },
                    { mainPicture: 'DiscoMachines',
                    secondaryPicture: [ 
                        { id: 1, name: 'DiscoMachines-1' },
                        { id: 1, name: 'DiscoMachines-2' }
                    ],
                    lenght: '1025+', preview: 'Disco Machines', namePicture: 'BeKind2Robots', userName: 'BeKind2Robots' }
                ]   
            }
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Style Start */

    .trending{
        min-height: 725px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        padding: 80px 0;
    }

    /* Main Style End */

    /* Header Styles Start */

    .header{
        max-width: 1050px;
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
        line-height: 45px;
    }

    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 35px;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content{
        max-width: 1050px;
        width: 100%;
        height: 525px;
        display: flex;
        gap: 30px;
    }

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