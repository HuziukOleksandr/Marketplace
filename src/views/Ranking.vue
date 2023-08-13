<template>
    <div class="main">
        <Ranks/>
    </div>
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