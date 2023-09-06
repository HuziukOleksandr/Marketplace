<template>
    <h2 class="title">{{ $t("NFTPage.tags") }}</h2>
    <div class="tags">
        <div class="tag" v-for="tag in tags">
            {{ tag }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tags: {
                type: Object,
                required: true  
            }
        }
    }
</script>

<style scoped>

/* .title {
    font-family: "SpaceMono",sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-secondary);
    margin-bottom: 20px;
}

.tags { 
    display: flex;
    gap: 20px;
}

.tag {
    width: fit-content;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 20px;
    background-color: var(--background-secondary);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-color-white);
    text-transform: uppercase;
    transition: 0.2s;
}

.tag:hover {
    cursor: pointer;
    scale: 1.02;
} */


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {
   
    /* .title {
        font-size: 22px;
        line-height: 35px;
    }

    .tags { 
        display: flex;
        flex-direction: column;
        gap: 20px;
       
    } */

   


}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    /* .title {
        font-size: 16px;
        line-height: 22px;
    }

    .tags { 
        display: flex;
        flex-direction: column;
        gap: 20px;
    } */
    
} 

</style>