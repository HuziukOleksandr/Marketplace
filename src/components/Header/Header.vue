<template>
    <div class="px-[50px] w-[100%] sm:px-[30px]">
        <div class="flex justify-between">
            <my-logo/>

            <div class="flex items-center justify-between">
                <img 
                src="../../assets/images/svg/BurgerMenu.svg" 
                alt="BurgerMenu" 
                class="hidden md:block sm:block hover:cursor-pointer"
                @click="dropDawnShow">
                <Transition name="slide-fade">
                    <HeaderMenu class="md:hidden sm:hidden"/>
                </Transition>
                
                <Localization class="px-[13px] sm:px-0"/>
            </div>

        </div>
        
        <Transition name="slide-fade">
            <HeaderMenu 
                v-if="dialogVisible" 
                class="flex px-[20px] py-[10px] mb-[40px] rounded-[20px] bg-bg-secondary"
                @menuClose="dropDawnShow"/>
        </Transition>
    </div> 
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import Localization from './HeaderLocalization.vue'

    export default {
        components: {
            HeaderMenu, Localization
        },

        data() {
            return {
                dialogVisible: false
            }
        },

        methods: {

            dropDawnShow(){
                this.dialogVisible = !this.dialogVisible
            },
            
            closeMenu(){
                if(window.innerWidth >= 1280){
                    this.dialogVisible = false;
                }
            }
        },

        mounted(){
            window.addEventListener('resize', this.closeMenu)
        },

        beforeUnmount(){
            window.removeEventListener('resize', this.closeMenu)
        }

    }
</script>

<style scoped>

/* Animation Styles Start */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media only screen and (min-width: 1280px) {
    .slide-fade-leave-active {
        transition: none;
    }
}
  
/* Animation Styles End */


/* .header {
    padding: 0 50px    ;
    min-height: 100px;
}

.content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu {
    display: flex;
    align-items: center;
}

.burger-menu {
    display: none;
}

.localization {
    padding: 0 13px;
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) 
@media only screen and (min-width: 768px) and (max-width: 1279px) { 

    .header {
        padding: 0 25px;
        min-height: 54px;
    }
    
    .navigation {
        display: none;
    }

    .burger-menu {
        display: block;
    }
    
    .dropdawn-menu {
        display: flex;
        flex-direction: row;
        padding: 10px 20px;
        margin-bottom: 40px;
        border-radius: 20px;
        background-color: var(--background-secondary);
    }

    .burger-menu:hover {
        cursor: pointer;
    }
}

/* Стилі для мобільних пристроїв 
@media only screen and (max-width: 767px) {

    .header {
        padding:0 5px;
        min-height: 54px;   
    }
    
    .navigation {
        display: none;
    }

    .burger-menu {
        display: block;
    }

    .dropdawn-menu {
        padding: 20px;
        margin-bottom: 40px;
        border-radius: 20px;
        background-color: var(--background-secondary);
    }
    
    .burger-menu:hover {
        cursor: pointer;
    }
} */
</style>

