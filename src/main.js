import * as Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import axios from 'axios';
import VueAxios from 'vue-axios';


import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = Vue.createApp(App);
app.use(store);
app.use(VueAxios, axios);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');
