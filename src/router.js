import {createRouter, createWebHistory} from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Main from './views/Main.vue' 
import Register from './views/Registration.vue' 
import Wallet from './views/ConnectWallet.vue'
import Marketplace from './views/Marketplace.vue'
import Ranking from './views/Ranking.vue'
import Artists from './views/Artists.vue'

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
        components: {
            Header,
            default: Wallet,
            Footer
        }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        components: {
            Header,
            default: Marketplace,
            Footer
        }
    },
    {
        path: '/ranking',
        name: 'Ranking',
        components: {
            Header,
            default: Ranking,
            Footer
        }
    },
    {
        path: '/artist',
        name: 'Artists',
        components: {
            Header,
            default: Artists,
            Footer
        },
        props: route => ({
            artistName: route.query.artistName
        })
    }
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router