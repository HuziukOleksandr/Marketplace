<template>
    <div class="user" @click.stop="userClick(userName)">
        <img 
            :src="getUserImageUrl(userName)" 
            :alt="userName"
            class="user-picture">
        <h2 class="user-name">{{userName}}</h2>
    </div>
</template>

<script>
import axios from 'axios'
import { getUserImageUrl } from '../../helpers/helpers'

    export default {
        name: "my-user",

        props: {
            userName: { 
                type: String,
                required: true
            }
        }, 

        data() {
            return {
                user: {}
            }
        },

        methods: {
            getUserImageUrl,

            userClick(name){
                axios
                .get('/data/Artists.json')
                    .then(response =>  {
                        this.user = response.data.Artists.find(element => element.userName == name) || null 
                        
                });
                this.$router.push({name: 'Artists', params: { id: this.user.id}})
            },

            
        },

        

    }
</script>

<style scoped>

.user {
    width: fit-content;
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