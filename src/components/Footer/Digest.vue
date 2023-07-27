<template>
    <div class="digest">
        <h2 :class="getTitleClasses()">{{ $t("Footer.title") }}</h2>
        <p class="sub-title">{{ $t("Footer.sub-title") }}</p>
        <div class="input-btn">
            <my-input class="input" :placeholder="$t('Footer.input')"/>
            <my-button class="button">
                <img src="../../assets/images/Buttons/EnvelopeSimple.svg" alt="EnvelopeSimple">
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

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    /* Main Styles Start */

    .digest{
        max-width: 420px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Main Styles End */

    .sub-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
    }

    /* Input-Button Styles Start */

    .input-btn{
        position: relative;
        display: flex;
    }

    .input{
        max-width: 420px;
        width: 100%;
        height: 60px;
        border: none;
        padding: 16px 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--background-color);
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

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white)
    }

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        color: var(--text-color-white);
        letter-spacing: 1px;
    }

    /* Input-Button Styles End */

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Main Styles Start */
    
    .digest{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    /* Main Styles End */

     .sub-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
    }

    /* Input-Button Styles Start */

    .input-btn{
        max-width: 420px;
        width: 100%;
        position: relative;
        display: flex;
    }

    .input{
        max-width: 420px;
        width: 100%;
        height: 60px;
        border: none;
        padding: 10px 20px;
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

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white)
    }

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        color: var(--text-color-white);
        letter-spacing: 1px;
    }

    /* Input-Button Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* Main Styles Start */
    
    .digest{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    /* Main Styles End */

     .sub-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
    }

    /* Input-Button Styles Start */

    .input-btn{
        max-width: 420px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .input{
        width: 100%;
        height: 45px;
        border: none;
        padding: 15px 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
    
    .button{
        height: 45px;
        background-color: var(--button-background-color);
        color: var(--text-color-white);
        padding: 0 50px;
        border: none;
        justify-content: center;
    }
    .button:hover{
        scale: 1;
    }

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white)
    }

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        color: var(--text-color-white);
        letter-spacing: 1px;
    }

    /* Input-Button Styles End */
}

</style>