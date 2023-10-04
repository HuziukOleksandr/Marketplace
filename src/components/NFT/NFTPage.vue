<template>
    <div class="w-[100%]">
        <div 
            class="w-[100%] h-[560px] md:h-[420px] sm:h-[320px] 
                bg-no-repeat bg-center bg-cover"
            :style="{ 'background-image': backgroundImage }"
        >
        </div>

        <div 
            class="custom-wrapper flex justify-between py-[40px] " 
        >

            <div class="custom-wrapper">

                <h2 class="custom-text-lg mb-[10px] text-5xl md:text-4xl sm:text-2xl">
                    {{ card.name }}
                </h2>

                <div class="font-space font-normal lg:text-xl text-grey mb-[30px] text-base sm:mb-[20px]">
                    {{ $t("NFTPage.minted") }} {{ card.minted }}
                </div>

                <my-timer 
                    class="hidden sm:flex mb-[20px]" 
                    :endtime="card.auction"
                >
                    <my-button class="custom-btn justify-center">
                        {{ $t("NFTPage.timerButton") }}
                    </my-button>
                </my-timer>

                <div class="text-lg">
                    {{ $t("NFTPage.created") }}
                </div>

                <my-user 
                    class="mb-[30px] sm:mb-[20px]" 
                    :userName="card.userName"
                />

                <div class="text-lg">
                    {{ $t("NFTPage.description") }}
                </div>

                <p class="custom-text-nm lg:text-xl mb-[30px] text-base sm:w-315px">
                    {{ card.description }}
                </p>

                <div class="text-lg">
                    {{ $t("NFTPage.details") }}
                </div>

                <div class="flex flex-col gap-[10px] mb-[30px]">
                    <div class="link">
                        <img 
                            src="../../assets/images/svg/InternetLogo.svg" 
                            alt="InternetLogo"
                            class="sm:w-[24px]"
                        >

                        <div class="custom-text-nm lg:text-xl text-base">
                            {{ $t("NFTPage.etherscan") }}
                        </div>
                    </div>
                    <div class="link">
                        <img 
                            src="../../assets/images/svg/InternetLogo.svg" 
                            alt="InternetLogo"
                            class="sm:w-[24px]"
                        >

                        <div class="custom-text-nm lg:text-xl text-base">
                            {{ $t("NFTPage.etherscan") }}
                        </div>
                    </div>
                </div>

                <Tags :tags="card.tags" /> 
                
            </div>
            
            <my-timer 
                class="w-[295px] flex sm:hidden self-start" 
                :endtime="card.auction"
            >
                <my-button class="custom-btn justify-center">
                    {{ $t("NFTPage.timerButton") }}
                </my-button>
            </my-timer>
        </div>

        <div class="flex flex-col  py-[80px] gap-[60px] md:py-[60px] sm:py-[40px] sm:gap-[30px]">
            <div class="custom-wrapper h-[60px] flex items-center justify-between ">
                <div class="custom-text-lg text-4xl md:text-3xl sm:text-xl">
                    {{ $t("NFTPage.more") }}
                </div>
                <my-button 
                    class="custom-empty-btn sm:hidden" 
                    @click="buttonClick(card.userName)"
                > 
                    <img 
                        src="../../assets/images/svg/ArrowRight.svg" 
                        alt="ArrowRight"
                    >
                    {{ $t("NFTPage.button") }}
                </my-button>
            </div>
            <div class="custom-wrapper">
                <div v-for="item in cards">
                    <my-card 
                        :card="item"
                        :background="background"
                    />
                </div>
            </div>
            
            <my-button 
                class="custom-empty-btn hidden sm:flex w-[315px] m-auto" 
                @click="buttonClick(card.userName)"
            > 
                <img 
                    src="../../assets/images/svg/ArrowRight.svg" 
                    alt="ArrowRight"
                >
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

    components: {
        Tags
    },

    data() {
        return {
        card: {},
        cards: [],
        background: 'var(--background-secondary)',
        backgroundImage: ``,
        
        }
    },

    methods: {
        getUserBackgroundUrl,

        buttonClick() {
            this.$router.push({ name: 'Artists', query: { artistName: this.card.userName } })
        },

        async loadData() {
            
            await axios
                .get('/data/Cards.json')
                .then(response => {
                    this.card  = response.data.Cards.find(element => element.id === this.$route.params.id || null);
                
                });

            await axios
                .get('/data/Cards.json')
                .then(response => {
                    response.data.Cards.forEach(element => {
                    if (element.userName === this.card.userName && element.name !== this.card.name) {
                        this.cards.push(element)
                    }
                    })
                });

            this.backgroundImage = `url('${this.getUserBackgroundUrl(this.card.background)}')`
        }
    },

    async mounted() {
        await this.loadData();
    }

}
</script>

<style scoped>

.text-lg {
    @apply 
    font-space font-semibold text-grey
    mb-[10px] text-xl 
    sm:text-base
}

.link {
    @apply flex gap-[10px] items-center
    hover:cursor-pointer
}

/* 




.content {
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
} */
@media only screen and (min-width: 768px) and (max-width: 1279px) {
    

    /*
    .content {
        max-width: 690px;
        grid-template-columns: repeat(2, 1fr);
    } */

}
@media only screen and (max-width: 767px) {
   

    

   

 
}
</style>