<template>
    <div class="w-[100%] max-w-[755px] flex flex-col gap-[30px] sm:max-w-[315px]">
        <!-- User Start -->
        <div class="user ">
            <my-user :userName="card.userName"/>
        </div>
        <!-- User End -->

        <!-- Title Start -->
        <h2 class="custom-title sm:self-center">
            {{ card.title }}
        </h2>
        <!-- Title End -->

        <!-- Button Start -->
        <div>
            <my-button class="h-[60px] bg-white px-[50px] sm:hidden">
                <img 
                    src="../../../assets/images/Buttons/Eye.svg" 
                    alt="Eye"
                >   
                    {{ $t("Highlight.button") }}
            </my-button>
        </div>
        <!-- Button End -->
    </div>
</template>

<script>
import { getUserImageUrl } from '../../../helpers/helpers';
    export default {
        props:{
            card:{
                type: Object,
                reqired: true
            }
        },

        methods:{
            getUserImageUrl
        }
    }
</script>

<style scoped>

.user {
    @apply 
    w-[100%] max-w-[150px] h-[45px] 
    flex items-center justify-center gap-[10px]
    rounded-[20px] bg-bg-secondary
}

</style>