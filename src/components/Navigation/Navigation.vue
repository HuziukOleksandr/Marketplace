<template>        
    <div>
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.marketplace") }}</a>
        
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.rankings") }}</a>
        
        <a href="!#" class="link" :style="linkItemStyles">{{ $t("Navigation.connectAWallet") }}</a>
    </div>
</template>

<script>
    export default {
        props: {
            linkItemStyles: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style scoped>

/* Стилі для великих моніторів та десктопів */
@media only screen and (min-width: 1280px) {

    .link{
        
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
    }

}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    .link{
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
    }
   
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .link{
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        transition: 0.2s;
    }

    .link:hover{
        transform: scale(1.01);
    }
}

</style>