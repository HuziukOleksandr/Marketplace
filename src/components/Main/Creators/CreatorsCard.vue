<template>
    <div  class="hover-styles  max-w-[240px] h-[240px] flex flex-col
        bg-bg-secondary rounded-[20px] p-[20px] custom-creator-card" 
        v-for="card in cards" 
        :key="card.id" 
        @click="cardClick(card.id)"
    >
        <!-- Preview Start -->
        <div class="flex gap-[10px] relative lg:mb-[20px]">
            <div 
                class="w-[30px] h-[30px] lg:static flex justify-center items-center 
                    rounded-[20px] text-grey bg-bg-color absolute left-[-8px] top-[-8px]"
            >
                <h3 class="text-base font-space font-normal ">
                    {{ card.id }}
                </h3>
            </div>
            
            <img 
                :src="getUserImageUrl(card.userName)" 
                :alt="card.userName"
                class="lg:w-[120px] w-[60px]"
            >
        </div>
        <!-- Preview End -->
        
        <!-- Title Start -->
        <div>
            <h2 class="mb-[5px] text-xl custom-text-lg lg:text-center text-start">
                {{ card.userName }}
            </h2>
            
            <div class="flex gap-[10px] m-auto">
                <h3 class="font-serrat font-normal text-base text-grey">
                    {{ $t("Creators.totalSale") }}
                </h3>

                <h3 class="text-base custom-text-nm-sec">
                    {{ card.sale }}
                </h3>
            </div>
            
        </div>
        <!-- Title End -->
    </div>
</template>

<script>
import {getUserImageUrl} from '../../../helpers/helpers'

    export default {
        
        props:{
            cards: {
                type: Object,
                reqired: true
            }
        },
        
        methods: {
            getUserImageUrl,

            cardClick(name){
                this.$router.push({name: 'Artists', params: { id: name}})
            }
        }
    }
</script>

<style scoped>

.hover-styles {
    @apply
    hover:scale-102 hover:cursor-pointer
    transition duration-300 
}

</style>
