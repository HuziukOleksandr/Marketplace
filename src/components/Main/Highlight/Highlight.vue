<template>
    <div class="custom-frame">
        <div class="background">
            <div 
                class="w-[100%] flex  max-w-[1050px] md:max-w-[690px] 
                    sm-max-w-[315px] sm:flex-col sm:items-center sm:gap-[30px]"
            >
                <Card :card="card"/>

                <my-timer 
                    :endtime="endtime" 
                    class="w-[295px] sm:self-center sm:w-[315px]"
                />

                <div>
                    <my-button 
                        class="h-[60px] bg-white px-[50px] hidden 
                            sm:flex sm:w-[315px] sm:justify-center"
                    >
                        <img 
                            src="../../../assets/images/Buttons/Eye.svg" 
                            alt="Eye"
                        >   
                            {{ $t("Highlight.button") }}
                    </my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './HighlightCard.vue'

    export default {
        components: {
            Card
        },

        data(){
            return {
                endtime: '2023-12-29',
                card:{
                    userIcon: "Shroomie",
                    userName: "Shroomie", 
                    title: "Magic Mashrooms"
                }
            }
        },
    }
</script>

<style scoped>

.custom-frame {
    @apply 
    w-[100%]
    max-w-[1440px]
    h-[640px]
    m-auto
    bg-[url('./../../../assets/images/Highlight/Highlight.png')]
    bg-center bg-cover bg-no-repeat
    md:max-w-[835px]
    md:h-[630px]
}

.background {
    @apply
    w-[100%]
    max-w-[1440px]
    h-full
    flex justify-center
    pb-[60px]
    items-end
    bg-gradient-to-t from-purple-600 to-transparent
}

</style>