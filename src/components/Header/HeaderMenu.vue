<template>
        <div class="flex justify-center md:max-w-[690px] md:mt-[30px] m-auto sm:flex-col sm:max-w-[330px] sm:mt-[20px]" >
            <Navigation 
                :linkItemStyles="styles"
                class="sm:m-3"
                @menuClose="this.$emit('menuClose', false);"
            />
                
            <my-button 
                class="custom-btn border-none text-base sm:flex sm:justify-center" 
                @click="buttonClick"
            >
                <img 
                    src="../../assets/images/Buttons/User.svg" 
                    alt="user"
                >
                {{ $t("Header.button") }}
            </my-button>
        </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'

    export default {
        components: {
            Navigation
        },

        data() {
            return {
                styles: "text-white items-center px-[20px] text-center flex sm:flex sm:justify-center sm:mb-[20px]"
            }
        },

        methods: {
            buttonClick(){
                this.$emit('menuClose', false);
                this.$router.push({ name: 'Register' });
            }
        }

    }
</script>