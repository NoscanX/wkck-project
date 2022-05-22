import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(fas);

createApp(App).component('fa',FontAwesomeIcon).use(router).use(Toast).mount('#app')
