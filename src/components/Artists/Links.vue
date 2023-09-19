<template>
    <div class="flex flex-col gap-[10px]">
        <h3 class="font-space font-semibold text-grey text-xl sm:text-base">{{ $t("Artist.links") }}</h3>
        <div class="flex gap-[10px]">
            <img 
                src="../../assets/images/svg/InternetLogo.svg" 
                alt="InternetLogo" 
                class="link">
            <img 
                src="../../assets/images/svg/DiscordLogo.svg" 
                alt="DiscordLogo" 
                class="link">
            <img 
                src="../../assets/images/svg/YoutubeLogo.svg" 
                alt="YoutubeLogo" 
                class="link">
            <img 
                src="../../assets/images/svg/TwitterLogo.svg" 
                alt="TwitterLogo" 
                class="link">
            <img 
                src="../../assets/images/svg/InstagramLogo.svg" 
                alt="InstagramLogo" 
                class="link">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.link {
    @apply transition duration-300 hover:scale-102 hover:cursor-pointer
    sm:w-[24px]
}

</style>