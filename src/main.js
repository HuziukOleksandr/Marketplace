import { createApp } from 'vue'
import App from './App.vue'

import './assets/root/colors.css'
import './assets/root/fonts.css'
import './assets/root/reset.css'

import components from './components/UI'



const app = createApp(App);


components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
