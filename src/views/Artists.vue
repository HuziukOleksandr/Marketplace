<template>
    <div class="main">
        <Artist :name="artistName"/>

    </div>
</template>

<script>
import Artist from '../components/Artists/Artist.vue'

    export default {
        components: {
            Artist
        },

        props: ['artistName']
    }
</script>

<style scoped>

</style>