import emitter from "../../mixins/emitter";
export default {
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value: function (val) {
      this.currentValue = val;
    },
  },
  methods: {
    blurHandle() {
      this.dispatch("SuperFormItem", "super.formItem.onBlur");
    },
    handleInput(e) {
      const val = e.target.value;
      this.currentValue = val;

      this.$emit("input", val);
      this.dispatch("SuperFormItem", "super.formItem.onChange");
    },
  },
  render: function (h) {
    return (
      <input
        type="text"
        value={this.currentValue}
        onBlur={this.blurHandle}
        onInput={this.handleInput}
      />
    );
  },
};
