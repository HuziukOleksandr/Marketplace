<template>
    <!-- Logo Start -->
    <div class="logo">
            <img 
                src="../../assets/images/svg/favicon.svg" 
                alt="icon" 
                class="logo-picture">
            <img 
                src="../../assets/images/svg/logo-title.svg" 
                alt="title"
                class="logo-title">
    </div>
    <!-- Logo End -->
</template>

<script>
    export default {
        name: "my-logo"
    }
</script>

<style scoped>

/* Logo Styles Start */

.logo{
    display: flex;
    gap: 10px;
    align-items: center;
}

.logo-title, .logo-picture{
    transition: 0.2s;
}

.logo-title:hover, .logo-picture:hover{
    transform: scale(1.02);
    cursor: pointer;
}

/* Logo Styles End */

@media only screen and (max-width: 1279px) { 
    .logo{
        height: 24px;
    }

    .logo-picture{
        height: 24px;
    }

    .logo-title{
        height: 15px;
    }
}

</style>