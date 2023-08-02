
    <template>        
    <div>
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.marketplace") }}</a>
        
        <a 
            href="!#" 
            class="link" 
            :style="linkItemStyles">
            {{ $t("Navigation.rankings") }}
        </a>

        <a 
            href="/wallet"
            class="link" 
            :style="linkItemStyles">
            {{ $t("Navigation.connectAWallet") }}
        </a>
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