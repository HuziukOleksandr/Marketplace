<template>
    <div class="section">
        <img 
            :src="getUserBackgroundUrl(artist.background)" 
            :alt="artist.background" 
            class="background">
        <div class="preview">
            <img 
                :src="getUserImageUrl(name)" 
                :alt="name"
                class="picture">

            <div class="info">
                <div class="left">
                    <h2 class="name">
                        {{ artist.userName }}
                    </h2>

                   <Stats :stats="stats"/>

                    <div class="bio">
                        <h3 class="bio-title">{{ $t("Artist.bio") }}</h3>
                        <p class="bio-text">{{ artist.bio }}</p>
                    </div>

                    <div class="links">
                        <h3 class="links-title">{{ $t("Artist.links") }}</h3>
                        <div class="links-pic">
                            <img 
                                src="../../assets/images/svg/InternetLogo.svg" 
                                alt="InternetLogo" 
                                class="link">
                            <img 
                                src="../../assets/images/svg/DiscordLogo.svg" 
                                alt="DiscordLogo" 
                                class="link">
                            <img 
                                src="../../assets/images/svg/YoutubeLogo.svg" 
                                alt="YoutubeLogo" 
                                class="link">
                            <img 
                                src="../../assets/images/svg/TwitterLogo.svg" 
                                alt="TwitterLogo" 
                                class="link">
                            <img 
                                src="../../assets/images/svg/InstagramLogo.svg" 
                                alt="InstagramLogo" 
                                class="link">
                        </div>
                    </div>
                </div>

                <div class="right">
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
            </div>
        </div>
    </div>
</template>

<script>
import { getUserImageUrl, getUserBackgroundUrl } from '../../helpers/helpers'
import axios from 'axios'
import Stats from './Stats.vue'

    export default {
        components: {
            Stats
        },

        props: {
            name: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                artist: {},
                stats: {}
               
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
            }
        },

        async mounted() {
            await axios
                .get('/data/Artists.json')
                .then(response =>  {
                    this.artist = response.data.Artists.find(element => element.userName === this.name) || null                    
                    this.getStats()
                });
        }
    }
</script>

<style scoped>

/* Main Style Start */

.section {
    max-width: 1280px;
    width: 100%;
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
}

/* Background Styles End */

/* Preview Styles Start */


.preview {
    width: 100%;
    min-height: 100px;
    position: relative;
    padding-top: 60px;
}

.picture {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 115px;
    top: -60px; 
}

.info {
    max-width: 1050px;
    width: 100%;
    min-height: 460px;
    display: flex;
    margin: 0 auto;
    padding: 40px 0;
}

.left {
    max-width: 510px;
    width: 100%;
    height: 300px;
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

.bio, .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.bio-title, .links-title {
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

.links-pic {
    display: flex;
    gap: 10px;
}

.link {
    transition: 0.2s;
}

.link:hover {
    cursor: pointer;
    scale: 1.02;
}

.right {
    width: 100%;

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

</style>