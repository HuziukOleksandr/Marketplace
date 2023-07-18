<template>
    <div class="main" @click="showLanguage">
        <Navigation/>
        <Hero/>
        <Trending/>
        <Artists/>
        <Category/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero/Hero.vue'
import Trending from '../components/Trending/Trending.vue'
import Artists from '../components/Artists/Artists.vue'
import Category from '../components/Category/Category.vue'

    export default {
        components: {
            Navigation, Hero, Trending, Artists, Category
        },
        data(){
            return {
                languageVisible: false
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px)  {
    .main{
        max-width: 1440px;
        width: 100%;
    }
    
}

/* Tablet */
@media only screen and (max-width: 960px) {   
}

/* Mobile */
@media only screen and (max-width: 540px) {   
}

</style>