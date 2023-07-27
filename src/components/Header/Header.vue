<template>
    <div class="header">

        <my-logo/>

        <img 
            src="../../assets/images/svg/BurgerMenu.svg" 
            alt="BurgerMenu" 
            class="burger-menu"
            @click="dropDawnShow">
           
        <HeaderNav class="navigation"/>
        </div>
        <HeaderNav v-if="dialogVisible" class="burger-nav"/>
</template>

<script>
import HeaderNav from './HeaderNav.vue'

    export default {
        components: {
            HeaderNav,
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

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    .header{
        padding: 0 100px    ;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .burger-menu{
        display: none;
    }

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
    
    .header{
        padding: 0 50px;
        min-height: 54px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .navigation{
        display: none;
    }
    
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .header{
        padding: 0 50px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .navigation{
        display: none;
    }

    
}
    
</style>

