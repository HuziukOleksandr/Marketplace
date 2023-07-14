<template>
    <div class="section" v-for="card in cards">
        <img 
            :src="getImageUrl(card.mainPicture)" 
            :alt="card.mainPicture">
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
        <div class="preview">
            <h2 class="title">{{ card.preview }}</h2>
            <div class="user">
                <img :src="getUserImageUrl(card.namePicture, 'Small')" :alt="card.namePicture">
                <h2 class="userName">{{ card.userName }}</h2>
            </div>
        </div>
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
        data()  {
            
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

    .section{
        width: 330px;
        height: 525px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

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
        font-family: 'WorkSans', sans-serif;
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
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

    }
    /* Preview Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) {   
}

/* Mobile */
@media only screen and (max-width: 540px) {   
}

</style>