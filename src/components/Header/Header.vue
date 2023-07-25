<template>
    <div class="header">
        <!-- Logo Start -->

        <my-logo/>

        <!-- Logo End -->

        <!-- Navigation Start -->
       
         <HeaderNav class="navigation"/>

        <!-- Navigation Start -->
        </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'

    export default {
        components: {
            HeaderNav,
        },
        data() {
            return {
                
            }
        },
        methods : {
            
        }
        
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (min-width: 1280px) {

    /* Main Style Start */

    .header{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    

    .burger-menu{
        display: none;
    }

    /* Main Style End */
   
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

