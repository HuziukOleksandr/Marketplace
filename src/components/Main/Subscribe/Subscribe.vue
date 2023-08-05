<template>
    <div class="subscribe">
        <!-- Content Start -->
        <div class="content">
            <div class="picture">

            </div>
            <!-- Preview Start -->
            <div class="preview">
                <h2 :class="getTitleClasses()">{{ $t("Subscribe.title") }}</h2>
                <p :class="getTextClasses()">{{ $t("Subscribe.text") }}</p>
                <!-- Bottom Start -->
                <div class="bottom">    
                    <my-input 
                        :placeholder="$t('Subscribe.input')" 
                        class="input"/>
                    <my-button class="button">
                        <img 
                            src="../../../assets/images/Buttons/EnvelopeSimple.svg" 
                            alt="EnvelopeSimple">
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
import { getTitleClasses, getTextClasses } from '../../../helpers/localization'

    export default {

        setup(){
            const {locale} = useI18n();
            return {
                locale
            }
        },

        methods:{
            getTitleClasses,
            getTextClasses
        }
    }
</script>

<style scoped>

/* Main Styles Start */

.subscribe {
    padding: 80px 0;
    margin: 0 auto;
}

/* Main Styles End */

/* Content Styles Start */

.content {
    margin: 0 auto;
    padding: 60px;
    max-width: 1050px;
    width: 100%;
    min-height: 430px;
    border-radius: 20px;
    background-color: var(--background-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.picture {
    width: 425px;
    height: 310px;
    background-image: url("../../../assets/images/Subscribe/Photo.png");
}

/* Content Styles End */

/* Preview Styles Start */

.preview {
    display: flex;
    flex-direction: column;
    max-width: 425px;
    min-height: 272px;
    width: 100%;
}

/* English Styles Start */

.english-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 38px;
    line-height: 45px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.english-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
    margin-bottom: 40px;
}

/* English Styles End */

/* Ukrainian Style Start */

.ukrainian-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.ukrainian-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: var(--text-color-white);
    margin-bottom: 40px;
}

/* Ukrainian Style End */

/* Preview Styles End */

/* Bottom Style Start */

.bottom {
    display: flex;
    position: relative;
}

.input {
    border: none;
    max-width: 425px;
    width: 100%;
    height: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--background-color);
    padding: 16px 20px;
}

.button {
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

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    /* Main Styles Start */

    .subscribe {
        padding: 40px 0 80px 0  ;
    }

    /* Main Styles End */

    /* Content Styles Start */

    .content {
        
        padding: 40px 30px;
        max-width: 690px;
        min-height: 360px;
    }

    .picture {
        width: 300px;
        height: 280px;
        background: url("../../../assets/images/Subscribe/PhotoMedium.png") no-repeat center/cover;
    }

    /* Content Styles End */

    /* Preview Styles Start */

    .preview {
        max-width: 300px;
        min-height: 280px;
    }

    /* English Styles Start */

    .english-title {
        font-size: 28px;
        line-height: 39px;
    }
    .english-text {
        font-size: 16px;
        line-height: 22px;
    }

    /* English Styles End */

    /* Ukrainian Style Start */

    .ukrainian-title {
        font-size: 25px;
        line-height: 30px;
    }

    .ukrainian-text {
        font-size: 16px;
        line-height: 22px;
    }

    /* Ukrainian Style End */

    /* Preview Styles End */

    /* Bottom Style Start */

    .bottom {
       
        flex-direction: column;
        gap: 15px; 
    }

    .input {
        height: 46px;
    }

    .button {
        position: static;
        max-width: 300px;
        height: 46px;
    }

    /* Bottom Style End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* Main Styles Start */

    .subscribe {
        padding: 40px 0;
    }

    /* Main Styles End */

    /* Content Styles Start */

    .content {
        min-height: 360px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .picture {
        width: 315px;
        height: 255px;
        border-radius: 20px;
        background: url("../../../assets/images/Subscribe/PhotoMedium.png") center/cover no-repeat;
    }

    /* Content Styles End */

    /* Preview Styles Start */

    .preview {
        max-width: 315px;
        min-height: 280px;
    }

    /* English Styles Start */

    .english-title {
        font-size: 28px;
        line-height: 39px;
    }
    .english-text {
        font-size: 16px;
        line-height: 22px;
    }

    /* English Styles End */

    /* Ukrainian Style Start */

    .ukrainian-title {
        font-size: 25px;
        line-height: 30px;
    }

    .ukrainian-text {
        font-size: 16px;
        line-height: 22px;
    }

    /* Ukrainian Style End */

    /* Preview Styles End */

    /* Bottom Style Start */

    .bottom {
        position: static;
        flex-direction: column;
        gap: 15px; 
    }
    
    .input {
        height: 46px;   
    }

    .button {
        position: static;
        max-width: 315px;
        height: 46px;
    }

    /* Bottom Style End */
}

</style>