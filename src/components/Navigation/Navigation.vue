<template>        
    <div>
        <router-link 
            to="/marketplace" 
            class="link" 
            :style="linkItemStyles"
            @click="menuClose">
            {{ $t("Navigation.marketplace") }}
        </router-link>
        
        <router-link
            to="/ranking"
            class="link" 
            :style="linkItemStyles"
            @click="menuClose">
            {{ $t("Navigation.rankings") }}
        </router-link>

        <router-link to="/wallet"
            class="link" 
            :style="linkItemStyles"
            @click="menuClose">
            {{ $t("Navigation.connectAWallet") }}
        </router-link> 
        
    </div>
</template>

<script>

    export default {
        props: {
            linkItemStyles: {
                type: Object,
                default: () => ({}),
            },
        },

        methods:{
            menuClose(){
                this.$emit("menuClose")
            }
        }
    }
</script>

<style scoped>

.link{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: 0.2s;
}

.link:hover{
    transform: scale(1.01);
}

</style>