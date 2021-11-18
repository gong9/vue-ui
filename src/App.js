import FormView from "./demo/form/FormView";
import "./App.css";

export default {
  components: { FormView },
  data: function () {
    return {};
  },
  mounted: function () {},
  methods: {
    handleClick() {
      this.$messge.info({
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
