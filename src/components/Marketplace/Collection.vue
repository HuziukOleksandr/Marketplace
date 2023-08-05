<template>
    <div class="card" v-for="collection in collections">
        <!-- Main Picture -->
        <img 
            :src="getImageUrl(collection.Cards[0].picture)" 
            :alt="collection.Cards[0].picture"
            class="main-picture">
        
        <!-- Secondary Start -->
        <div class="secondary">
            <img 
                :src="getImageUrl(collection.Cards[1].picture)" 
                :alt="collection.Cards[1].picture"
                class="secondary-picture">
            <img 
                :src="getImageUrl(collection.Cards[2].picture)" 
                :alt="collection.Cards[2].picture"
                class="secondary-picture">

            <my-button class="more">
                +{{ collection.Cards.length }}
            </my-button>
        </div>
        <!-- Secondary End -->

        <!-- Preview Start -->
        <div class="preview">
            <h2 class="title">{{ collection.name }}</h2>
            <div class="user">
                <img 
                    :src="getUserImageUrl(collection.userName)" 
                    :alt="collection.userName"
                    class="user-picture">
                <h2 class="user-name">{{ collection.userName}}</h2>
            </div>
        </div>
    <!-- Preview End -->
    </div>
</template>

<script>
import {getSlidesNumber, getImageUrl, getUserImageUrl } from '../../helpers/helpers'

    export default {
        props: {
            collections:{
                type: Object,
                reqired: true,
            }
        },

        methods: {
            getSlidesNumber,
            getImageUrl,
            getUserImageUrl
        },
    }
</script>

<style scoped>

.card {
    width: 330px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.main-picture {
    border-radius: 20px;
    transition: .2s;
}

.main-picture:hover {
    cursor: pointer;
    scale:  1.01;
}

.secondary {
    display: flex;
    justify-content: space-between;
}

.more {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-background-color);
    color: var(--text-color-white);
    border: none;
}

.secondary-picture {
    width: 100px;
    border-radius: 20px;
    transition: 0.4s;
}   

.secondary-picture:hover {
    cursor: pointer;
    scale: 1.01;
}

.preview {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}

.title {
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    text-align: start;
}

.user {
    display: flex;
    gap: 10px;
}

.user-name {
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}

.user-picture {
    width: 24px;
}

.user-picture:hover, .user-name:hover {
    cursor: pointer;
}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {
   
    .card {
        max-width: 315px;
    }

    .more {
        width: 95px;
        height: 95px;
    }

    .secondary-picture {
        width: 95px;
    }
}

</style>