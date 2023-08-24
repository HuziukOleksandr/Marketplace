<template>
    <router-view class="main" :key="$route.fullPath">
        <Page :id="this.$route.params.id"/>
    </router-view>
</template>

<script>
import Page from '../components/NFT/NFTPage.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Page
        }, 

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>