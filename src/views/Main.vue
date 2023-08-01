<template>
    <div class="main">
        <Hero/>
        <Trending/>
        <Artists/>
        <Category/>
        <Discover/>
        <Highlight/>
        <Works/>
        <Subscribe/>
    </div>
</template>

<script>

import Hero from '../components/Main/Hero/Hero.vue'
import Trending from '../components/Main/Trending/Trending.vue'
import Artists from '../components/Main/Artists/Artists.vue'
import Category from '../components/Main/Category/Category.vue'
import Discover from '../components/Main/Discover/Discover.vue'
import Highlight from '../components/Main/Highlight/Highlight.vue'
import Works from '../components/Main/Works/Works.vue'
import Subscribe from '../components/Main//Subscribe/Subscribe.vue'

    export default {
        components: {
            Hero, Trending, Artists, Category, Discover, Highlight, Works, Subscribe
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