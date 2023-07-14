<template>
    <section class="section">
        <div class="content">
            <div class="left-side">
                <h2 class="title">Discover <br/>digital art & Collect NFTs</h2>
                <p class="text">{{ text }}</p>
                <my-button class="button">
                    <img 
                        src="../../assets/images/svg/RocketLaunch.svg" 
                        alt="RocketLaunch">
                    Get Started
                </my-button>
                <div class="info">
                    <Info :infoList="infoList"
                />
                </div>
            </div>
            <div class="right-side">
                <img 
                    src="../../assets/images/png/Space Walking.png" 
                    alt="Space Walking">
                <div class="preview">
                    <h2 class="preview-title">{{previewTitle}}</h2>
                    <div class="user">
                        <img 
                            src="../../assets/images/Avatars/Large/Animakid.svg" 
                            alt="Animakid" 
                            class="user-picture">
                        <h2 class="user-name">{{ userName }}</h2>
                    </div>
                </div>
            </div>      
        </div>
    </section>
</template>

<script>
import Info from './HeroInfo.vue'
    export default {
        components: {
            Info
        },
        data(){
            return {
                userName: 'Animakid',
                previewTitle: 'Space Walking',
                text: `NFT marketplace UI created with Anima for Figma.
                        Collect, buy and sell art from more than 20k NFT artists.`,
                infoList: [
                    { id: 1, number: '240k+ ', title: 'Total Sale'},
                    { id: 2, number: '100k+ ', title: 'Auctions'},
                    { id: 3, number: '240k+ ', title: 'Artists'}
                ]
            }
            
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {
    .section{
        min-height: 725px;
        display: flex;
        justify-content: center;
        padding: 80px 0;
    }

    .content{
        max-width: 1050px;
        width: 100%;
        height: 565px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Left Side Styles Start */
    
    .left-side{
        max-width: 510px;
        width: 100%;
        min-height: 100%;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'WorkSans', sans-serif;
        font-weight: 600;
        font-size: 67px;
        line-height: 74px;
        text-align: start;
        margin-bottom: 20px;
    }

    .text{
        color: var(--text-color-white);
        font-family: 'WorkSans', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 35px;
        margin-bottom: 40px;
    }

    .button{
        height: 60px;
        padding: 0 50px;
        margin-bottom: 40px;
    }

    .info{
        max-width: 100%;
        display: flex;
        gap: 30px;
    }

    .item{
        max-width: 150px;
        width: 100%;
        height: 75px;
    }

    /* Left Side Styles End */
    /* Right Side Styles Start */

    .right-side{
        max-width: 510px;
        width: 100%;
        min-height: 510px;
        display: flex;
        flex-direction: column;
        
    }

    .preview{
        min-height: 110px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 0 0 20px 20px;
        background-color: var(--background-secondary);
        color: var(--text-color-white);
        padding: 22px 20px;
    }
    
    .preview-title{
        font-family: 'WorkSans', sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
    }

    .user {
        display: flex;
        gap: 10px;
    }

    .user-name{
        font-family: 'WorkSans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
    
    /* Right Side Styles End */
}


/* Tablet */
@media only screen and (max-width: 960px) {   
}

/* Mobile */
@media only screen and (max-width: 540px) {   
}
</style>