<template>
    <div class="section">
        <div class="background" :style="{ backgroundImage: backgroundImage }"></div>
        <div class="preview">
            <div class="aside">
                <h2 class="name">
                    {{ card.name }}
                </h2>
                <div class="date">
                    {{ $t("NFTPage.minted") }} {{ card.minted }}
                </div>
                <my-timer class="timer-second" :endtime="card.auction">
                    <my-button class="timer-button">
                        {{ $t("NFTPage.timerButton") }}
                    </my-button>
                </my-timer>
                <div class="created">
                    {{ $t("NFTPage.created") }}
                </div>

                <my-user class="user" :userName="card.userName"/>

                <div class="description">
                    {{ $t("NFTPage.description") }}
                </div>
                <p class="text">
                    {{ card.description }}
                </p>

                <div class="details">
                    {{ $t("NFTPage.details") }}
                </div>
                <div class="links">
                    <div class="link">
                        <img 
                            src="../../assets/images/svg/InternetLogo.svg" 
                            alt="InternetLogo"
                            class="link-icon">
                        <div class="link-title">{{ $t("NFTPage.etherscan") }}</div>
                    </div>
                    <div class="link">
                        <img 
                            src="../../assets/images/svg/InternetLogo.svg" 
                            alt="InternetLogo"
                            class="link-icon">
                        <div class="link-title">{{ $t("NFTPage.etherscan") }}</div>
                    </div>
                </div>

                <Tags :tags="card.tags" /> 
                

            </div>
            
            <my-timer class="timer" :endtime="card.auction">
                <my-button class="timer-button">
                    {{ $t("NFTPage.timerButton") }}
                </my-button>
            </my-timer>
           
        </div>
        <div class="container">
            <div class="header-container">
                <div class="title">{{ $t("NFTPage.more") }}</div>
                <my-button class="button" @click="buttonClick(card.userName)"> 
                    <img 
                        src="../../assets/images/svg/ArrowRight.svg" 
                        alt="">
                    {{ $t("NFTPage.button") }}
                </my-button>
            </div>
            <div class="content">
                <div v-for="item in cards">
                    <my-card 
                        :card="item"
                        :background="background"/>
                </div>
            </div>
            
            <my-button class="button-second" @click="buttonClick(card.userName)"> 
                <img 
                    src="../../assets/images/svg/ArrowRight.svg" 
                    alt="">
                {{ $t("NFTPage.button") }}
            </my-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { getUserBackgroundUrl } from '../../helpers/helpers'
import Tags from './Tags.vue'

    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },

        components: {
            Tags
        },

        data() {
            return {
                card: {},
                cards: [],
                background: 'var(--background-secondary)',
                backgroundImage: ``
            }
        },

        methods: {
            getUserBackgroundUrl,

            buttonClick(userName) {
                this.$router.push({name: 'Artists', query: { artistName: this.card.userName}})
            }
        },

        async mounted() {
            await axios
                .get('data/Cards.json')
                .then(response => {
                    this.card = response.data.Cards.find(element => element.name === this.name || null)
            });

            await axios
                .get('data/Cards.json')
                .then(response => {
                    response.data.Cards.forEach(element => {
                        if(element.userName === this.card.userName && element.name != this.card.name)
                        {
                            this.cards.push(element)
                        }
                    })
            });

            this.backgroundImage = `url('${this.getUserBackgroundUrl(this.card.background)}')`
        }
    }
</script>

<style scoped>

.section {
    width: 100%;
    min-height: 560px;
}

.background {
    width: 100%;
    height: 560px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.preview {
    display: flex;
    justify-content: space-between;
    max-width: 1050px;
    width: 100%;
    min-height: 300px;
    margin: 0 auto;
    padding: 40px 0;
}
/* Aside stylesa Start */

.aside {
    max-width: 605px;
    width: 100%;
}

.name {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 51px;
    line-height: 56px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.date {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-secondary);
    margin-bottom: 30px;
}

.created, .description, .details {
    font-family: "SpaceMono",sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-secondary);
    margin-bottom: 10px;
}

.user {
    margin-bottom: 30px;
}

.text {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
    margin-bottom: 30px;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
}

.link {
    display: flex;
    gap: 10px;
    align-items: center;
}

.link:hover {
    cursor: pointer;
}
 
.link-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
}

/* Aside stylesa End */

.timer {
    align-self: flex-start;
}

.timer-button {
    display: flex;
    justify-content: center;
    height: 60px;
    padding: 0 50px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    background-color: var(--button-background-color);
    
}

.timer-second {
    display: none;
}

/* Container Styles Start */

.container {
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    gap: 60px;
}

.header-container {
    max-width: 1050px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.title {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 38px;
    line-height: 45px;
    color: var(--text-color-white);
}

.button {
    height: 60px;
    padding: 0 50px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    background-color: var(--background-color);
    border: 2px solid var(--button-background-color);
}

.button-second {
    display: none;
}

.content {
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
/* Container Styles End */


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {
    .background {
        height: 420px;
    }

    .preview {
        max-width: 690px;
    }

    /* Aside stylesa Start */

    .aside {
        max-width: 365px;
    }

    .name {
        font-size: 38px;
        line-height: 45px;
    }

    .date {
        font-size: 16px;
        line-height: 22px;
    }

    .created, .description, .details{
        font-size: 22px;
        line-height: 35px;
    }

    .text {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 30px;
    }

    .link-title {
        font-size: 16px;
        line-height: 22px;
    }

    .link-icon {
        width: 24px;
    }

    /* Aside stylesa End */

    /* Container Styles Start */

    .container {
        padding: 40px 0;
    }

    .header-container {
        max-width: 690px;
        width: 100%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .title {
        font-size: 28px;
        line-height: 38px;
    }

    .content {
        max-width: 690px;
        grid-template-columns: repeat(2, 1fr);
    }
    /* Container Styles End */

}


/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .background {
        height: 320px;
    } 

    .preview {
        max-width: 315px;
    }

    /* Aside stylesa Start */

    .aside {
        width: 100%;
    }

    .name {
        font-size: 28px;
        line-height: 35px;
    }

    .date {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 20px;
    }

    .created, .description, .details {
        font-size: 16px;
        line-height: 22px;
    }

    .user {
        margin-bottom: 20px;
    }

    .text {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 30px;
    }

    .link-title {
        font-size: 16px;
        line-height: 22px;
    }

    .link-icon {
        width: 24px;
    }

    /* Aside stylesa End */

    .timer {
        display: none;
    }

    .timer-second {
        display: flex;
        margin-bottom: 20px;
    }

    .timer-button {
        width: 100%;
    }

    /* Container Styles Start */

    .container {
        padding: 40px 0;
        gap: 30px;
    }

    .header-container {
        max-width: 315px;
        width: 100%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .title {
        font-size: 22px;
        line-height: 36px;
    }

    .button {
        display: none;
    }

    .button-second {
        display: flex;
        width: 315px;
        margin: 0 auto;
        height: 60px;
        padding: 0 50px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-white);
        background-color: var(--background-color);
        border: 2px solid var(--button-background-color);
    }

    .content {
        max-width:  315px;
        grid-template-columns: repeat(1, 1fr);
    }
    /* Container Styles End */

}
</style>