<template>
    <div class="relative">
        <div class="flex items-center px-[7px] py-[10px]">
        <img 
            :src="getImageUrl(language)" 
            alt="Flag uk" 
            class="w-[35px] transition duration-200 hover:cursor-pointer hover:scale-105"
            @click="dropDawnShow">
    </div>
    <my-localization 
        :dialogVisible="dialogVisible"
        @changeLanguage="changeLanguage"
        v-model:show="dialogVisible"
        @closeWindow="closeWindow"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                language: "EN",
                dialogVisible: false,
            }
        },

        methods: {
            dropDawnShow(){
                this.dialogVisible = !this.dialogVisible;
            },
            
            getImageUrl(name) {  
                return new URL(`../../assets/images/svg/${name}.svg`, import.meta.url).href;
            },

            changeLanguage(lang){
                this.language = lang;
            },

            closeWindow(dialogVisible){
                this.dialogVisible = dialogVisible;
            },

            closeMenu(){
                if(window.innerWidth > 1280){
                    this.dialogVisible = false
                }
            }
        }, 
        
    }
</script>