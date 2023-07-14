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

<style>

/* Desktop */
@media only screen and (max-width: 1920px) {
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
        font-family: "WorkSans", sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
    }
}

/* Tablet */
@media only screen and (max-width: 960px) {   
}

/* Mobile */
@media only screen and (max-width: 540px) {   
}
</style>