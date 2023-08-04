<template>
    <div class="section">
        <div class="picture"></div>
        <div class="form">
            <h2 class="title">{{ $t("ConnectAWallet.title") }}</h2>
            <h3 class="sub-title">{{ $t("ConnectAWallet.subTitle") }}</h3>
            <div class="buttons">
                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/Coinbase.svg" 
                        alt="Metamask"
                        class="icon">
                    {{ $t("ConnectAWallet.metamask") }}
                </my-button>

                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/WalletConnect.svg" 
                        alt="WalletConnect"
                        class="icon">
                    {{ $t("ConnectAWallet.walletConnect") }}
                </my-button>

                <my-button class="button">
                    <img 
                        src="../../assets/images/Wallet/Coinbase.svg" 
                        alt="Coinbase"
                        class="icon">
                    {{ $t("ConnectAWallet.coinbase") }}
                </my-button>
            </div>
            
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
    height: 642px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.picture{
    max-width: 610px;
    width: 100%;
    background-image: url('../../assets/images/Wallet/Picture.jpg');
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

.buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.icon{
    width: 40px;
}

.button{
    max-width: 320px;
    width: 100%;
    height: 72px;
    display: flex;
    gap: 10px;
    padding: 0 20px 0 40px;
    background-color: var(--background-secondary);
    border: 2px solid var(--button-background-color);
    color: var(--text-color-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {   

    .section{
        max-width: 834px;
        width: 100%;
        height: 530px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .picture{
        max-width: 397px;
        width: 100%;
        background: url('../../assets/images/Wallet/PictureMedium.jpg') center/cover;
    }
    .form{
        max-width: 397px;
        width: 100%;
        padding: 80px 0;
        height: 530px;
        display: flex;
        flex-direction: column;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 33px;
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

    .icon{
        width: 32px;
    }

    .button{
        width: 325px;
        height: 60px;
    }
}

/* Медіа-запит для мобільних пристроїв з шириною екрану до 767px */
@media only screen and (max-width: 767px) {

    .section{
        max-width: 375px;
        width: 100%;
        min-height: 662px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .picture{
        max-width: 375px;
        width: 100%;
        min-height: 232px;
        background-image: url('../../assets/images/Wallet/PictureSmall.jpg');
    }
    .form{
        max-width: 315px;
        width: 100%;
        padding: 30px 0;
        height: 430px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .title{
        color: var(--text-color-white);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 26px;
        line-height: 30px;
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
        height: 60px;
    }
}
</style>