<template>
    <div>
        <div 
            class="w-[100%] h-[320px] bg-no-repeat bg-center bg-cover" 
            :style="{ 'background-image': backgroundImage }"
        ></div>

        <div class="preview custom-wrapper relative pt-[100px] pb-[30px] flex sm:flex-col">
            <img 
                :src="getUserImageUrl(artist.userName)" 
                :alt="artist.userName"
                class="w-[120px] h-[120px] absolute left-0 top-[-60px] sm:left-1/2 sm:-translate-x-1/2"
            >

            <div class="w-[100%] max-w-[600px] flex flex-col gap-[30px]">
                <h2 class="custom-text-lg text-5xl md:text-4xl sm:text-3xl">
                    {{ artist.userName }}
                </h2>

                <div class="lg:hidden flex gap-[20px] sm:flex-col">
                    <my-button class="custom-btn flex justify-center">
                        <img 
                            src="../../assets/images/svg/Copy.svg" 
                            alt="Copy"
                        >
                        {{ artist.id }}
                    </my-button>

                    <my-button class="custom-empty-btn flex justify-center">
                        <img 
                            src="../../assets/images/svg/Plus.svg" 
                            alt="Plus"
                        >
                        {{ $t("Artist.button") }}
                    </my-button>
                </div>

                <Stats :stats="stats"/>

                <div class="w-[100%] flex flex-col gap-[10px]">
                    <h3 class="font-space font-semibold text-grey text-xl sm:text">
                        {{ $t("Artist.bio") }}
                    </h3>

                    <p class="custom-text-nm lg:text-xl text-base">
                        {{ artist.bio }}
                    </p>
                </div>

                <Links/>

            </div>
                
            <div class="lg:flex w-[100%] hidden gap-[20px] justify-end">
                <my-button class="custom-btn">
                    <img 
                        src="../../assets/images/svg/Copy.svg" 
                        alt="Copy"
                    >
                    {{ artist.id }}
                </my-button>

                <my-button class="custom-empty-btn">
                    <img 
                        src="../../assets/images/svg/Plus.svg" 
                        alt="Plus"
                    >
                    {{ $t("Artist.button") }}
                </my-button>
            </div>
        </div>

        <div class="w-[100%]">
            <div class="w-[100%] h-[70px] container-header sm:h-[60px]">
                <div class="w-[100%] m-auto h-[60px] max-w-[1050px] flex">
                    <div 
                        class="item" 
                        :class="{ active: this.active === 'Created' }" 
                        @click="changeTabs('Created')"
                    >
                        <div class="link">
                            {{ $t("Artist.created") }}
                        </div>

                        <div class="number">
                            {{ created.length }}
                        </div>
                    </div>

                    <div
                        class="item"   
                        :class="{ active: this.active === 'Owned' }"
                        @click="changeTabs('Owned')" 
                    >
                        <div href="" class="link" >
                            {{ $t("Artist.owned") }}
                        </div>

                        <div class="number">
                            {{ owned.length }}
                        </div>
                    </div>

                    <div 
                        class="item" 
                        :class="{ active: this.active === 'Collection' }" 
                        @click="changeTabs('Collection')"
                    >
                        <div class="link">
                            {{ $t("Artist.collection") }}
                        </div>

                        <div class="number">
                            {{ collections.length }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-bgr">
                <div class="content w-[100%] grid gap-[30px]">
                    <div
                        v-for="item in created"
                        v-if="this.active === 'Created'"
                    >
                        <my-card 
                            :card="item"
                            :background="background"
                        />
                    </div>
                    
                    <div
                        v-for="item in owned"
                        v-if="this.active === 'Owned'"
                    >
                        <my-card 
                            :card="item"
                            :background="background"
                        />
                    </div>

                    <div
                        v-for="collection in collections"
                        v-if="this.active === 'Collection'"
                    >
                        <my-collection 
                            v-show="nothing.collection"
                            :collection="collection"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserImageUrl, getUserBackgroundUrl } from '../../helpers/helpers'
import axios from 'axios'
import Stats from './Stats.vue'
import Links from './Links.vue'

    export default {
        components: {
            Stats, Links
        },

        props: {
            id: {
                type: String
            }
        },

        data() {
            return {
                active: "Created",

                artist: {},
                stats: {},

                created: [],
                owned: [],
                collections: [],

                nothing: {
                    created: false,
                    owned: false,
                    collection: true
                },

                background: 'var(--background-color)',
                backgroundImage: ``
            }
        },

        methods: {
            getUserImageUrl,
            getUserBackgroundUrl,

            getStats(){
                
                this.stats = {
                    volume: parseFloat(this.artist.volume.allTime),
                    sold: this.artist.sold.allTime,
                    followers: this.artist.followers
                }
            },

            changeTabs(type) {
                this.active = type;
            }
        },

        async mounted() {

            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artist = response.data.Artists.find(element => element.id == this.id) || null               
                    this.getStats()
            });

            await axios
                .get('/data/Cards.json')
                .then(response => {
                    response.data.Cards.forEach(element => {
                            if( element.userName === this.artist.userName) {
                                this.created.push(element)
                            } 
                            if( element.owner === this.artist.userName) {
                                this.owned.push(element)
                            } 
                        }
                    )
            });
            
            await axios
                .get('/data/Collections.json')
                .then(response => {
                    response.data.Collections.forEach(element => {
                            if(element.userName === this.artist.userName) {
                                this.collections.push(element)
                            } 
                        }
                    )
            });
            
            this.backgroundImage= `url('${this.getUserBackgroundUrl(this.artist.background)}')`
        }
    }
</script>

<style scoped>

.preview {
    @apply 
    justify-between
    lg:pb-[40px]
}

.container-header {
    @apply 
    border-t-2 border-solid border-bg-secondary
    flex flex-col justify-end
}

.item {
    @apply 
    w-[50%] h-[60px] flex justify-center items-center gap-[15px]
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

.active > .link {
    @apply text-white
}

.active {
    @apply border-b-2 border-solid border-grey
}

.content-bgr {
    @apply 
    w-[100%] m-auto bg-bg-secondary 
    border-b-2 border-bg-color
    flex justify-center py-[60px]
    sm:py-[40px]
}

.content {
    @apply 
    grid-cols-3 md:grid-cols-2 sm:grid-cols-1
    max-w-[1050px] md:max-w-[690px] sm:max-w-[315px]
}

</style>