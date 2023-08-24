<template>
    <router-view class="main" :key="$route.fullPath">
        <Ranks />
    </router-view>
</template>

<script>
import Ranks from '../components/Ranking/Ranks.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components:{
            Ranks
        },

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>