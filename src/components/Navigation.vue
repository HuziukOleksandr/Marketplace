<template>
    <nav class="header">
        <div class="logo">
            <img 
                src="../assets/images/svg/favicon.svg" 
                alt="icon" 
                class="logo-picture">
            <img 
                src="../assets/images/svg/logo-title.svg" 
                alt="title"
                class="logo-title">
        </div>
        <div class="nav-links">
            <div class="link-item">
                <a href="!#" class="link">Marketplace</a>
            </div>
            <div class="link-item">
                <a href="!#" class="link">Rankings</a>
            </div>
            <div class="link-item">
                <a href="!#" class="link">Connect a wallet</a>
            </div>
            <my-button class="button">
                <img src="../assets/images/svg/User.svg" alt="user">
                Sing Up
            </my-button>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {
    .header{
        width: 100%;
        height: 100px;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

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
    /* Lins Styles Start */

    .nav-links{
        height: 60px;
        display: flex;
        gap: 10px;
    }

    .link-item{
        display: flex;
        align-items: center;
        padding:0 20px;
    }

    .link{
        color: var(--text-color-white);
        text-decoration: none;
        font-family: 'WorkSans', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
    }

    .button{
        height: 60px;
        padding: 0 30px;
        
    }

    /* Links Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) {   
}

/* Mobile */
@media only screen and (max-width: 540px) {   
}
</style>