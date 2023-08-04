import {createRouter, createWebHistory} from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Main from './views/Main.vue' 
import Register from './views/Registration.vue' 
import Wallet from './views/ConnectWallet.vue'
import Marketplace from './views/Marketplace.vue'

const routes = [
    {
        path: '/', 
        name: 'Main',
        components: {
            Header,
            default: Main,
            Footer
        }
    },
    {
        path: '/register',
        name: 'Register',
        components: {
            Header,
            default: Register,
            Footer
        }
    },
    {
        path: '/wallet',
        name: 'Wallet',
        components:{
            Header,
            default: Wallet,
            Footer
        }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        components:{
            Header,
            default: Marketplace,
            Footer
        }
    }
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router