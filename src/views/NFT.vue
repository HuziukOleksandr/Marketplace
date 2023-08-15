<template>
    <div class="main">
        <Page :name="cardName"/>
    </div>
</template>

<script>
import Page from '../components/NFT/NFTPage.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Page
        },

        props: ['cardName'],

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>