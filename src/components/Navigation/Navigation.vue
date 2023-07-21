<template>        
        <div class="link-item">
            <a href="!#" class="link">{{ $t("Navigation.marketplace") }}</a>
        </div>
        <div class="link-item">
            <a href="!#" class="link">{{ $t("Navigation.rankings") }}</a>
        </div>
        <div class="link-item">
            <a href="!#" class="link">{{ $t("Navigation.connectAWallet") }}</a>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Links Styles Start */

    .link{
        color: var(--text-color-white);
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
    }

    .link-item{
        display: flex;
        padding: 0 20px;
        align-items: center;
    }
    /* Links Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) { 

    
   

}

/* Mobile */
@media only screen and (max-width: 540px) { 

}

</style>