<template>
    <div class="footer">
        <!-- Content Start -->
        <div class="content">

        </div>
        <!-- Content End -->

        <!-- Bottom Start -->
        <div class="bottom">
            <p class="conporations">Ⓒ NFT Market. Use this template freely.</p>
        </div>
        <!-- Bottom End -->
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>
/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Style Start */
    
    .footer{
        max-width: 1440px;
        width: 100%;
        height: 355px;
        background-color: var(--background-secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        padding: 40px 0;
    }


    /* Main Style End */

    /* Content Styles Start */

    .content{
        max-width: 1050px;
        width: 100%;
        height: 190px;
    }

    /* Content Styles End */

    /* Botton Styles Start */

    .bottom{
        max-width: 1050px;
        width: 100%;
        height: 35px;   
        border-top: 1px solid var(--text-color-secondary);
        display: flex;
        align-items: end;
    }

    .conporations{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #CCCCCC;
    }
    /* Botton Styles End */

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