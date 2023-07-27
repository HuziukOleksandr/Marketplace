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

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

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
    
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
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
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

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
    
}

</style>

