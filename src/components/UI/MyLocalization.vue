<template>
    <TransitionGroup>
        <div 
            class="localization" 
            v-if="dialogVisible" 
            v-click-away="onClickAway"
            >
            <img 
                src="../../assets/images/svg/EN.svg" 
                alt="Flag uk" 
                class="loc-icon"
                @click="close('EN')"
                
                >
            <img 
                src="../../assets/images/svg/UA.svg" 
                alt="Flag uk" 
                class="loc-icon"
                @click="close('UA')"> 

        </div>
    </TransitionGroup>
</template>

<script>
import { useI18n } from 'vue-i18n';
    export default {
        setup(){
            const { locale } = useI18n()
            return {
                locale
            }
        },
        data() {
            return {
            language: "",
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
            this.language = localStorage.getItem('language')
            this.$emit('changeLanguage', this.language);
            this.change(this.language);
        },
    }
</script>

<style scoped>

.localization{
    position: absolute;
    width: 49px;
    right: 12px;
    top: 60px;
    display: flex; 
    flex-direction: column;
    gap: 10px;
    padding: 7px;
    background-color: var(--background-secondary);
    border-radius: 5px;
}

.loc-icon{
    width: 35px;
    transition: 0.2s;
}

.loc-icon:hover{
    cursor: pointer;
    scale: 1.05;
}
.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    .localization{
        position: absolute;
        width: 49px;
        right: 16px;
        top: 60px;
        display: flex; 
        flex-direction: column;
        gap: 10px;
        padding: 7px;
        background-color: var(--background-secondary);
        border-radius: 5px;
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .localization{
        position: absolute;
        width: 49px;
        left: 50%;
        top: 360px;
        display: flex; 
        flex-direction: column;
        gap: 10px;
        padding: 7px;
        background-color: var(--background-secondary);
        border-radius: 5px;
        transform: translate(-50%, -50%);
        
    }
}
</style>