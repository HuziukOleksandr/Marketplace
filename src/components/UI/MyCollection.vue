<template>
   <div class="w-[330px] min-h-100 flex flex-col gap-[15px] mb:w-[315px]">
        
        <img 
            :src="getImageUrl(collection.Cards[0].picture)" 
            :alt="collection.Cards[0].picture"
            class="rounded-[20px] hover:cursor-pointer"
        >
        
        <div class="flex justify-between">
            <img 
                :src="getImageUrl(collection.Cards[1].picture)" 
                :alt="collection.Cards[1].picture"
                class="w-[100px] rounded-[20px] mb:w-[95px] hover:cursor-pointer"
            >

            <img 
                :src="getImageUrl(collection.Cards[2].picture)" 
                :alt="collection.Cards[2].picture"
                class="w-[100px] rounded-[20px] mb:w-[95px] hover:cursor-pointer"
            >

            <my-button class="w-[100px] h-[100px] flex justify-center items-center bg-btn-bg-color text-white mb:w-[95px]">
                +{{ collection.Cards.length }}
            </my-button>
        </div>
        
        <div class="flex flex-col gap-[10px]">
            <h2 class="text-2xl  text-start custom-text-lg">
                {{ collection.name }}
            </h2>
            <my-user :userName="collection.userName"/>
        </div>
    
    </div>
</template>

<script>

import {getSlidesNumber, getImageUrl, getUserImageUrl } from '../../helpers/helpers'

    export default {
        name: 'my-collection',

        props: {
            collection: {
                type: Object,
                reqired: true,
            }
        },

        methods: {
            getSlidesNumber,
            getImageUrl,
            getUserImageUrl
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