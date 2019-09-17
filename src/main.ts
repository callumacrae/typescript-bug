import Vue from 'vue';
import App from './App.vue';

const createApp = () => {
  const app = new Vue({
    render: h => h(App)
  });

  return { app };
};

export default createApp;

const { app } = createApp();
app.$mount('#app');
