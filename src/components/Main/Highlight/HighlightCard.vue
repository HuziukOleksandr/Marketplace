<template>
    <div class="card">
        <!-- User Start -->
        <div class="user">
            <div class="user-icon">
                <img 
                    :src="getUserImageUrl(card.userIcon)" 
                    :alt="card.userName" 
                    class="icon">
            </div>
            <div class="user-name">
                <p  class="name">{{ card.userName }}</p>
            </div>
        </div>
        <!-- User End -->

        <!-- Title Start -->
        <h2 class="title">{{ card.title }}</h2>
        <!-- Title End -->

        <!-- Button Start -->
        <div>
            <my-button class="button">
            <img src="../../../assets/images/Buttons/Eye.svg" alt="Eye">   
            {{ $t("Highlight.button") }}
        </my-button>
        </div>
        <!-- Button End -->
    </div>
</template>

<script>
    export default {
        props:{
            card:{
                type: Object,
                reqired: true
            }
        },
        methods:{
            getUserImageUrl(name) {
                return new URL(`../../../assets/images/Avatars/${name}.svg`, import.meta.url).href;
            } 
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (min-width: 1280px) {

    /* Main Styles Start */

    .card{
        max-width: 755px;
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    /* Main Styles End */

    /* User Styles Start */

    .user{
        max-width: 150px;
        width: 100%;
        height: 45px;
        display: flex;
        gap: 10px;
        align-items: center;
        border-radius: 20px;
        padding: 10px 20px;
        background-color: var(--background-secondary);
    }

    .user:hover{
        cursor: pointer;
    }

    .user-name{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-white);
    }

    .icon{
        width: 24px;
    }

    /* User Styles End */

    /* Title Styles Start */

    .title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600px;
        font-size: 50px;
        line-height: 56px;
        color:  var(--text-color-white);
    }

    /* Title Styles End */

    /* Button Style Start */

    .button{
        height: 60px;
        color:black ;
        padding: 22px 50px;
        border: none;
        font-size: 15px;
        line-height: 22px;

    }

    /* Button Style End */
}

/* Tablet */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    /* Main Styles Start */

    .card{
        max-width: 375px;
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    /* Main Styles End */

    /* User Styles Start */

    .user{
        max-width: 150px;
        width: 100%;
        height: 45px;
        display: flex;
        gap: 10px;
        align-items: center;
        border-radius: 20px;
        padding: 10px 20px;
        background-color: var(--background-secondary);
    }

    .user:hover{
        cursor: pointer;
    }

    .user-name{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-white);
    }

    .icon{
        width: 24px;
    }

    /* User Styles End */

    /* Title Styles Start */

    .title{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600px;
        font-size: 38px;
        line-height: 45px;
        color:  var(--text-color-white);
    }

    /* Title Styles End */

    /* Button Style Start */

    .button{
        height: 60px;
        color:black ;
        padding: 22px 50px;
        border: none;
        font-size: 15px;
        line-height: 22px;
    }

    /* Button Style End */
}

/* Mobile */
@media only screen and (max-width: 540px) { 


}

</style>