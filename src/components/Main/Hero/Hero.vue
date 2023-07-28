<template>
    <section class="hero">
        <!-- Left-Side Start -->
        <div class="left-side">
            <h2 :class="getTitleClasses()">{{ $t("Hero.title") }}</h2>
            <p :class="getTextClasses()">{{ $t("Hero.text") }}</p>
            <my-button class="button">
                <img 
                    src="../../../assets/images/Buttons/RocketLaunchWhite.svg" 
                    alt="RocketLaunch">
                {{ $t("Hero.button") }}
            </my-button>
            <div class="info">
                <Info :infoList="infoList"
            />
            </div>
        </div>
        <!-- Left-Side End -->

        <!-- Right-Side Start -->
        <div class="right-side">
            <img 
                src="../../../assets/images/Hero/hero.svg" 
                alt="Space Walking"
                class="picture">
            <div class="preview">
                <h2 class="preview-title">{{previewTitle}}</h2>
                <div class="user">
                    <img 
                        src="../../../assets/images/Avatars/Animakid.svg" 
                        alt="Animakid" 
                        class="user-picture">
                    <h2 class="user-name">{{ userName }}</h2>
                </div>
            </div>
        </div>      
        <!-- Right-Side End -->
    </section>
</template>

<script>
import Info from './HeroInfo.vue'
import { useI18n } from 'vue-i18n'
    export default {
        components: {
            Info
        },

        setup(){
            const {t, locale}  = useI18n()
            return{
                t,
                locale
            }
        },

        data(){
            return {
                userName: 'Animakid',
                previewTitle: 'Space Walking',
                
            }
            
        },

        computed: {
            infoList(){
                return [
                    { id: 1, number: '240k+ ', title: this.t("Hero.totalSale")},
                    { id: 2, number: '100k+ ', title: this.t("Hero.auctions")},
                    { id: 3, number: '240k+ ', title: this.t("Hero.artists")}
                ] 
            }
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
        },
    }
</script>

<style scoped>

/* Main Styles Start */
.hero{
    min-height: 725px;
    min-height: 565px;
    display: flex;
    gap: 30px;
    padding: 80px 0;
    margin: 0 auto;
    justify-content: center;
}

/* Main Styles End */

/* Left-Side Styles Start */
.left-side{
    max-width: 510px;
    width: 100%;
}

.english-title{ 
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 67px;
    line-height: 74px;
    text-align: start;
    margin-bottom: 20px;
}

.english-text{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    margin-bottom: 40px;
}

.ukrainian-title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 49px;
    line-height: 50px;
    text-align: start;
    margin-bottom: 20px;
}

.ukrainian-text{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 40px;
}

.button{
    height: 60px;
    padding: 0 50px;
    margin-bottom: 40px;
    background-color: var(--button-background-color);
    border: none;
    color: var(--text-color-white);
}

.info{
    max-width: 100%;
    display: flex;
    gap: 30px;
}

/* Left-Side Styles End */
/* Right-Side Styles Start */

.right-side{
    max-width: 510px;
    width: 100%;
    min-height: 510px;
    display: flex;
    flex-direction: column;
}

.preview{
    min-height: 110px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 0 0 20px 20px;
    background-color: var(--background-secondary);
    color: var(--text-color-white);
    padding: 22px 20px;
}

.preview-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
}

.user {
    display: flex;
    gap: 10px;
}

.user-name{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
}

.user-picture{
    width: 24px;
}

/* Right-Side Styles Start */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Left-Side Styles Start */

    .left-side{
        max-width: 330px;
    }

    .english-title{ 
        font-size: 38px;
        line-height: 45px;
    }

    .english-text{
        font-size: 16px;
        line-height: 22px;
    }

    .ukrainian-title{
        font-size: 30px;
        line-height: 35px;
    }

    .ukrainian-text{
        font-size: 16px;
        line-height: 22px;
    }

    /* Left-Side Styles End */

    /* Right-Side Styles Start */
    
    .right-side{
        max-width: 330px;
        min-height: 330px;
        align-self: center;
    }

    .picture{
        width: 330px;
    }

    /* Right-Side Styles Start */

}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {
    
    /* Main Styles Start */

    .hero{
        max-width: 315px;
        padding: 40px 0;
        flex-direction: column;
        align-items: center;
    } 
    
    /* Main Styles Start */

    /* Left-Side Styles Start */

    .english-title{ 
        font-size: 28px;
        line-height: 39px;
    }
    .english-text{
        font-size: 16px;
        line-height: 22px;
    }

    .ukrainian-title{
        font-size: 20px;
        line-height: 25px;
    }

    .ukrainian-text{
        font-size: 16px;
        line-height: 22px;
    }

    .button{
        width: 100%;
        justify-content: center;
    }

    .info{
        justify-content: space-between;
    }

    /* Left-Side Styles End */

    /* Right-Side Styles Start */
    
    .right-side{
        max-width: 315px;
        min-height: 330px;
        align-self: center;
    }

    .picture{
        width: 315px;
    }

    /* Right-Side Styles Start */
    
}
</style>