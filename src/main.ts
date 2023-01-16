import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import '@/styles/index.scss';
import 'vuetify/styles';
import Vuetify from './plugins/vuetify';

const pinia = createPinia();
const app = createApp(App);

app.use(Vuetify);
app.use(pinia);
app.use(router);

app.mount('#app');
