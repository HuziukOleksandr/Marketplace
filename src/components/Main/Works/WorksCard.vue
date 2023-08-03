<template>
    <div class="card" v-for="card in cards">
        <div class="preview">
            <img 
                :src="getWorkImageUrl(card.icon)" 
                :alt="card.icon"
                class="picture">
        </div>
        <div class="header">
            <h2 :class="getTitleClasses()">{{ card.title }}</h2>
            <p class="text">{{ card.text }}</p>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { getWorkImageUrl } from '../../../helpers/helpers'
import { getTitleClasses} from '../../../helpers/localization'
    export default {
        props: {
            cards: {
                type: Object,
                reqired: true
            },
        },

        setup(){
            const {locale} = useI18n();
            return{
                locale
            }
        },

        methods: {
            getWorkImageUrl,
            getTitleClasses
        },
    }
</script>

<style scoped>

/* Main Style Start */

.card{
    max-width: 330px;
    width: 100%;
    padding: 10px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
    background-color: var(--background-secondary);
}

/* Main Style End */

/* Preview Styles Start */

.preview{
    display: flex;
    justify-content: center;
}

/* Preview Styles End */

/* Header Styles Start */

.header{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
}

/* English Styles Start */

.english-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: var(--text-color-white);
    text-align: center;
}

/* English Styles End */

/* Ukrainian Styles Start */

.ukrainian-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: var(--text-color-white);
    text-align: center;
}

/* Ukrainian Styles End */

.text{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    text-align: center;
}

/* Header Styles End */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Main Style Start */

    .card{
        max-width: 210px;
        padding: 10px 25px 30px 25px;
    }

    /* Main Style End */

    /* Preview Styles Start */

    .picture{
        width: 160px;
    }

    /* Preview Styles End */

    /* Header Styles Start */


    /* English Styles Start */

    .english-title{
        font-size: 16px;
        line-height: 22px;
    }

    /* English Styles End */

    /* Ukrainian Styles Start */

    .ukrainian-title{
        font-size: 18px;
        line-height: 25px;
    }

    /* Ukrainian Styles End */

    .text{
        font-size: 12px;
        line-height: 14x;
    }

    /* Header Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) { 

    /* Main Style Start */

    .card{
        flex-direction: row;
        max-width: 315px;
        padding: 20px;
        gap: 20px;
    }

    /* Main Style End */

    /* Preview Styles Start */

    .picture{
        width: 100px;
    }

    /* Preview Styles End */

    /* Header Styles Start */

    /* English Styles Start */

    .english-title{
        font-size: 16px;
        line-height: 22px;
    }

    /* English Styles End */

    /* Ukrainian Styles Start */

    .ukrainian-title{
        font-size: 14px;
        line-height: 20px;
    }

    /* Ukrainian Styles End */

    .text{
        font-size: 12px;
        line-height: 12px;
    }

    /* Header Styles End */
}

</style>