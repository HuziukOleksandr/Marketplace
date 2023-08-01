<template>
    <div class="section">
        <div class="btn">
            <my-button class="button" @click="this.$router.push({name: 'Register'})">
                <img 
                    src="../../../assets/images/Buttons/RocketLaunchWhite.svg" 
                    alt="RocketLaunch">
                {{ $t("Hero.button") }}
            </my-button>
        </div>
        <div class="items">
            <div class="item" v-for="item in infoList" :key="id" >
                <h2 class="number">{{ item.number }}</h2>
                <h3 class="name">{{ item.title }}</h3>
            </div>
        </div>
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

.section{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.items{
    display: flex;
    justify-content: space-between;
}
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

.button{
    height: 60px;
    padding: 0 50px;
    background-color: var(--button-background-color);
    border: none;
    color: var(--text-color-white);
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {  

    .item{
        max-width: 90px;
    }

    .number{
        font-size: 22px;
        line-height: 25px;
    }

    .name{
        font-size: 15px;
        line-height: 22px;
    }

}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {
    .section{
        gap: 40px;
    }

    .item{
        max-width: 85px;
    }

    .number{
        font-size: 22px;
        line-height: 25px;
    }

    .name{
        font-size: 14px;
        line-height: 22px;
    }

    .button{
        width: 315px;
        display: flex;
        justify-content: center;
    }
}

</style>