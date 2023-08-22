import './app/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { App } from './app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTemperatureLow, faDroplet, faWind, faCloud, faEye, faGaugeHigh, faCompass, faPersonRays } from '@fortawesome/free-solid-svg-icons'

library.add(faTemperatureLow, faDroplet, faWind, faCloud, faEye,faGaugeHigh, faCompass, faPersonRays);

const app = createApp(App);

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
