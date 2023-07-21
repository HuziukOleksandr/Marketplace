<template>
    <div class="community">
        <my-logo class="logo"/>
        <p class="text">{{ $t("Footer.text") }}</p>
        <h2 class="title">{{ $t("Footer.community") }}</h2>
        <div class="icons">
            <img 
                src="../../assets/images/Footer/DiscordLogo.svg" 
                alt="DiscordLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/YoutubeLogo.svg" 
                alt="YoutubeLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/TwitterLogo.svg" 
                alt="TwitterLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/InstagramLogo.svg" 
                alt="InstagramLogo" 
                class="icon">
        </div>
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
    .community{
        max-width: 328px;
        width: 100%;
    }

    .logo{
        margin-bottom: 30px;
    }

    .text, .title{
        font-family: 'Mintserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
        margin-bottom: 20px;
    }

    .title{
        margin-bottom: 15px;
    }
    
    .icons{
        width: 158px;
        display: flex;
        justify-content: space-between;
    }

    .icon{
        transition: 0.2s;
    }
    .icon:hover{
        cursor: pointer;
        scale: 1.01;

    }
    /* Main Style End */

    /* English Styles Start */

    /* English Styles End */

    /* Ukrainian Styles Start */

    /* Ukrainian Styles End */

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