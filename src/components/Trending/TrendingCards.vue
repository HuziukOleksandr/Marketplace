<template>
    <div class="card" v-for="card in cards">
        <!-- Main Picture -->
        <img 
            :src="getImageUrl(card.mainPicture)" 
            :alt="card.mainPicture">
        
        <!-- Secondary Start -->
        <div class="secondary">
            <img 
                :src="getImageUrl(card.secondaryPicture[0].name)" 
                :alt="card.secondaryPicture[0].name">
            <img 
                :src="getImageUrl(card.secondaryPicture[1].name)" 
                :alt="card.secondaryPicture[1].name">
    
            <my-button class="more">
                {{ card.lenght }}
            </my-button>
        </div>
        <!-- Secondary End -->

        <!-- Preview Start -->
        <div class="preview">
            <h2 class="title">{{ card.preview }}</h2>
            <div class="user">
                <img :src="getUserImageUrl(card.namePicture, 'Small')" :alt="card.namePicture">
                <h2 class="userName">{{ card.userName }}</h2>
            </div>
        </div>
        <!-- Preview End -->
    </div>
</template>

<script>
    export default {
        props: {
            cards:{
                type: Object,
                reqired: true,
            }
        },
        methods: {
            getImageUrl(url) {  
                return new URL(`../../assets/images/Cards/${url}.svg`, import.meta.url).href;
            },
            getUserImageUrl(name, size) {
                return new URL(`../../assets/images/Avatars/${size}/${name}.svg`, import.meta.url).href;
            } 
        },
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Styles Start */

    .card{
        width: 330px;
        height: 525px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    /* Main Styles End */

    /* Secondary Styles Start */

    .secondary{
        display: flex;
        gap: 15px;
    }

    .more{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--button-background-color);
        border: none;
    }

    /* Secondary Styles End */

    /* Preview Styles Start */
    
    .preview{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
    }

    .user{
        display: flex;
        gap: 10px;
    }

    .userName{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

    }
    /* Preview Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) {   

    /* Main Styles Start */

    /* Main Styles End */

    /* Secondary Styles Start */

    /* Secondary Styles End */
    
    /* Preview Styles Start */
    
    /* Preview Styles End */

}

/* Mobile */
@media only screen and (max-width: 540px) { 

    /* Main Styles Start */

    /* Main Styles End */

    /* Secondary Styles Start */

    /* Secondary Styles End */
    
    /* Preview Styles Start */
    
    /* Preview Styles End */

}

</style>