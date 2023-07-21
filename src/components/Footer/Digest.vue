<template>
    <div class="digest">
        <h2 :class="getTitleClasses()">{{ $t("Footer.title") }}</h2>
        <p class="sub-title">{{ $t("Footer.sub-title") }}</p>
        <div class="input-btn">
            <my-input class="input" :placeholder="$t('Footer.input')"/>
            <my-button class="button">
                {{ $t("Footer.button") }}
            </my-button>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
    export default {
        setup(){
            const {locale} = useI18n();
            return {
                locale
            };
        },
        methods: {
            getTitleClasses(){
                return {
                    'english-title': this.locale === 'EN',
                    'ukrainian-title': this.locale === 'UA'
                };
            },
            getTextClasses(){
                return {
                    'english-text': this.locale === 'EN',
                    'ukrainian-text': this.locale === 'UA'
                };
            }
        } 
    }
</script>

<style scoped>
/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Styles Start */

    .digest{
        max-width: 420px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sub-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
    }

    .input-btn{
        position: relative;
        display: flex;
    }

    .input{
        max-width: 420px;
        width: 100%;
        height: 60px;
        border: none;

    }
    .button{
        position: absolute;
        right: 0;
        height: 60px;
        background-color: var(--button-background-color);
        color: var(--text-color-white);
        padding: 0 50px;
        border: none;
    }
    .button:hover{
        scale: 1;
    }

    /* Main Styles End */

    /* English Language Start */

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white)
    }

    /* English Language End */

    /* Ukraine Language Start */

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        color: var(--text-color-white);
        letter-spacing: 1px;
    }

    /* Ukraine Language End */

}


/* Tablet */
@media only screen and (max-width: 960px) {   

    /* Main Styles Start */

    /* Main Styles End */

    /* Left Side Styles Start */

    /* English Language Start */


    /* English Language End */

    /* Ukraine Language Start */


    /* Ukraine Language End */

    /* Left Side Styles End */

    /* Right Side Styles Start */

    /* Right Side Styles End */
}

/* Mobile */
@media only screen and (max-width: 540px) {   

    /* Main Styles Start */

    /* Main Styles End */

    /* Left Side Styles Start */

    /* English Language Start */


    /* English Language End */

    /* Ukraine Language Start */


    /* Ukraine Language End */

    /* Left Side Styles End */

    /* Right Side Styles Start */

    /* Right Side Styles End */

}

</style>