<template>
    <div class="section">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Marketplace.title") }}</h2>
            <h2 class="sub-title">{{ $t("Marketplace.subTitle") }}</h2>
            <my-search class="input" :placeholder='$t("Marketplace.input")'>
                <template #image>
                    <img src="../../assets/images/svg/MagnifyingGlass.svg" alt="MagnifyingGlass" />
                </template>
            </my-search>
        </div>
        <!-- Header End -->
        <!-- Content Start -->
        <div class="container">

        </div>
        <!-- Content End -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.section{
    max-width: 1050px;
    width: 100%;
    min-height: 600px;
    margin: 0 auto;
}

.title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 56px;
    color: var(--text-color-white);
    margin-bottom: 10px;
}

.sub-title{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: var(--text-color-white);
    margin-bottom: 30px;
}

.input{
    width: 100%;

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .section{
        max-width: 680px;
    }

    .title{
        font-size: 38px;
        line-height: 45px;
    }

    .sub-title{
        font-size: 16px;
        line-height: 22px;
    }

}
</style>