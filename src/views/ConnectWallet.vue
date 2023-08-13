<template>
    <div class="main">
        <Wallet/>
    </div>
</template>

<script>
import Wallet from '../components/Wallet/Wallet.vue'
import { scrollTop } from '../helpers/helpers'
    export default {
        components: {
            Wallet
        },

        mounted() {
            scrollTop()
        }
    }
</script>

<style scoped>

</style>