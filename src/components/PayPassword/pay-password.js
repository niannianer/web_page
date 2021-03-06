/**
 * Created by DELL on 2017/8/25.
 */
import Vue from 'vue';

const PayPasswordConstructor = Vue.extend(require('./PayPassword.vue'));

let instance = null;
let initInstance = () => {
    instance = new PayPasswordConstructor({
        el: document.createElement('div')
    });
    instance.close = () => {
        window.setTimeout(() => {
            document.body.removeChild(instance.$el);
        });
    };
};
import EventBus from  '../../tools/event-bus';
let PayPassword = (options = {}) => {
    if (!instance) {
        initInstance();
    }
    document.body.appendChild(instance.$el);
    instance.title = options.title || '忘记交易密码';
    instance.update = options.update || false;

    Vue.nextTick(() => {
        EventBus.$emit('open');
    });
    instance.callback = (result) => {
        instance.close();
        if (options.callback) {
            options.callback(result);
        }
    };
    return instance;

}
export default PayPassword;
