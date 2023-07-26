<template>
    <div class="main" @click="showLanguage">
        <Header/>
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
import Header from '../components/Header/Header.vue'   
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
            Header, Hero, Trending, Artists, Category, Discover, Highlight, Works, Subscribe, Footer
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (min-width: 1280px)  {
   
}

/* Tablet */
@media only screen and (min-width: 960px) {   
}

/* Mobile */
@media only screen and (min-width: 540px) {   
}

</style>