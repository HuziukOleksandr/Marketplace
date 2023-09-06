<template>
    <div :key="$route.fullPath">
        <Artist :id="this.$route.params.id" />
    </div>
</template>

<script>
import Artist from '../components/Artists/Artist.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Artist
        },

        mounted() {
            scrollTop()
        }
    }
</script>