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
            <Card v-if="shouldDisplayFullArray" :cards="cards" />
            <Card v-else-if="shouldDisplayForTablet" :cards="cards.slice(0, 2)" />
            <Card v-else :cards="[cards[0]]" />
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
                ],
                shouldDisplayFullArray: true,
                shouldDisplayForTablet: true
            }
        },
        methods: {
            handleResize() {
                this.shouldDisplayFullArray = window.innerWidth >= 1280;
                this.shouldDisplayForTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
            }
        },
        mounted() {

            const storedWidth = localStorage.getItem('screenWidth');
            if (storedWidth && parseInt(storedWidth) === window.innerWidth) {
                this.shouldDisplayFullArray = localStorage.getItem('shouldDisplayFullArray') === 'true';
            } else {
                this.shouldDisplayFullArray = window.innerWidth >= 1280;
                this.shouldDisplayForTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
                localStorage.setItem('screenWidth', window.innerWidth);
                localStorage.setItem('shouldDisplayFullArray', this.shouldDisplayFullArray);
            }
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

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
        min-height: 525px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* Content Styles Start */

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Main Styles Start */
    .trending{
        min-height: 716px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 690px;
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
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    /* Title Styles End */

    /* Content Styles Start */

    .content{
        max-width: 690px;
        width: 100%;
        min-height: 525px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* Content Styles Start */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* Main Styles Start */

    .trending{
        min-height: 716px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Header Styles Start */

    .header{
        max-width: 315px;
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
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    /* Title Styles End */

    /* Content Styles Start */
    
    .content{
        max-width: 315px;
        width: 100%;
        min-height: 525px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* Content Styles Start */
}

</style>