import FormView from "./demo/form/FormView";
import "./App.css";

export default {
  components: { FormView },

  data: function () {
    return {};
  },
  methods: {},
  render: function (h) {
    return (
      <div>
        <FormView></FormView>
      </div>
    );
  },
};
