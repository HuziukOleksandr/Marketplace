<template>
        <div class="menu" >
            <Navigation class="navigation" :link-item-styles="customLinkItemStyles"/>

            <my-button 
                class="button"

                @click="this.$router.push({ name: 'Register' })">
                    <img src="../../assets/images/Buttons/User.svg" alt="user">
                    {{ $t("Header.button") }}
            </my-button>
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
                customLinkItemStyles: {
                    display: "flex",
                    padding: "0 20px",
                    alignItems: "center",
                    color: "var(--text-color-white)",
                    height: "60px"
                },
            }
        },
    }
</script>

<style scoped>

.navigation {
    display: flex;
}

.button{
    height: 60px;
    padding: 0 30px;
    background-color: var(--button-background-color);
    border: none;
    color: var(--text-color-white);
    font-size: 16px;
    line-height: 22px;
}


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    .menu{
        width: 100%;
        min-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 30px;
    }

    .button{
        padding: 20px 50px;
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .navigation {
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
    }
    .menu{
        flex-direction: column;
    }

    .button{
        width: 315px;
        height: 45px;
        padding: 15px 50px;
        margin: 0 auto;
        justify-content: center;
    }

}
</style>

