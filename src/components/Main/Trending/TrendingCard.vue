<template>
    <carousel :items-to-show="slides">
        <slide v-for="card in cards" :key="card">
            <div class="card">
                <!-- Main Picture -->
                <img 
                    :src="getImageUrl(card.mainPicture)" 
                    :alt="card.mainPicture"
                    class="main-picture">
                
                <!-- Secondary Start -->
                <div class="secondary">
                    <img 
                        :src="getImageUrl(card.secondaryPicture[0].name)" 
                        :alt="card.secondaryPicture[0].name"
                        class="secondary-picture">
                    <img 
                        :src="getImageUrl(card.secondaryPicture[1].name)" 
                        :alt="card.secondaryPicture[1].name"
                        class="secondary-picture">

                    <my-button class="more">
                        {{ card.lenght }}
                    </my-button>
                </div>
                <!-- Secondary End -->

                <!-- Preview Start -->
                <div class="preview">
                    <h2 class="title">{{ card.preview }}</h2>
                    <div class="user">
                        <img 
                            :src="getUserImageUrl(card.namePicture)" 
                            :alt="card.namePicture"
                            class="user-picture">
                        <h2 class="user-name">{{ card.userName }}</h2>
                    </div>
                </div>
            <!-- Preview End -->
            </div>
        </slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </carousel>      
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default {
        components: {
            Carousel, Slide, Pagination, Navigation
        },
        data(){
            return{
                slides: 1
            }
        },  
        props: {
            cards:{
                type: Object,
                reqired: true,
            }
        },

        methods: {
            getImageUrl(url) {  
                return new URL(`../../../assets/images/Cards/${url}.svg`, import.meta.url).href;
            },

            getUserImageUrl(name) {
                return new URL(`../../../assets/images/Avatars/${name}.svg`, import.meta.url).href;
            } 
        },
    }
</script>

<style scoped>

.card{
    width: 330px;
    height: 525px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.main-picture{
    transition: .2s;
}

.main-picture:hover{
    cursor: pointer;
    scale:  1.01;
}

.secondary{
    display: flex;
    justify-content: space-between;
}

.more{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-background-color);
    color: var(--text-color-white);
    border: none;
}

.secondary-picture{
    transition: 0.4s;
}   
.secondary-picture:hover{
    cursor: pointer;
    scale: 1.01;
}

.preview{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}

.title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
}

.user{
    display: flex;
    gap: 10px;
}

.user-name{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}

.user-picture{
    width: 24px;
}
.user-picture:hover, .user-name:hover{
    cursor: pointer;
}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {
   
    .card{
        max-width: 315px;
    }

    .more{
        width: 85px;
        height: 85px;
    }

    .secondary-picture{
        width: 85px;
    }
}


</style>

<style>

@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .carousel__viewport{
        max-width: 690px;
        width: 100%;
    }

    .carousel__next{
        color: var(--text-color-white);
    }

    .carousel__prev{
        color: var(--text-color-white);
    }

    .carousel__pagination-button::after{
        
        background-color: var(--text-color-secondary);
    }
    .carousel__pagination-button--active::after{
        background-color: var(--text-color-white);
    }
}

@media only screen and (max-width: 767px) {
   
    .carousel__viewport{
        max-width: 315px;
        width: 100%;
    }

    .carousel__next{
        display: none;
    }

    .carousel__prev{
        display: none;
    }
}

</style>