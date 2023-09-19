<template>
    <div class="custom-frame-styles">
        <!-- Header Start -->
        <div class="w-[100%] flex justify-between items-end">
            <div class="w-[100%] max-w-[700px] md:w-[400px]">

                <h2 class="custom-title mb-[10px]">
                    {{ $t("Discover.title") }}
                </h2>

                <h3 class="custom-sub-title">
                    {{ $t("Discover.subTitle") }}
                </h3>
            </div>
            
            <my-button 
                class="custom-empty-btn sm:hidden"
                @click="this.$router.push({name: 'Marketplace'})"
            >
                <img 
                    src="../../../assets/images/Buttons/RocketLaunch.svg" 
                    alt="RocketLaunch"
                >
                    {{ $t("Discover.button") }}
            </my-button>
            
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div>
            <carousel :items-to-show="slides" >
                <slide v-for="card in cards" :key="card.id">
                    <my-card 
                        :card="card"
                        :background="background" 
                    />
                </slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </carousel>
        </div>
        <!-- Content End -->

        
        <my-button 
            class="custom-empty-btn hidden sm:flex w-[100%] justify-center"
            @click="this.$router.push( {name: 'Marketplace'} )"
        >
            <img 
                src="../../../assets/images/Buttons/RocketLaunch.svg" 
                alt="RocketLaunch"
            >
                {{ $t("Discover.button") }}
        </my-button>
        
    </div>
</template>

<script>

import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getSlidesNumber } from '../../../helpers/helpers'

    export default {
        components: {
            Carousel, Slide, Pagination, Navigation
        },

        data() {
            return {
                cards: '',
                slides: 1,
                background: 'var(--background-secondary)'
            }
        },

        methods: {
            getSlidesNumber
        },

        async mounted() {
            await axios
                .get('/data/Cards.json')
                .then(response =>  {
                    this.cards = response.data.Cards.slice(0, 5)
            });
            
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