<template>
    <div class="flex flex-col gap-[20px] sm:gap-[40px] ">
        <div>
            <my-button 
                class="h-[60px] px-[50px] bg-btn-bg-color text-white sm:w-[315px] sm:flex sm:justify-center" 
                @click="this.$router.push({name: 'Register'})"
            >
                <img 
                    src="../../../assets/images/Buttons/RocketLaunchWhite.svg" 
                    alt="RocketLaunch"
                >
                {{ $t("Hero.button") }}
            </my-button>
        </div>
        
        <div class="flex justify-between">
            <div 
                class="max-w-[150px] w-[100%] md:max-w-[90px] sm:max-w-[85px]" 
                v-for="item in infoList" :key="id" 
            >
                <h2 class="text-2xl leading-10 md:text-xl sm:text-xl custom-text-lg-sec">
                    {{ item.number }}
                </h2>

                <h3 class="text-2xl md:text-base sm:text-base custom-text-nm">
                    {{ item.title }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            infoList: {
                type: Object,
                requires: true,
            }
        }
    }
</script>