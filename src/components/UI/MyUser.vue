<template>
    <div class="user" @click="userClick(userName)">
        <img 
            :src="getUserImageUrl(userName)" 
            :alt="userName"
            class="user-picture">
        <h2 class="user-name">{{userName}}</h2>
    </div>
</template>

<script>
import { getUserImageUrl } from '../../helpers/helpers'

    export default {
        name: "my-user",

        props: {
            userName: { 
                type: String,
                required: true
            }
        }, 

        methods: {
            getUserImageUrl,

            userClick(name){
                this.$router.push({name: 'Artists', query: { artistName: name}})
            }
        }

    }
</script>

<style scoped>

.user {
    display: flex;
    gap: 10px;
}

.user-name {
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}

.user-picture {
    width: 24px;
}
.user-picture:hover, .user-name:hover {
    cursor: pointer;
}

</style>