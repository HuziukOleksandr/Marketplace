
    <template>        
    <div>
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.marketplace") }}</a>
        
        <router-link
            href="!#" 
            class="link" 
            :style="linkItemStyles">
            {{ $t("Navigation.rankings") }}
        </router-link>

        <router-link to="/wallet"
            class="link" 
            :style="linkItemStyles">
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