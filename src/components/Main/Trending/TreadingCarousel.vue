<template>
    <carousel :items-to-show="1" class="carousel">
        <slide>
            <div class="card" v-for="card in cards">
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
import Card from "./TrendingCard.vue"

    export default {
        components: {
            Carousel, Slide, Pagination, Navigation, Card
        },
        props: {
            cards: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>