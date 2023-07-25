<template>        
    <div>
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.marketplace") }}</a>
        
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.rankings") }}</a>
        
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.connectAWallet") }}</a>
    </div>
</template>

<script>
    export default {
        props: {
            linkItemStyles: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (min-width: 1280px) {

    /* Links Styles Start */

    .link{
        
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
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