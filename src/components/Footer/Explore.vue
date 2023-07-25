<template>
    <div class="explore">
        <h2 class="explore-header">{{ $t("Footer.explore") }}</h2>
        <Navigation class="navigation" :link-item-styles="customLinkItemStyles"/>
    </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'
    export default {
        components:{
            Navigation
        },
        data(){
            return{
                customLinkItemStyles: {
                    color: "var(--text-color-secondary)",
                },
            }
        }
    }
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 1280px) {


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
        color: var(--text-color-white);
        margin-bottom: 30px;
    } 

    .navigation{
        display: flex;
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

