<template>
    <div class="main">
        <Artist :name="artistName"/>

    </div>
</template>

<script>
import Artist from '../components/Artists/Artist.vue'
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Artist
        },

        props: ['artistName'],

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>