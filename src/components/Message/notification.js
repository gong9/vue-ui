import Vue from "vue";
import Message from "./index";

Message.instance = () => {
  const vueNode = new Vue({
    render: function (h) {
      return <Message />;
    },
  }).$mount();

  document.body.appendChild(vueNode.$el);
  const messageVueInstance = vueNode.$children[0];

  return {
    add(options) {
      messageVueInstance.add(options);
    },
    delete(name) {
      messageVueInstance.delete(name);
    },
  };
};

export default Message;
