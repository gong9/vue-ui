import FormView from "./demo/form/FormView";
import Message from "./components/Message/message";
import "./App.css";

export default {
  components: { FormView },
  data: function () {
    return {};
  },
  mounted: function () {},
  methods: {
    handleClick() {
      Message.info({
        content: "这是一条提示信息",
        duration: 3000,
      });
    },
  },
  render: function (h) {
    return (
      <div>
        <FormView></FormView>
        <button onClick={this.handleClick}>alert</button>
      </div>
    );
  },
};
