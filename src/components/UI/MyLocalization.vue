<template>
    <TransitionGroup>
    
            <div 
                class="flex flex-col p-[7px] gap-[10px] rounded-[5px] w-[49px] bg-bg-secondary absolute " 
                v-if="dialogVisible" 
                v-click-away="onClickAway">
                <img 
                    src="../../assets/images/svg/EN.svg" 
                    alt="Flag uk"
                    class="w-[35px] hover:cursor-pointer hover:scale-105 transition duration-200"
                    @click="close('EN')">
                <img 
                    src="../../assets/images/svg/UA.svg" 
                    alt="Flag uk" 
                    class="w-[35px] hover:cursor-pointer hover:scale-105 transition duration-200"
                    @click="close('UA')"> 
            </div>
            
    </TransitionGroup>
</template>

<script>
import { useI18n } from 'vue-i18n'

    export default {
        setup(){
            const { locale } = useI18n()
            return {
                locale
            }
        },
        data() {
            return {
                language: "EN",
            }
        },
        name: 'my-localization',
        props: {
            dialogVisible: {
            type: Boolean,
            required: true
            }
        },
        methods: {
            onClickAway() {
                this.$emit('closeWindow', false);
            },
            close(language) {
                this.language = language;
                this.$emit('changeLanguage', this.language);
                this.$emit('closeWindow', false);
                this.change(language);
                
            },
            change(language){
                localStorage.setItem('language', language)
                if(this.locale != language){
                    this.locale = language
                }
            }
        },
        mounted() {
            localStorage.setItem('language', this.language)
            this.language = localStorage.getItem('language')
            this.$emit('changeLanguage', this.language);
            this.change(this.language);
        },
    }
</script>

<style scoped>

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>