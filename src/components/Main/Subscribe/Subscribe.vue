<template>
    <div class="subscribe">
        <!-- Content Start -->
        <div class="content">
            <img src="../../../assets/images/Subscribe/Photo.svg" alt="Subscribe/Photo">
            <!-- Preview Start -->
            <div class="preview">
                <h2 :class="getTitleClasses()">{{ $t("Subscribe.title") }}</h2>
                <p :class="getTextClasses()">{{ $t("Subscribe.text") }}</p>
                <!-- Bottom Start -->
                <div class="bottom">    
                    <my-input :placeholder="$t('Subscribe.input')" :class="getnputClasses()"/>
                    <my-button class="button">
                        <img src="../../../assets/images/Buttons/EnvelopeSimple.svg" alt="EnvelopeSimple">
                        {{ $t("Subscribe.button") }}
                    </my-button>
                </div>
                <!-- Bottom End -->
            </div>
            <!-- Preview End -->
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import {useI18n} from 'vue-i18n'
    export default {
        setup(){
            const {locale} = useI18n();
            return {
                locale
            }
        },
        methods:{
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
            },
            getnputClasses(){
                return {
                    'english-input': this.locale === 'EN',
                    'ukrainian-input': this.locale === 'UA'
                };
            }
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Styles Start */

    .subscribe{
        padding: 80px 0;
        margin: 0 auto;
        
    }

    /* Main Styles End */

    /* Content Styles Start */

    .content{
        margin: 0 auto;
        padding: 60px;
        max-width: 1050px;
        width: 100%;
        height: 430px;
        border-radius: 20px;
        background-color: var(--background-secondary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Content Styles End */

    /* Preview Styles Start */

    .preview{
        display: flex;
        flex-direction: column;
        max-width: 425px;
        height: 272px;
        width: 100%;
    }

    /* English Styles Start */

    .english-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 38px;
        line-height: 45px;
        color: var(--text-color-white);
        margin-bottom: 10px;
    }
    .english-text{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 35px;
        color: var(--text-color-white);
        margin-bottom: 40px;
    }

    .english-input{
        border: none;
        max-width: 425px;
        width: 100%;
        height: 60px;
    }

    /* English Styles End */

    /* Ukrainian Style Start */

    .ukrainian-title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 40px;
        color: var(--text-color-white);
        margin-bottom: 10px;
    }

    .ukrainian-text{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: var(--text-color-white);
        margin-bottom: 40px;
    }

    .ukrainian-input{
        border: none;
        max-width: 425px;
        width: 100%;
        height: 60px;
    }
    /* Ukrainian Style End */
    
    /* Preview Styles End */

    /* Bottom Style Start */

    .bottom{
        display: flex;
        position: relative;
    }

    /* English Styles Start */

    .english-input{
        border: none;
        max-width: 425px;
        width: 100%;
        height: 60px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--background-color) ;
    }

    /* English Styles End */

    /* Ukrainian Style Start */

    .ukrainian-input{
        border: none;
        max-width: 425px;
        width: 100%;
        height: 60px;
        color: aqua;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--background-color) ;
    }

    /* Ukrainian Style End */
    .button{
        position: absolute;
        right: 0;
        background-color: var(--button-background-color);
        color: var(--text-color-white);
        border: none;
        max-width: 210px;
        width: 100%;
        height: 60px;
        padding: 0px 50px;
    }
    /* Bottom Style End */
}

/* Tablet */
@media only screen and (max-width: 960px) { 


}

/* Mobile */
@media only screen and (max-width: 540px) { 

}

</style>