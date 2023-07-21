<template>
    <div class="explore">
        <h2 class="explore-header">{{ $t("Footer.explore") }}</h2>
        <Navigation class="navigation"/>
    </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'
    export default {
        components:{
            Navigation
        }
    }
</script>

<style scoped>
/* Desktop */
@media only screen and (max-width: 1920px) {


    /* Explore Styles Start */

    .explore{
        max-width: 240px;
        width: 100%;
    }

    .explore-header{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white)
    } 

    .navigation{
        flex-direction: column ;
        gap: 20px;
    }
    
    /* Explore Styles End */



    /* Subscribe Styles Start */



    /* Subscribe Styles End */



    /* English Styles Start */



    /* English Styles End */

    /* Ukrainian Styles Start */



    /* Ukrainian Styles End */

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

