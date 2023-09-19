<template>
    <div class="max-w-[240px] w-[100%] ">
        <h2 class="text-xl mb-[25px] custom-text-lg-sec">
            {{ $t("Footer.explore") }}
        </h2>

        <Navigation 
            :linkItemStyles="styles"
        />
    </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'
    export default {
        
        components:{
            Navigation
        },

        data(){
            return{
                styles: "text-grey items-center flex mb-5"
            }
        }
    }
</script>