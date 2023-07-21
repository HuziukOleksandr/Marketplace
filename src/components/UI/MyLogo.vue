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
/* Desktop */
@media only screen and (max-width: 1920px) {

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

}

/* Tablet */
@media only screen and (max-width: 960px) { 

/* Main Style Start */

/* Main Style End */

/* Logo Styles Start */

/* Logo Styles End */

/* Lins Styles Start */

/* Links Styles End */
}

/* Mobile */
@media only screen and (max-width: 540px) { 

/* Main Style Start */

/* Main Style End */

/* Logo Styles Start */

/* Logo Styles End */

/* Lins Styles Start */

/* Links Styles End */ 

}

</style>