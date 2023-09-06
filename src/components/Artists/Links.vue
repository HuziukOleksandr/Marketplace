<template>
    <div class="links">
        <h3 class="links-title">{{ $t("Artist.links") }}</h3>
        <div class="links-icons">
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

/* .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.links-title {
    font-family: 'SpaceMono', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-secondary);
}

.links-icons {
    display: flex;
    gap: 10px;
}

.link {
    transition: 0.2s;
}

.link:hover {
    cursor: pointer;
    scale: 1.02;
} */

@media only screen and (max-width: 1279px) {
    /* .links-title {
        font-size: 16px;
        line-height: 22px;
    }

    .link {
        width: 24px;
    } */
}
</style>