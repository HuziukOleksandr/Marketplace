<template>
    <div class="item" v-for="item in infoList" :key="id" >
        <h2 class="number">{{ item.number }}</h2>
        <h3 class="name">{{ item.title }}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            infoList: {
                type: Object,
                requires: true,
            }
        }
    }
</script>

<style scoped>

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    .item{
        max-width: 150px;
        width: 100%;
        color: var(--text-color-white);
    }

    .number{
        font-family: "SpaceMono", sans-serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
    }

    .name{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
    }
   
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {  

    .item{
        max-width: 150px;
        width: 100%;
        color: var(--text-color-white);
    }

    .number{
        font-family: "SpaceMono", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
    }

    .name{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {
    .item{
        max-width: 85px;
        width: 100%;
        color: var(--text-color-white);
    }

    .number{
        font-family: "SpaceMono", sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
    }

    .name{
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
}

</style>