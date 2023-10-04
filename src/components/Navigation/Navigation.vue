<template>        
        <router-link 
            to="/marketplace" 
            class="font-serrat font-semibold hover:scale-102 transition duration-200" 
            :class="linkItemStyles"
            @click="menuClose"
        >
            {{ $t("Navigation.marketplace") }}
        </router-link>
        
        <router-link
            to="/ranking"
            class="font-serrat font-semibold hover:scale-102 transition duration-200"
            :class="linkItemStyles"  
            @click="menuClose"
        >
            {{ $t("Navigation.rankings") }}
        </router-link>

        <router-link 
            to="/wallet"
            class="font-serrat font-semibold hover:scale-102 transition duration-200"
            :class="linkItemStyles" 
            @click="menuClose"
        >
            {{ $t("Navigation.connectAWallet") }}
        </router-link> 
</template>

<script>
    export default {
        props: {
            linkItemStyles: {
                type: Object,
                default: () => ({}),
            },
        },

        methods: {
            menuClose() {
                this.$emit("menuClose")
            }
        }
    }
</script>
