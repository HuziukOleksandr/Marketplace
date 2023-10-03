import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway  from  'vue3-click-away'
import components from './components/UI'
import i18n from './localization/i18n.js'
import router from './router.js'




import './assets/root/carousel.css'
import './assets/root/colors.css'
import './assets/root/fonts.css'
import './assets/root/style.css'

const app = createApp(App);

app.use(router)
app.use(VueClickAway)
app.use(i18n)


components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')