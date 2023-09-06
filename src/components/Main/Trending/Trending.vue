<template>
    <div class="min-h-[725px] m-auto flex flex-col items-center gap-[60px] py-[80px]">
        <!-- Header Start -->
        <div class="max-w-[1050px] w-[100%] flex flex-col gap-[10px] md:max-w-[690px] sm:max-w-[315px]">
            <h2 class="custom-title">
                {{ $t("Trending.title") }}
            </h2>

            <h3 class="custom-sub-title">
                {{ $t("Trending.subTitle") }}
            </h3>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="max-w-[1050px] w-[100%] flex justify-between md:max-w-[690px] sm:max-w-[315px]">
            <carousel :items-to-show="slides">
                <slide v-for="collection in collections" :key="collection">
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