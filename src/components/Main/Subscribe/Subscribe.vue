<template>
    <div class="custom-frame-styles">
        <!-- Content Start -->
        <div class="w-[100%] content-frame-styles ">
            
            <div class="custom-picture-bg"></div>
            <!-- Preview Start -->
            <div class="flex flex-col w-[100%] max-w-[425px] md:max-w-[300px]">
                
                <h2 class="custom-title mb-[10px]">
                    {{ $t("Subscribe.title") }}
                </h2>

                <h3 class="custom-sub-title mb-[40px]">
                    {{ $t("Subscribe.text") }}
                </h3>

                <!-- Bottom Start -->
                <div class="relative flex  flex-col gap-[15px]">    
                    <my-input 
                        :placeholder="$t('Subscribe.input')" 
                        class="custom-input w-[100%] rounded-[20px]"
                    />

                    <my-button 
                        class="custom-btn w-[100%] lg:absolute lg:right-0 lg:w-fit justify-center md:h-[45px] sm:h-[45px]"
                    >
                        <img 
                            src="../../../assets/images/Buttons/EnvelopeSimple.svg" 
                            alt="EnvelopeSimple"
                        >
                        {{ $t("Subscribe.button") }}
                    </my-button>
                </div>
                <!-- Bottom End -->
            </div>
            <!-- Preview End -->
        </div>
        <!-- Content End -->
    </div>
</template>

<script>
import {useI18n} from 'vue-i18n'
    
    export default {

        setup(){
            const {locale} = useI18n();
            return {
                locale
            }
        }
    }
</script>

<style scoped>

.content-frame-styles {
    @apply 
    p-[60px] bg-bg-secondary 
    flex rounded-[20px] justify-between items-center 
    md:px-[30px] md:py-[40px]
    sm:max-w-[315px] sm:p-0 sm:bg-bg-color sm:flex-col sm:gap-[30px]
}

.custom-picture-bg {
    @apply 
    w-[425px] h-[310px]
    md:w-[300px] md:h-[280px]
    sm:w-[315px] sm:h-[255px]
    rounded-[20px]
    bg-[url('./../../../assets/images/Subscribe/Photo.png')] 
    bg-no-repeat bg-cover bg-center
}

.custom-input {
    @apply h-[45px] lg:h-[60px] rounded-[20px]
}

</style>