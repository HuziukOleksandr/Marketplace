<template>
    <div class="card" v-for="card in cards">
        <!-- Preview Start -->
        <div class="preview">
            <img 
                :src="getImageUrl(card.background)" 
                :alt="card.background" 
                class="bg-img">
            <img 
                :src="getImageUrl(card.image)" 
                :alt="card.image" 
                class="preview-icon">
        </div>
        <!-- Preview Start -->

        <!-- Title Start -->
        <div class="title">
            <h2 :class="getTitleClasses()">{{ card.name}}</h2>
        </div>
        <!-- Title End -->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
    export default {
        props: {
            cards:{
                type: Object,
                reqired: true
            }
        },

        setup(){
            const {t, locale}  = useI18n()
            return{
                t, locale
            }
        },

        methods: {
            getTitleClasses(){
                return {
                    'english-title': this.locale === 'EN',
                    'ukrainian-title': this.locale === 'UA'
                };
            },
            getImageUrl(name) {
                return new URL(`../../../assets/images/Categories/${name}.svg`, import.meta.url).href;
            } 
        }
    }
</script>

<style scoped>
/* Main Styles Start */

.card{
    max-width: 240px;
    width: 100%;
    min-height: 316px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: var(--background-secondary);
    transition: 0.2s;
}

.card:hover .bg-img, .preview-icon, .title{
    filter: blur(0);
    cursor: pointer;
}

/* Main Styles End */

/* Preview Styles Start */

.preview{
    position: relative;
    width: 100%;
    min-height: 240px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
}

.bg-img {
    filter: blur(4px);
    transition: 0.6s;
}

.preview-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

/* Preview Styles End */

/* Title Styles Start */

.title{
    padding: 20px 30px 25px 30px;
}

/* English Style Start */

.english-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 31px;
    color: var(--text-color-white);
}

/* English Style End */

/* Ukrainian Style Start */

.ukrainian-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: var(--text-color-white);
}

/* Ukrainian Style End */

/* Title Styles End */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    /* Main Styles Start */

    .card{
        max-width: 150px;
        min-height: 210px;
    }

    /* Main Styles End */
    
    /* Preview Styles Start */

    .preview{
        min-height: 150px;
    }

    .bg-img {
        width: 150px;
    }

    .preview-icon{
        width: 80px;
    }

    /* Preview Styles End */

    /* Title Styles Start */

    .title{
        padding: 20px 20px 25px 20px;
    }

    /* English Style Start */

    .english-title{
        font-size: 16px;
        line-height: 22px;
    }

    /* English Style End */
    
    /* Ukrainian Style Start */

    .ukrainian-title{
        font-size: 20px;
        line-height: 31px;
    }

    /* Ukrainian Style End */

    /* Title Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    /* Main Styles Start */

    .card{
        max-width: 150px;
        min-height: 210px;
    }

    /* Main Styles End */

    /* Preview Styles Start */

    .preview{
        min-height: 150px;
    }

    .bg-img {
        width: 150px;
    }

    .preview-icon{
        width: 80px;
    }

    /* Preview Styles End */

    /* Title Styles Start */

    .title{
        padding: 20px 20px 25px 20px;
    }

    /* English Style Start */

    .english-title{
        font-size: 16px;
        line-height: 22px;
    }

    /* English Style End */
    
    /* Ukrainian Style Start */

    .ukrainian-title{
        font-size: 20px;
        line-height: 31px;
    }

    /* Ukrainian Style End */

    /* Title Styles End */
}

</style>