<template>
    <div class="community">
        <my-logo class="logo"/>
        <p class="text">{{ $t("Footer.text") }}</p>
        <h2 class="title">{{ $t("Footer.community") }}</h2>
        <div class="icons">
            <img 
                src="../../assets/images/Footer/DiscordLogo.svg" 
                alt="DiscordLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/YoutubeLogo.svg" 
                alt="YoutubeLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/TwitterLogo.svg" 
                alt="TwitterLogo" 
                class="icon">
            <img 
                src="../../assets/images/Footer/InstagramLogo.svg" 
                alt="InstagramLogo" 
                class="icon">
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>


/* Main Styles Start */
.community{
    max-width: 328px;
    width: 100%;
}

/* Main Styles End */

/* Logo Styles Start */

.logo{
    margin-bottom: 30px;
}

/* Logo Styles Start */

/* Text Styles Start */
.text, .title{
    font-family: 'Mintserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-secondary);
    margin-bottom: 20px;
}

.title{
    margin-bottom: 15px;
}

/* Text Styles End */

/* Icons Style Start */
.icons{
    width: 158px;
    display: flex;
    justify-content: space-between;
}

.icon{
    transition: 0.2s;
}
.icon:hover{
    cursor: pointer;
    scale: 1.01;

}

/* Icons Style End */



/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    .logo{
        margin-bottom: 20px;
    }

}


/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    
    .logo{
        margin-bottom: 20px;
    }

}
</style>