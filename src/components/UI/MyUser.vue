<template>
    <div 
        class="flex gap-[10px] items-center" 
        @click.stop="userClick(user.id)"
    >
        <img 
            :src="getUserImageUrl(userName)" 
            :alt="userName"
            class="w-6 hover:cursor-pointer"
        >
        <h2 class="font-serrat text-white font-normal leading-[22px] text-[16px] text-center hover:cursor-pointer">
            {{userName}}
        </h2>
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
                this.$router.push({name: 'Artists', params: { id: name}})
            },
        },

        async mounted() {
            await axios
            .get('/data/Artists.json')
                .then(response =>  {
                    this.user = response.data.Artists.find(element => element.userName == this.userName) || null    
            });
            
        }

    }
</script>