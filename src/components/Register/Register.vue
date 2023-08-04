<template>
    <div class="section">
        <div class="picture"></div>
        <div class="form">
            <h2 class="title">{{ $t("Register.title") }}</h2>
            <h3 class="sub-title">{{ $t("Register.subTitle") }}</h3>
            <div class="inputs">
                <my-input class="input" :placeholder="$t('Register.userName')">
                    <template #image>
                        <img src="../../assets/images/Register/User.svg" alt="User" />
                    </template>
                </my-input>
                <my-input class="input" :placeholder="$t('Register.email')">
                    <template #image>
                        <img src="../../assets/images/Register/Email.svg" alt="Email" />
                    </template>
                </my-input>
                <my-input class="input" :placeholder="$t('Register.password')">
                    <template #image>
                        <img src="../../assets/images/Register/LockKey.svg" alt="LockKey" />
                    </template>
                </my-input>
                <my-input class="input" :placeholder="$t('Register.confirm')">
                    <template #image>
                        <img src="../../assets/images/Register/LockKey.svg" alt="LockKey" />
                    </template>
                </my-input>
                
            </div>
            <my-button class="button">
                {{ $t("Register.button") }}
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.section{
    max-width: 1280px;
    width: 100%;
    height: 690px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.picture{
    max-width: 610px;
    width: 100%;
    background-image: url('../../assets/images/Register/Picture.svg');
}

.form{
    max-width: 610px;
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
}

.title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 51px;
    line-height: 56px;
    text-align: start;
    margin-bottom: 20px;
}

.sub-title{
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    margin-bottom: 40px;
}

.inputs{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

.button{
    max-width: 330px;
    width: 100%;
    height: 45px;
    justify-content: center;
    background-color: var(--button-background-color);
    border: none;
    color: var(--text-color-white);
    font-size: 16px;
    line-height: 22px;
}

.input{
    max-width: 330px;
    width: 100%;
    height: 45px;
    padding: 0 30px;
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .section{
        max-width: 834px;
        width: 100%;
        height: 615px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .picture{
        max-width: 397px;
        width: 100%;
        background-image: url('../../assets/images/Register/PictureMedium.svg');
    }
    .form{
        max-width: 397px;
        width: 100%;
        padding: 80px 0;
        height: 615px;
        display: flex;
        flex-direction: column;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 38px;
        line-height: 45px;
        text-align: start;
        margin-bottom: 20px;
    }

    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 40px;
    }

    .input{
        max-width: 325px;
        width: 100%;
        height: 45px;
        padding: 0 30px;
    }

    .button{
        width: 325px;
    }
}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {

    .section{
        max-width: 375px;
        width: 100%;
        min-height: 775px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .picture{
        max-width: 375px;
        width: 100%;
        min-height: 232px;
        background-image: url('../../assets/images/Register/PictureSmall.svg');
    }
    .form{
        max-width: 315px;
        width: 100%;
        padding: 30px 0;
        height: 615px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 34px;
        line-height: 45px;
        text-align: start;
        margin-bottom: 20px;
    }

    .sub-title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 40px;
    }

    .input{
        max-width: 315px;
        width: 100%;
        height: 45px;
        padding: 0 30px;
    }

    .button{
        width: 315px;
    }

}
</style>