<template>
    <nav class="header">
        <!-- Logo Start -->
        <my-logo />
        <!-- Logo End -->

        <!-- Navigation Start -->
        <div class="nav-links">

            <Navigation class="navigation-header"/>

            <my-button class="button">
                <img src="../../assets/images/Buttons/User.svg" alt="user">
                {{ $t("Header.button") }}
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
import Navigation from '../Navigation/Navigation.vue'

    export default {
        components: {
            Navigation
        },
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

    /* Logo Styles End */

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

    /* Links Styles Start */

    .nav-links{
        height: 60px;
        display: flex;
        gap: 10px;
        position: relative;
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

<style>
.navigation-header > .link-item{

    display: flex;
    align-items: center;
    padding:0 20px;
}
</style>
