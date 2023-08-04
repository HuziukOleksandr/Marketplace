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
            <div class="content-header">
                <div class="items">
                    <div class="item">
                        <a href="" class="link">{{ $t("Marketplace.NFT") }}</a>
                        <div class="number">305</div>
                    </div>
                    <div class="item">
                        <a href="" class="link">{{ $t("Marketplace.collection") }}</a>
                        <div class="number">8</div>
                    </div>
                </div>
            </div>
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
    
    min-height: 600px;
    
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.header{
    max-width: 1050px;
    width: 100%; 
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

.content-header{
    width: 100%;
    height: 70px;
    border-top: 1px solid var(--background-secondary);
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.items{
    max-width: 1050px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
}


.item{
    max-width: 525px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.link{
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--text-color-secondary);
    text-decoration: none;
}

.number{
    padding: 5px 10px;
    background-color: var(--background-secondary);
    color: var(--text-color-secondary);
    border-radius: 20px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
}


/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) {

    .header{
        max-width: 690px;  
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

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {

    .header{
        max-width: 315px;  
    }

    .title{
        font-size: 28px;
        line-height: 35px;
    }

    .sub-title{
        font-size: 16px;
        line-height: 22px;
    }
}
</style>