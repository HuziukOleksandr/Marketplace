<template>
    <div class="work">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Works.title") }}</h2>
            <h3 class="sub-title">{{ $t("Works.subTitle") }}</h3>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="content">
            <Card :cards="cards"/>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import Card from './WorksCard.vue'
import {useI18n} from 'vue-i18n'
import { getTitleClasses } from '../../../helpers/localization'

    export default {
        components: {
            Card
        },

        setup(){
            const {t, locale}  = useI18n()
            return {
                t,
                locale
            }
        },

        computed: {
            cards() {
                return [
                { ad: 1, icon: "First", title: this.t("Works.cardTitle.first"), text: this.t("Works.cardText.first") },
                { ad: 1, icon: "Second", title: this.t("Works.cardTitle.second"), text: this.t("Works.cardText.second") },
                { ad: 1, icon: "Third", title: this.t("Works.cardTitle.third"), text: this.t("Works.cardText.third") }
                ]
            }
        },

        methods:{
            getTitleClasses
        }
    }
</script>

<style scoped>

/* Main Style Start */
    
.work {
    min-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 80px 0;
}

/* Main Style End */

/* Header Styles Start */

.header {
    max-width: 1050px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 38px;
    line-height: 45px;
    color: var(--text-color-white);
}

.sub-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
}

/* Header Styles End */

/* Content Styles Start */

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 300px; 
    display: flex;
    justify-content: space-between;
}

/* Content Styles End */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    /* Main Style Start */

    .work {
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Style End */

    /* Header Styles Start */
    .header {
        max-width: 690px;
    }

    .title {
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    /* Header Styles End */
    
    /* Content Styles Start */

    .content {
        max-width: 690px;
        min-height: 320px;
    }

    /* Content Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) { 

    /* Main Style Start */

    .work {
        gap: 40px;
        padding: 40px 0;
    }

    /* Main Style End */

    /* Header Styles Start */
    .header {
        max-width: 315px;
    }

    .title {
        font-size: 28px;
        line-height: 39px;
    }

    .sub-title {
        font-size: 16px;
        line-height: 22px;
    }

    /* Header Styles End */

    /* Content Styles Start */

    .content {
        max-width: 315px;
        width: 100%;
        min-height: 320px;
        flex-direction: column;
        gap: 20px;
    }

    /* Content Styles End */

}

</style>