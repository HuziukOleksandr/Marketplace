<template>
    <div class="card" :style="{ backgroundColor: background}" >
        <!-- Preview Start -->
        <div class="preview">
            <img 
                :src="getImageUrl(card.picture)" 
                :alt="card.name"
                class="picture">
        </div>
        <!-- Preview End -->

        <!-- Title Start -->
        <div class="title">
            <h2 class="name">{{ card.name }}</h2>
            <my-user :userName="card.userName"/>
            <div class="numbers">
                <div class="price">
                    <h2 class="price-title">{{ $t("Discover.price") }}</h2>
                    <h2 class="price-number">{{ card.price }}</h2>
                </div>
                <div class="bid">
                    <h2 class="bid-title">{{ $t("Discover.highestBid") }}</h2>
                    <h2 class="bid-number">{{ card.bid }}</h2>
                </div>
            </div>
        </div>
        <!-- Title End -->
    </div>
        
</template>

<script>

import {getSlidesNumber, getImageUrl, getUserImageUrl} from '../../helpers/helpers'
    export default {

        name: 'my-card',

        props: {
            card: {
                type: Object,
                reqired: true
            },

            background: {
                type: String,
                reqired: true
            }
        },


        methods: {
            getSlidesNumber,
            getImageUrl,
            getUserImageUrl,
        },

        mounted() {
            this.slides = getSlidesNumber()
            
            window.addEventListener('resize',() =>  {
                this.slides = getSlidesNumber()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', () => {
                this.slides = getSlidesNumber()
            })
        }
    }
</script>

<style scoped>

/* Main Styles Start */

.card {
    max-width: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    
}

.card:hover {
    cursor: pointer;
}

/* Main Styles End */

/* Preview Styles Start */

.preview {
    height: 296px;
}


/* Preview Styles End */

/* Content Styles Start */

.title {
    padding: 20px 30px 25px 30px;
    height: 100%;
}

.name {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 31px;
    color: var(--text-color-white);
    margin-bottom: 5px;
    text-align: start;
}

.user {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.user-picture {
    width: 24px;
}

.userName {
    font-family: 'SpaceMono', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
}

.numbers {
    display: flex;
    justify-content: space-between;
}

.price, .bid {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.price-title, .bid-title {
    font-family: 'SpaceMono', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: var(--text-color-secondary);
}
.price-title {
    text-align: start;
}
.bid-title {
    text-align: end;
}

.price-number, .bid-number {
    font-family: 'SpaceMono', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
}

/* Content Styles End */


/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .card {
        max-width: 315px;
        width: 100%;
        
    }

    .picture {
        width: 315px;
    }

}

</style>