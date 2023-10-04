<template>
    <div class="w-[100%]  m-auto flex justify-between max-w-[1280px] 
            md:max-w-[835px] sm:max-w-[315px] sm:flex-col sm:gap-[40px]"
    >
        <div class="picture w-[100%] max-w-[610px] 
            md:max-w-[400px] sm:max-w-[315px] sm:h-[280px]"
        ></div>
        
        <div 
            class="w-[100%] py-[100px] flex flex-col max-w-[610px] 
                md:max-w-[325px] md:py-[80px]
                sm:max-w-[315px] sm:py-[30px]"
        >
            <h2 class="custom-text-lg text-5xl mb-[20px] sm:text-3xl">
                {{ $t("ConnectAWallet.title") }}
            </h2>

            <h3 class="custom-sub-title mb-[40px]">
                {{ $t("ConnectAWallet.subTitle") }}
            </h3>

            <div class="flex flex-col gap-[20px]">
                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/Metamask.svg" 
                        alt="Metamask"
                        class="icon"
                    >
                    {{ $t("ConnectAWallet.metamask") }}
                </my-button>

                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/WalletConnect.svg" 
                        alt="WalletConnect"
                        class="icon"
                    >
                    {{ $t("ConnectAWallet.walletConnect") }}
                </my-button>

                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/Coinbase.svg" 
                        alt="Coinbase"
                        class="icon"
                    >
                    {{ $t("ConnectAWallet.coinbase") }}
                </my-button>
            </div>
        </div>
    </div>
</template>

<script>

</script>
<style scoped>

.picture {
    @apply 
    bg-[url('./../../assets/images/Wallet/Picture.jpg')]
    bg-no-repeat
    bg-cover
    bg-center
}

.button {
    @apply w-[100%] h-[72px] max-w-[320px]
    flex gap-[10px]
    pr-[20px] pl-[40px]
    bg-bg-secondary text-white
    font-serrat font-semibold text-2xl
    border-2 border-solid border-btn-bg-color
    transition duration-300
    hover:scale-102
}

</style>