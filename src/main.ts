import { store } from './shared/model/storage/store';
import './app/style.css'

import { createApp } from 'vue'
import { App } from './app'

import {plugin as Slicksort} from 'vue-slicksort';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTemperatureLow,
  faDroplet,
  faWind,
  faCloud,
  faEye,
  faGaugeHigh,
  faCompass,
  faPersonRays,
  faFloppyDisk,
  faBars,
  faTrash,
  faGear,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTemperatureLow,
  faDroplet,
  faWind,
  faCloud,
  faEye,faGaugeHigh,
  faCompass,
  faPersonRays,
  faFloppyDisk,
  faBars,
  faTrash,
  faGear,
  faXmark,
);

export const app = createApp(App);

app.use(store);
app.use(Slicksort);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('weather-widget');
