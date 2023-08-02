<template>
    <div class="card" v-for="card in cards" :key="card.id">
        <!-- Preview Start -->
        <div class="preview">
            <div class="number">
                <h3 class="number-text">{{ card.id }}</h3>
            </div>
            <img 
                :src="getUserImageUrl(card.userName)" 
                :alt="card.userName">
        </div>
        <!-- Preview End -->
        
        <!-- Title Start -->
        <div class="title">
            
            <h2 class="name-text">
                {{ card.userName }}
            </h2>
            
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
            cards: {
                type: Object,
                reqired: true
            }
        },
        
        methods: {
            getUserImageUrl(name) {
                return new URL(`../../../assets/images/Avatars/${name}.svg`, import.meta.url).href;
            } 
        }
    }
</script>

<style scoped>

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
    position: relative;
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
    color: var(--text-color-white);
    text-align: center;
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

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {  
    
    /* Main Style Start */

    .card{
        flex-direction: row;
        max-width: 330px;
        height: 100px;
    }

    /* Main Style End */

    /* Preview Styles Start*/

    .number{
        position: absolute;
        right: 40px;
    }

    /* Preview Styles End*/
    
    /* Title Styles Start */

    .title{
        width: 210px;
    }

    .name-text{
        text-align: start;
    }
    /* Title Styles End */

}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    /* Main Style Start */

    .card{
        max-width: 315px;
        height: 100px;
        flex-direction: row;
    }

    /* Main Style End */

    /* Preview Styles Start*/

    .preview{
        width: 60px;  
    }

    .number{
        position: absolute;
        left: -10px;
        top: -10px;
    }

    /* Preview Styles End*/

    /* Title Styles Start */

    .title{
        width: 195px;
    }

    .name-text{
        text-align: start;
    }

    /* Title Styles End */
    
}

</style>