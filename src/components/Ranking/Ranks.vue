<template>
    <div class="section">
        <!-- Header Start -->
        <div class="header">
            <h2 class="title">{{ $t("Ranking.title") }}</h2>
            <h2 class="sub-title">{{ $t("Ranking.subTitle") }}</h2>
        </div>
        <!-- Header End -->

        <!-- Content Start -->
        <div class="container">
            <div class="content-header">
                <div class="items">
                    <div class="item">
                        <a href="" class="link">{{ $t("Ranking.today") }}</a>
                    </div>
                    <div class="item">
                        <a href="" class="link">{{ $t("Ranking.week") }}</a>
                    </div>
                    <div class="item">
                        <a href="" class="link">{{ $t("Ranking.month") }}</a>
                    </div>
                    <div class="item">
                        <a href="" class="link">{{ $t("Ranking.time") }}</a>
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
    gap: 80px;
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
    width: 25%;
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
</style>