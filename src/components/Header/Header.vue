<template>
    <div class="header">
        <div class="content">
            <my-logo/>

            <div class="menu">
                <img 
                src="../../assets/images/svg/BurgerMenu.svg" 
                alt="BurgerMenu" 
                class="burger-menu"
                @click="dropDawnShow">
                <Transition name="slide-fade">
                    <HeaderMenu class="navigation"/>
                </Transition>
                
                <Localization class="localization"/>
            </div>
        </div>
        <Transition name="slide-fade">
            <HeaderMenu v-if="dialogVisible" class="dropdawn-menu"/>
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
                language: "EN",
                dialogVisible: false, 
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
            window.addEventListener('resize', () => {
                this.closeMenu();
            })
        }

        
    }
</script>

<style scoped>

/* Animation Styles Start */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,

.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Animation Styles End */


.header{
    padding: 0 50px    ;
    min-height: 100px;
}

.content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu{
    display: flex;
    align-items: center;
}

.burger-menu{
    display: none;
}

.localization{
    padding: 0 13px;
}

/* Стилі для моніторів (більші планшетів та комп'ютерів) */
@media only screen and (min-width: 768px) and (max-width: 1279px) { 
    
    .header{
        padding: 0 25px;
        min-height: 54px;
    }
    
    .navigation{
        display: none;
    }

    .burger-menu{
        display: block;
    }
    
    .dropdawn-menu{
        display: flex;
        flex-direction: row;
        padding: 0 20px;
        margin-bottom: 10px;
    }

    .burger-menu:hover{
        cursor: pointer;
    }
}

/* Стилі для мобільних пристроїв */
@media only screen and (max-width: 767px) {
    .header{
        padding:0 5px;
        min-height: 54px;
    }
    
    .navigation{
        display: none;
    }

    .burger-menu{
        display: block;
        margin-bottom: 10px;
    }
    .burger-menu:hover{
        cursor: pointer;
    }
}
    
</style>

