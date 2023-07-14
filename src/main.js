import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/colors.css'
import './assets/styles/fonts.css'
import './assets/styles/reset.css'

import components from './components/UI'



const app = createApp(App);


components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
