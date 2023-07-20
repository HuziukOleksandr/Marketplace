<template>
    <div class="main" @click="showLanguage">
        <Navigation/>
        <Hero/>
        <Trending/>
        <Artists/>
        <Category/>
        <Discover/>
        <Highlight/>
        <Works/>
        <Subscribe/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation/Navigation.vue'   
import Hero from '../components/Main/Hero/Hero.vue'
import Trending from '../components/Main/Trending/Trending.vue'
import Artists from '../components/Main/Artists/Artists.vue'
import Category from '../components/Main/Category/Category.vue'
import Discover from '../components/Main/Discover/Discover.vue'
import Highlight from '../components/Main/Highlight/Highlight.vue'
import Works from '../components/Main/Works/Works.vue'
import Subscribe from '../components/Main//Subscribe/Subscribe.vue'
import Footer from '../components/Footer/Footer.vue'

    export default {
        components: {
            Navigation, Hero, Trending, Artists, Category, Discover, Highlight, Works, Subscribe, Footer
        },
        data(){
            return {
                languageVisible: false
            }
        }
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