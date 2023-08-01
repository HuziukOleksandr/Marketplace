import {createRouter, createWebHistory} from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Main from './views/Main.vue' 
import Register from './views/Registration.vue' 

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
    }
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router