<template>
    <div class="table">
        <div class="header">
            <div class="header-colums" @click="sortItem('number')">
                #
                <div 
                    class="sort"
                    v-show="sortTable.number.active" 
                    :class="{ showtriangle : this.sortTable.number.rotate === true}">
                </div>
            </div>
            <div class="header-colums" @click="sortItem('artist')">
                {{ $t("Ranking.artists") }}
                <div 
                    class="sort"
                    v-show="sortTable.artist.active" 
                    :class="{ showtriangle : this.sortTable.artist.rotate === true}">
                </div>
            </div>
            <div class="header-colums" @click="sortItem('change')">
                {{ $t("Ranking.change") }}
                <div 
                    class="sort"
                    v-show="sortTable.change.active" 
                    :class="{ showtriangle : this.sortTable.change.rotate === true}">
                </div>
            </div>
            <div class="header-colums" @click="sortItem('sold')">
                    {{ $t("Ranking.sold") }}
                <div 
                    class="sort"
                    v-show="sortTable.sold.active" 
                    :class="{ showtriangle : this.sortTable.sold.rotate === true}">
                </div>
            </div>
            <div class="header-colums" @click="sortItem('volume')">
                    {{ $t("Ranking.volume") }}
                <div 
                    class="sort"
                    v-show="sortTable.volume.active" 
                    :class="{ showtriangle : this.sortTable.volume.rotate === true}">
                </div>
            </div>
        </div>
        <div class="content" v-for="artist in artists">
            <div class="content-colums">{{ artist.id }}</div>
            <div class="content-colums">
                <img 
                    :src="getUserImageUrl(artist.userName)" 
                    :alt="artist.userName" 
                    class="picture">
                <div class="name">{{ artist.name }}</div></div>
            <div class="content-colums">{{ getValue(artist)[0] }}</div>
            <div class="content-colums">{{ getValue(artist)[1] }}</div>
            <div class="content-colums">{{ getValue(artist)[2] }}</div>
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

.table {
    max-width: 1050px;
    width: 100%;
}

.header {
    height: 46px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid var(--text-color-secondary); 
    color: var(--text-color-secondary);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
}

.header-colums{
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
}

.header-colums:hover{
    cursor: pointer;
    color: var(--text-color-white);
}
.header-colums:nth-child(1) {
    width: 30px;
    display: flex;
    justify-content: center;
}

.header-colums:nth-child(2) {
    width: 400px;
}

.header-colums:nth-child(2)::after{
    content: '';
}

.header-colums:nth-child(3),
.header-colums:nth-child(4),
.header-colums:nth-child(5) {
    width:160px;
}

.content {
    width: 100%;
    height: 85px;
    border-radius: 20px;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    margin-bottom: 20px;
    transition: 0.2s;
}

.content:hover{
    cursor: pointer;
    scale: 1.01;
}

.content-colums:nth-child(1) {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-secondary);
}
.content-colums:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 400px;
}

.picture {
    width: 60px;
}

.name {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
}

.content-colums:nth-child(3) {
    color: var(--text-color-green);
}

.content-colums:nth-child(3),
.content-colums:nth-child(4),
.content-colums:nth-child(5) {
    width:160px;
}

.sort {
  position: relative;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid var(--background-secondary);
  cursor: pointer;
}

.sort.showtriangle {
  transform: rotate(180deg); /* Повертаємо трикутник вгору */
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .header-colums:nth-child(3),
    .header-colums:nth-child(5) {
        width:100px;
    }

    .header-colums:nth-child(4) {
        display: none;
    }

    .content {
        height: 60px;
    }

    .content-colums:nth-child(1) {
        width: 30px;
        height: 24px;
        background-color: var(--background-secondary);
    }

    .picture {
        width: 24px;
    }

    .name {
        font-size: 16px;
        line-height: 22px;
    }

    .content-colums:nth-child(3),
    .content-colums:nth-child(5) {
        width: 100px;
    }

    .content-colums:nth-child(4) {
        display: none;
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .header {
        height: 46px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        font-size: 12px;
        line-height: 13px;
        margin-bottom: 20px;
    }

    .header-colums:nth-child(1) {
        width: 24px;
        
    }

    .header-colums:nth-child(2) {
        width: 180px;
    }
    
    .header-colums:nth-child(5) {
        width:80px;
    }

    .header-colums:nth-child(3), 
    .header-colums:nth-child(4) {
        display: none;
    }

    .content {
        height: 50px;
        padding: 0 10px;
        font-size: 12px;
        line-height: 13px;
    }

    .content-colums:nth-child(1) {
        width: 24px;
        height: 24px;
        background-color: var(--background-secondary);
    }

    .content-colums:nth-child(2) {
        width: 180px;
        gap: 10px;
    }

    .picture {
        width: 24px;
    }

    .name {
        height: 22px;
        width: 146px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    
    .content-colums:nth-child(5) {
        width: 80px;
    }

    .content-colums:nth-child(3),
    .content-colums:nth-child(4) {
        display: none;
    }

}
</style>