<template>
    <nav class="header">
        <!-- Logo Start -->
        <div class="logo">
            <img 
                src="../../assets/images/svg/favicon.svg" 
                alt="icon" 
                class="logo-picture">
            <img 
                src="../../assets/images/svg/logo-title.svg" 
                alt="title"
                class="logo-title">
        </div>
        <!-- Logo End -->

        <!-- Navigation Start -->
        <div class="nav-links">
            <div class="link-item">
                <a href="!#" class="link">{{ $t("Navigation.marketplace") }}</a>
            </div>
            <div class="link-item">
                <a href="!#" class="link">{{ $t("Navigation.rankings") }}</a>
            </div>
            <div class="link-item">
                <a href="!#" class="link">{{ $t("Navigation.connectAWallet") }}</a>
            </div>
            <my-button class="button">
                <img src="../../assets/images/Buttons/User.svg" alt="user">
                {{ $t("Navigation.button") }}
            </my-button>

            <div class="link-item ">
                <img 
                    :src="getImageUrl(language)" 
                    alt="Flag uk" 
                    class="loc-icon"
                    @click="dropDawnShow">
            </div>
            
            <my-localization 
                :dialogVisible="dialogVisible"
                @changeLanguage="changeLanguage"
                v-model:show="dialogVisible"
                @closeWindow="closeWindow"/>
        </div>
        <!-- Navigation Start -->
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                language: "EN",
                dialogVisible: false,
                
            }
        },
        methods: {
            dropDawnShow(){
                this.dialogVisible = !this.dialogVisible;
            },
            getImageUrl(name) {  
                return new URL(`../../assets/images/svg/${name}.svg`, import.meta.url).href;
            },
            changeLanguage(lang){
                this.language = lang;
            },
            closeWindow(dialogVisible){
                this.dialogVisible = dialogVisible;
            }
            
        },
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Style Start */

    .header{
        width: 100%;
        height: 100px;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Main Style End */
    
    /* Logo Styles Start */

    .logo{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .logo-title, .logo-picture{
        transition: 0.2s;
    }

    .logo-title:hover, .logo-picture:hover{
        transform: scale(1.02);
        cursor: pointer;
    }

    /* Logo Styles End */

    /* Links Styles Start */

    .nav-links{
        height: 60px;
        display: flex;
        gap: 10px;
        position: relative;
    }

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

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

    .button{
        height: 60px;
        padding: 0 30px;
        background-color: var(--button-background-color);
        border: none;
        color: var(--text-color-white);
    }

    .loc-icon{
        width: 35px;
        transition: 0.2s;
    }  

    .loc-icon:hover{
        cursor: pointer;
        scale: 1.05;
    }

    /* Links Styles End */
   
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