<template>
    <div class="custom-frame-styles">
        <!-- Header Start -->
        <div class="w-[100%]">
            <h2 class="custom-title mb-[10px]">
                {{ $t("Trending.title") }}
            </h2>

            <h3 class="custom-sub-title">
                {{ $t("Trending.subTitle") }}
            </h3>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div>
            <carousel :items-to-show="slides">
                <slide 
                    v-for="collection in collections" 
                    :key="collection"
                >
                    <my-collection :collection="collection"/>
                </slide>
                
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </carousel>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {getSlidesNumber } from '../../../helpers/helpers'
    export default {

        components: {
            Carousel, Slide, Pagination, Navigation
        },

        data() {
            return {
                collections: '',
                slides: 1
            }
        },

        methods: {
            getSlidesNumber
        },

        async mounted() {
            await axios
                .get('/data/Collections.json')
                .then(response =>  {
                    this.collections = response.data.Collections;
            });

            this.slides = getSlidesNumber()
            
            window.addEventListener('resize',() =>  {
                this.slides = getSlidesNumber()
            })
        }
    }
</script>