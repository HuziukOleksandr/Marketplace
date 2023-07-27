<template>
    <div class="nav-links" >

        <Navigation class="navigation" :link-item-styles="customLinkItemStyles"/>

        <div class="other">
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
        </div>
        
        <my-localization 
            :dialogVisible="dialogVisible"
            @changeLanguage="changeLanguage"
            v-model:show="dialogVisible"
            @closeWindow="closeWindow"/>

    </div>
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
                customLinkItemStyles: {
                    display: "flex",
                    padding: "0 20px",
                    alignItems: "center",
                    color: "var(--text-color-white)",
                    height: "60px"
                },
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

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    .navigation {
        display: flex;
    }

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

    .nav-links{
        height: 60px;
        display: flex;
        gap: 10px;
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

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
    
    .other{
        height: 60px;
        display: flex;
        gap: 30px;
        margin: 0 auto;
    }

    .navigation {
        display: flex;
        
        margin: 0 auto;
    }

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

    .nav-links{
        max-width: 690px;
        width: 100%;
        height: 60px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        
        position: relative;
        margin: 0 auto;
    }

    .button{
        
        height: 60px;
        padding: 0 30px;
        background-color: var(--button-background-color);
        border: none;
        color: var(--text-color-white);
        padding: 20px 50px;
    }

    .loc-icon{
        width: 35px;
        transition: 0.2s;
    }  

    .loc-icon:hover{
        cursor: pointer;
        scale: 1.05;
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .navigation {
        display: flex;
    }

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

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
}
</style>

