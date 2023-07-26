<template>
    <div class="footer">
        <!-- Content Start -->
        <div class="content">
            
            <Community/>

            <Explore />
        
            <Digest />
            
        </div>
        <!-- Content End -->

        <!-- Bottom Start -->
        <div class="bottom">
            <p class="conporations">Ⓒ NFT Market. Use this template freely.</p>
        </div>
        <!-- Bottom End -->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Digest from './Digest.vue'
import Explore from './Explore.vue'
import Community from './Community.vue'
    export default {
        components: {
            Digest, Explore, Community
        },
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
    .footer{
        min-height: 355px;
        background-color: var(--background-secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        padding: 40px 100px;
    }

    .content{
        min-width: 690px;
        width: 100%;
        min-height: 190px;
        display: flex;
        justify-content: space-between;
    }

    /* Main Styles End */

    /* Bottom Styles Start */

    .bottom{
        min-width: 1050px;
        width: 100%;
        min-height: 35px;   
        border-top: 1px solid var(--text-color-secondary);
        display: flex;
        align-items: end;
    }

    .conporations{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #CCCCCC;
    }

    /* Bottom Styles End */

}

/* Стилі для моніторів і планшетів(більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

     /* Main Styles Start */
     .footer{
        min-height: 700px;
        background-color: var(--background-secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        padding: 40px 0;
    }

    .content{
        max-width: 690px;
        width: 100%;
        min-height: 190px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: space-between;
        margin: 0 auto;
    }

    /* Main Styles End */
    
    /* Bottom Styles Start */

    .bottom{
        max-width: 690px;
        width: 100%;
        min-height: 35px;   
        border-top: 1px solid var(--text-color-secondary);
        display: flex;
        align-items: end;
    }

    .conporations{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #CCCCCC;
    }

    /* Bottom Styles End */
}

</style>