<template>
    <div class="custom-wrapper">
        <div class="header">
            <div 
                class="header-colums w-[30px] flex justify-center sm:w-[24px]" 
                @click="sortItem('number')"
            >#
                <div 
                    class="sort"
                    v-show="sortTable.number.active" 
                    :class="{ showtriangle : this.sortTable.number.rotate === true}"
                ></div>
            </div>

            <div 
                class="header-colums w-[400px] flex sm:w-[180px]" 
                @click="sortItem('artist')"
            >
                {{ $t("Ranking.artists") }}
                <div 
                    class="sort"
                    v-show="sortTable.artist.active" 
                    :class="{ showtriangle : this.sortTable.artist.rotate === true}"
                ></div>
            </div>

            <div 
                class="header-colums flex w-[160px] md:w-[100px]  sm:hidden" 
                @click="sortItem('change')"
            >
                {{ $t("Ranking.change") }}
                <div 
                    class="sort"
                    v-show="sortTable.change.active" 
                    :class="{ showtriangle : this.sortTable.change.rotate === true}"
                ></div>
            </div>

            <div 
                class="header-colums w-[160px] lg:flex hidden" 
                @click="sortItem('sold')"
            >
                {{ $t("Ranking.sold") }}
                <div 
                    class="sort"
                    v-show="sortTable.sold.active" 
                    :class="{ showtriangle : this.sortTable.sold.rotate === true}"
                ></div>
            </div>

            <div 
                class="header-colums w-[160px] md:w-[100px] flex sm:w-[80px]" 
                @click="sortItem('volume')"
            >
                {{ $t("Ranking.volume") }}
                <div 
                    class="sort"
                    v-show="sortTable.volume.active" 
                    :class="{ showtriangle : this.sortTable.volume.rotate === true}"
                ></div>
            </div>
        </div>

        <div 
            class="content" 
            v-for="artist in artists" 
            @click="userClick(artist.id)"
        >
            <div class="content-colums flex ">
                {{ artist.id }}
            </div>

            <div class="content-colums w-[400px] flex items-center gap-[20px] sm:gap-[10px] sm:w-[180px]">
                <img 
                    :src="getUserImageUrl(artist.userName)" 
                    :alt="artist.userName" 
                    class="lg:w-[60px] w-[24px]"
                >
                <div class="font-semibold lg:text-xl text-base name">
                    {{ artist.name }}
                </div>
            </div>
            
            <div class="content-colums w-[160px] md:w-[100px] sm:hidden">
                {{ getValue(artist)[0] }}
            </div>

            <div class="content-colums w-[160px] lg:flex hidden">
                {{ getValue(artist)[1] }}
            </div>

            <div class="content-colums w-[160px] md:w-[100px] sm:w-[80px]">
                {{ getValue(artist)[2] }}
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import {getUserImageUrl} from '../../helpers/helpers'

    export default {
        props:{
            period: {
                type: String,
                reqired: true
            }
        },

        data() {
            return {
                artists: [],
                sortTable: {
                    number: {
                        rotate: false,
                        active: false
                    },
                    artist: {
                        rotate: false,
                        active: false
                    },
                    change: {
                        rotate: false,
                        active: false
                    },
                    sold: {
                        rotate: false,
                        active: false
                    },
                    volume: {
                        rotate: false,
                        active: false
                    }
                }
            }
        },

        methods: {
            getUserImageUrl,

            getValue(artist){
                if(this.period === 'day'){
                    return [ artist.change.day, artist.sold.day,artist.volume.day ]
                } else if(this.period === 'week'){
                    return [ artist.change.week, artist.sold.week, artist.volume.week ]
                } else if(this.period === 'month'){
                    return [ artist.change.month, artist.sold.month, artist.volume.month ]
                } else if(this.period === 'allTime'){
                    return [ artist.change.allTime, artist.sold.allTime, artist.volume.allTime ]
                } 
            },

            sortItem(name){
                this.sortTable[name].active = true
                this.sortTable[name].rotate = !this.sortTable[name].rotate
                Object.keys(this.sortTable).forEach(item => {
                    if(item != name){
                        this.sortTable[item].active = false
                        this.sortTable[item].rotate = false
                    }
                })
            },

            userClick(name){
                this.$router.push({name: 'Artists',  params: { id: name}})
            }
        },

        async mounted(){
            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artists = response.data.Artists
                });
        }
        
    }
</script>

<style scoped>

.header {
    @apply h-[45px] 
    flex items-center justify-between 
    px-[20px] rounded-[20px]
    border-solid border-[1px] border-grey text-grey 
    font-serrat font-normal text-base mb-[20px]
    sm:px-[10px] sm:text-xs
}

.header-colums {
    @apply
    items-center gap-[5px] transition duration-300
    hover:cursor-pointer hover:text-white
}

.sort {
    @apply relative w-0 h-0 
    border-x-[5px] border-solid  border-x-transparent
    border-b-[10px] border-bg-secondary
}

.sort.showtriangle {
    @apply rotate-180
}

.content {
    @apply w-[100%] h-[85px] rounded-[20px] bg-bg-secondary
    flex items-center justify-between px-[20px]
    font-serrat font-normal text-base text-white mb-[20px]
    transition duration-300
    hover:cursor-pointer hover:scale-102
    md:h-[60px]
    sm:h-[50px] sm:px-[10px] sm:text-xs
}
.content-colums:nth-child(1) {
    @apply w-[30px] h-[30px] rounded-[20px]
    lg:bg-bg-color flex justify-center items-center text-grey
    md:h-[24px]
    sm:w-[24px] md:w-[24px]
}

.name {
    @apply sm:h-[22px] sm:w-[130px] sm:font-normal overflow-hidden text-ellipsis
}

</style>