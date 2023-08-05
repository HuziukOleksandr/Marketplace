<template>
    <div class="localization">
        <div class="link-item ">
            <img 
                :src="getImageUrl(language)" 
                alt="Flag uk" 
                class="loc-icon"
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

<style scoped>

.link-item {
    display: flex;
    align-items: center;
    padding:10px 7px;
}

.loc-icon {
    width: 35px;
    transition: 0.2s;
}  

.loc-icon:hover {
    cursor: pointer;
    scale: 1.05;
}

</style>