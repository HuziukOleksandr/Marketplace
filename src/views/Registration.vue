<template>
    <div class="main">
        <Register />
    </div>
</template>

<script>
import Register from '../components/Register/Register.vue' 
import { scrollTop } from '../helpers/helpers'

    export default {
        components: {
            Register
        },

        mounted() {
            scrollTop()
        }
    }
</script>