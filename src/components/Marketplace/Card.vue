<template>
    <div class="card" v-for="card in cards">
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
            <div class="user">
                <img 
                    :src="getUserImageUrl(card.userName)" 
                    :alt="card.userName"
                    class="user-picture">
                <h3 class="userName">{{ card.userName }}</h3>
            </div>
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
        props: {
            cards: {
                type: Object,
                reqired: true
            }
        },

        methods: {
            getSlidesNumber,
            getImageUrl,
            getUserImageUrl,
        },
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
    background-color: var(--background-secondary);
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
    background-color: var(--background-color);
    border-radius: 0 0 20px 20px    ;
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