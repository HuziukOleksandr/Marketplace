<template>
    <div class="card" v-for="card in cards">
        <!-- Preview Start -->
        <div class="preview">
            <div class="number">
                <h3 class="number-text">{{ card.id }}</h3>
            </div>
            <img :src="getUserImageUrl(card.name,'Large')" :alt="card.name">
        </div>
        <!-- Preview End -->
        
        <!-- Title Start -->
        <div class="title">
            <div class="name">
                <h2 class="name-text">
                    {{ card.name }}
                </h2>
            </div>
            <div class="sale">
                <h3 class="sale-text">{{ $t("Artists.totalSale") }}</h3>
                <h3 class="sale-number">{{ card.sale }}</h3>
            </div>
        </div>
        <!-- Title End -->
    </div>
</template>

<script>
    export default {
        props:{
            cards:{
                type: Object,
                reqired: true
            }
        },
        methods: {
            getUserImageUrl(name, size) {
                return new URL(`../../assets/images/Avatars/${size}/${name}.svg`, import.meta.url).href;
            } 
        }
    }
</script>

<style scoped>

/* Desktop */
@media only screen and (max-width: 1920px) {

    /* Main Style Start */

    .card{
        max-width: 240px;
        width: 100%;
        height: 240px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: var(--background-secondary) ;
        border-radius: 20px;
        padding: 20px;
        transition: 0.2s;
    }

    .card:hover{
        scale: 1.05;
        cursor: pointer;
    }

    /* Main Style End */

    /* Preview Styles Start*/

    .preview{
        display: flex;
        gap: 10px;
    }

    .number{
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        color: var(--text-color-secondary);
        background-color: var(--background-color);
    }

    .number-text{
        font-family: "SpaceMono", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }

    /* Preview Styles End*/
    
    /* Title Styles Start */

    .title{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .name-text{
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        color: var(--text-color-white);
    }

    .sale{
        display: flex;
        gap: 10px;
    }

    .sale-text{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-secondary);
    }

    .sale-number{
        font-family: "SpaceMono", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: var(--text-color-white);
    }

    /* Title Styles End */

}

/* Tablet */
@media only screen and (max-width: 960px) {  
    
    /* Main Style Start */

    /* Main Style End */

    /* Preview Styles Start*/

    /* Preview Styles End*/
    
    /* Title Styles Start */

    /* Title Styles End */

}

/* Mobile */
@media only screen and (max-width: 540px) {
    
    /* Main Style Start */

    /* Main Style End */

    /* Preview Styles Start*/

    /* Preview Styles End*/
    
    /* Title Styles Start */

    /* Title Styles End */

}

</style>