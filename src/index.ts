import './app/style.css';
import { store } from './shared/model/storage/store';
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
import { WeatherWidget } from './app';

const useWeatherWidget = {
  install: (app: {component: (a: string, b: unknown) => void, use: any}) => {
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
    app.use(store);
    app.component('font-awesome-icon', FontAwesomeIcon);
    app.component("WeatherWidget", WeatherWidget);
  }
}

export { useWeatherWidget, WeatherWidget };
