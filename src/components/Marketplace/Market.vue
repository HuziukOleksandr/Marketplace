<template>
    <div class="flex flex-col gap-[60px]">
        <!-- Header Start -->
        <div class="w-[100%] m-auto max-w-[1050px] md:max-w-[690px] sm:max-w-[315px]">
            <h2 class="custom-text-lg mb-[10px] text-5xl  md:text-4xl sm:text-2xl">
                {{ $t("Marketplace.title") }}
            </h2>

            <h2 class="custom-sub-title mb-[30px]">
                {{ $t("Marketplace.subTitle") }}
            </h2>

            <my-search 
                class="w-[100%]" 
                :placeholder='$t("Marketplace.input")'
                v-model:value="name"
            >
                <template #image>
                    <img 
                        src="../../assets/images/svg/MagnifyingGlass.svg" 
                        alt="MagnifyingGlass" 
                        class="w-[24px]"
                    />
                </template>
            </my-search>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class=" w-[100%]">
            <div class=" h-[70px] container-header sm:h-[60px]">
                <div class="w-[100%] m-auto flex max-w-[1050px] md:max-w-[690px] sm:max-w-[315px]">
                    <div 
                        class="item" 
                        :class="{ active: this.active === 'NFT' }" 
                        @click="changeTabs('NFT')">
                            <div class="link ">{{ $t("Marketplace.NFT") }}</div>
                            <div class="number">{{ cards.length }}</div>
                    </div>
                    <div
                        class="item"   
                        @click="changeTabs('Collection')" 
                        :class="{ active: this.active === 'Collection' }"
                    >
                        <div href="" class="link" >
                            {{ $t("Marketplace.collection") }}
                        </div>

                        <div class="number">
                            {{ Object.keys(collections).length }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-bgr">
                <div class="w-[100%] grid gap-[30px] content">
                    <div 
                        v-for="card in searchCard(cards)"
                        v-if="this.active === 'NFT'"
                    >
                            <my-card 
                                :card="card"
                                :background="background"
                            />
                    </div>
                    
                    <div 
                        v-for="collection in searchCard(collections)"
                        v-if="this.active === 'Collection'"
                    >
                            <my-collection 
                                :collection="collection"
                            />
                    </div>
                </div>
            </div>
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import axios from 'axios'

    export default {

        data() {
        
            return {
                active: "NFT",
                cards: [],
                collections: [],
                name: '',
                background: 'var(--background-color)'
            }
        },

        methods: {
            changeTabs(type) {
                this.active = type;
                this.name = ''
            },

            searchCard(array){
                if( this.name === '' || this.name == null){
                    return array
                } else {
                    return array.filter(elem =>
                        elem.name.toLowerCase().includes(this.name.toLowerCase())
                    );
                }
            } 
        },

        async mounted() {
            await axios
                .get('/data/Cards.json')
                .then(response =>  {
                    this.cards = response.data.Cards;
            });
            
            await axios
                .get('/data/Collections.json')
                .then(response =>  {
                    this.collections = response.data.Collections;
            });
        }
    }
</script>

<style scoped>

.container-header {
    @apply 
    border-t-2 border-solid border-bg-secondary
    flex flex-col justify-end
}

.item {
    @apply w-[50%] h-[60px] flex justify-center items-center gap-[15px]
    hover:cursor-pointer
    transition duration-1000
}

.link {
    @apply font-serrat font-semibold text-grey lg:text-2xl text-base 
}

.number {
    @apply 
    py-[5px] px-[10px] bg-bg-secondary text-white rounded-[20px]
    font-serrat font-normal text-base 
    sm:hidden
}

.item:hover > .link {
    @apply hover:cursor-pointer hover:text-white
}

.content-bgr {
    @apply w-[100%] m-auto bg-bg-secondary 
    border-b-2 border-bg-color
    flex justify-center py-[60px]
    sm:py-[40px]
}

.content {
    @apply 
    grid-cols-3 md:grid-cols-2 sm:grid-cols-1
    max-w-[1050px] md:max-w-[690px] sm:max-w-[315]
}

.active > .link {
    @apply text-white
}

.active {
    @apply border-b-2 border-solid border-grey
}

</style>