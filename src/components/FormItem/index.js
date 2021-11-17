/* eslint-disable no-unused-vars */

/**
 * FormItem
 */
import emitter from "../../mixins/emitter";
export default {
  name: "SuperFormItem",
  mixins: [emitter],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  mounted: function () {
    if (this.prop) {
      this.dispatch("SuperForm", "super.form.addField", [this]);
    }
  },
  render: function (h) {
    return (
      <div>
        {this.label && <label>{this.label}</label>}
        <div>{this.$slots.default}</div>
      </div>
    );
  },
};
