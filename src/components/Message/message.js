import Notification from "./notification.js";

let messageInstance;

const getMessageInstance = () =>
  (messageInstance = messageInstance || Notification.instance());

const notice = (option, type) => {
  getMessageInstance().add(option, type);
};

export default {
  info: function (option) {
    notice(option, "info");
  },
  // ...
};
