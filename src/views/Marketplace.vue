<template>
    <div class="main">
        <Market/>
    </div>
</template>

<script>
import Market from '../components/Marketplace/Market.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Market
        },

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>