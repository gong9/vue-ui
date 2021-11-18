import Vue from "vue";
import App from "./App";
import Message from "./components/Message/message";
Vue.config.productionTip = false;
Vue.prototype.$messge = Message;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
