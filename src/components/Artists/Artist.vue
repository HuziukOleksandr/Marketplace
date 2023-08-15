<template>
    <div class="section">
        <div class="background" :style="{ backgroundImage: backgroundImage }"></div>
        <div class="preview">
            <img 
                :src="getUserImageUrl(name)" 
                :alt="name"
                class="picture">

            <div class="left">
                <h2 class="name">
                    {{ artist.userName }}
                </h2>

                <div class="buttons-second">
                    <my-button class="userId">
                        <img 
                            src="../../assets/images/svg/Copy.svg" 
                            alt="Copy">
                        {{ artist.id }}
                    </my-button>
                    <my-button class="follow">
                        <img 
                            src="../../assets/images/svg/Plus.svg" 
                            alt="Plus">
                        {{ $t("Artist.button") }}
                    </my-button>
                </div>

                <Stats :stats="stats"/>

                <div class="bio">
                    <h3 class="bio-title">{{ $t("Artist.bio") }}</h3>
                    <p class="bio-text">{{ artist.bio }}</p>
                </div>

                <Links/>
            </div>
                
            <div class="buttons">
                <my-button class="userId">
                    <img 
                        src="../../assets/images/svg/Copy.svg" 
                        alt="Copy">
                    {{ artist.id }}
                </my-button>
                <my-button class="follow">
                    <img 
                        src="../../assets/images/svg/Plus.svg" 
                        alt="Plus">
                    {{ $t("Artist.button") }}
                </my-button>
            </div>
        </div>

        <div class="container">
            <div class="content-header">
                <div class="items">
                    <div 
                        class="item" 
                        :class="{ active: this.active === 'Created' }" 
                        @click="changeTabs('Created')">
                            <div class="link">{{ $t("Artist.created") }}</div>
                            <div class="number">{{ created.length }}</div>
                    </div>
                    <div
                        class="item"   
                        :class="{ active: this.active === 'Owned' }"
                        @click="changeTabs('Owned')" >
                        <div href="" class="link" >{{ $t("Artist.owned") }}</div>
                        <div class="number">{{ owned.length }}</div>
                    </div>
                    <div 
                        class="item" 
                        :class="{ active: this.active === 'Collection' }" 
                        @click="changeTabs('Collection')">
                            <div class="link">{{ $t("Artist.collection") }}</div>
                            <div class="number">{{ collections.length }}</div>
                    </div>
                </div>
            </div>
            <div class="content-bgr">
                
                <div class="content">
                    <div
                        v-for="item in created"
                        v-if="this.active === 'Created'">
                            <my-card 
                                :card="item"
                                :background="background"/>
                    </div>
                    
                    <div
                        v-for="item in owned"
                        v-if="this.active === 'Owned'">
                            <my-card 
                                :card="item"
                                :background="background"/>
                    </div>

                    <div
                        v-for="collection in collections"
                        v-if="this.active === 'Collection'">
                            
                            <my-collection v-show="nothing.collection"

                                :collection="collection"/>
                            
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
            name: {
                type: String,
                required: true
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
            },
        },

        async mounted() {

            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artist = response.data.Artists.find(element => element.userName === this.name) || null                    
                    this.getStats()
            });

            await axios
                .get('data/Cards.json')
                .then(response => {
                    response.data.Cards.forEach(element => {
                            if( element.userName === this.name) {
                                this.created.push(element)
                            } 
                            if( element.owner === this.name) {
                                this.owned.push(element)
                            } 
                        }
                    )
            });
            
            await axios
                .get('data/Collections.json')
                .then(response => {
                    response.data.Collections.forEach(element => {
                            if(element.userName === this.name) {
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

/* Main Style Start */

.section {
    min-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

  
/* Main Style End */

/* Background Styles Start */

.background{
    width: 100%;
    height: 320px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

/* Background Styles End */

/* Preview Styles Start */


.preview {
    max-width: 1050px;
    width: 100%;
    min-height: 100px;
    position: relative;
    padding: 100px 0 40px 0;
    margin: 0 auto;
    display: flex;   
}

.picture {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 0;
    top: -60px; 
}

.left {
    max-width: 510px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.name {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 51px;
    line-height: 56px;
    color: var(--text-color-white);
}

.bio {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.bio-title {
    font-family: 'SpaceMono', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-secondary);
}

.bio-text { 
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
}

.buttons-second{
    display: none;
}

.buttons {
    width: 100%;
    height: 60px;
    display: flex;
    gap: 20px;
    justify-content: end;
}

.userId, .follow {
    height: 60px;
    border-radius: 20px;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.userId{
    padding: 0 20px;
    background-color:  var(--button-background-color);
    border: none;
}

.follow {
    padding: 0 30px;
    background-color: var(--background-color);
    border: 2px solid var(--button-background-color);
}

/* Preview Styles End */

/* Container Styles Start */

.content-header {
    width: 100%;
    height: 70px;
    border-top: 1px solid var(--background-secondary);
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.items {
    max-width: 1050px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
}

.item {
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.item:hover {
    cursor: pointer;
}

.item:hover > .link {
    cursor: pointer;
    color: var(--text-color-white);
}

.link {
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--text-color-secondary);
    transition: 0.4s;
}

.number {
    padding: 5px 10px;
    background-color: var(--text-color-secondary);
    color: var(--text-color-white);
    border-radius: 20px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
}

.content-bgr {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
    background-color: var(--background-secondary);
    border-bottom: 2px solid var(--background-color);
    display: flex;
    justify-content: center;
    padding: 60px 0 60px 0;
}

.content {
    max-width: 1050px;
    width: 100%;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.active > .link {
    color: var(--text-color-white);
}
.active {
    border-bottom: 3px solid var(--text-color-secondary);
}
/* Container Styles End */

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .preview {
        max-width: 690px;
        padding: 100px 0 30px 0;
    }

    .buttons {
        display: none;
    }

    .buttons-second {
        display: flex;
        gap: 20px;
    }

    .name {
        font-size: 38px;
        line-height: 45px;
    }

    .bio-title {
        font-size: 16px;
        line-height:22px;
    }

    .bio-text { 
        font-size: 16px;
        line-height: 22px;
    }

    .items {
        max-width: 690px;
    }

    .link {
        font-size: 16px;
        line-height: 22px;
    }

    .number {
        font-size: 12px;
        line-height: 13px;
    }

    .content {
        max-width: 690px;
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .preview {
        max-width: 315px;
        padding: 100px 0 30px 0;
    }

    .picture {
        left: 50%;
        transform: translateX(-50%);
    }

    .name {
        font-size: 28px;
        line-height: 35px;
    }

    .buttons {
        display: none;
    }

    .buttons-second {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .number { 
        display: none;
    }

    .bio-title {
        font-size: 16px;
        line-height:22px;
    }

    .bio-text { 
        font-size: 16px;
        line-height: 22px;
    }

    .items {
        max-width: 315px;
    }

    .link {
        font-size: 16px;
        line-height: 22px;
    }
    .content {
        max-width: 315px;
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>