<template>
    <div class="max-w-[330px] w-[100%]">
        <my-logo class="mb-[25px]"/>
        <p class="font-serrat font-semibold text-base text-grey mb-5">{{ $t("Footer.text") }}</p>
        <h2 class="font-serrat font-semibold text-base text-grey mb-[15px]">{{ $t("Footer.community") }}</h2>
        <div class="w-[158px] flex justify-between">
            <img 
                src="../../assets/images/svg/DiscordLogo.svg" 
                alt="DiscordLogo" 
                class="icon">
            <img 
                src="../../assets/images/svg/YoutubeLogo.svg" 
                alt="YoutubeLogo" 
                class="icon">
            <img 
                src="../../assets/images/svg/TwitterLogo.svg" 
                alt="TwitterLogo" 
                class="icon">
            <img 
                src="../../assets/images/svg/InstagramLogo.svg" 
                alt="InstagramLogo" 
                class="icon">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>