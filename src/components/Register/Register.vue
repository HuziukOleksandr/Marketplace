<template>
    <div class="section w-[100%] max-w-[1280px] h-[80vh] m-auto flex justify-between roundet-[20px]">
        <div class="picture"></div>
        <div class="form w-[100%] max-w-[610px] flex flex-col justify-center">
            <h2 class="custom-text-lg mb-[20px] lg:text-5xl  text-4xl">{{ $t("Register.title") }}</h2>
            <h3 class="custom-sub-title mb-[40px]">{{ $t("Register.subTitle") }}</h3>
            <div class="flex flex-col gap-[15px] mb-[30px]">
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

.section {
    @apply 
    md:max-w-[835px] md:h-[60wh] 
    sm:max-w-[375px] sm:min-h-[100vh] sm:flex-col
}

.picture {
    @apply w-[100%] max-w-[610px] h-[100%]
    bg-[url('../../assets/images/Register/Picture.svg')]
    bg-cover bg-center bg-no-repeat
    md:max-w-[397px]
    sm:max-w-[375px]
}

.form {
    @apply 
    md:max-w-[397px] 
    sm:max-w-[315px] sm:m-auto sm:py-[30px]
}

.input {
    @apply w-[100%] h-[45px] 
    max-w-[330px] md:max-w-[325px]
}

.button { 
    @apply h-[45px] w-[330px] 
    px-[50px] 
    bg-btn-bg-color text-white  flex justify-center
    md:w-[325px]
    sm:w-[315px]
}

</style>