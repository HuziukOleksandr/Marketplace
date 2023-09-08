<template>
    <div 
        class="max-w-[330px] w-[100%] flex flex-col hover:cursor-pointer rounded-[20px] " 
        :style="{ 'background-color': background}"
        @click="cardClick(card.id)"
    >
        <img 
            :src="getImageUrl(card.picture)" 
            :alt="card.name"
        >
        
        <div class="px-[30px] pt-[20px] pb-[25px] h-[100%]  rounded-b-[20px]">
            <h2 class="text-xl mb-[5px] text-start custom-text-lg">
                {{ card.name }}
            </h2>
            <my-user :userName="card.userName" />

            <div class="flex justify-between mt-[25px]">

                <div class="flex flex-col gap-2">
                    <h2 class="font-serrat font-normal text-xs text-start text-grey">
                        {{ $t("Discover.price") }}
                    </h2>
                    
                    <h2 class=" text-base custom-text-nm-sec">
                        {{ card.price }}
                    </h2>
                </div>

                <div class="flex flex-col gap-2">
                    <h2 class=" text-[12px] text-end text-grey custom-text-nm">
                        {{ $t("Discover.highestBid") }}
                    </h2>

                    <h2 class="text-base custom-text-nm-sec">
                        {{ card.bid }}
                    </h2>
                </div>
            </div>
        </div>
        
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

            cardClick(name) {
                this.$router.push({name: 'NFTPage', params: { id: name}})
            }

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