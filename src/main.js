import Vue from 'vue';
import 'flex.css/dist/flex.css';
import './less/base.less';
import App from './App';
import router from './router';
import * as filters from './filters';
import store from './store';

Object.keys(filters,(fun, key) => {
    Vue.filter(key, fun);
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
