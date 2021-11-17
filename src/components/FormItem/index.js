import AsyncValidator from "async-validator";
import emitter from "../../mixins/emitter";
import "./index.css";
export default {
  mixins: [emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data: function () {
    return {
      validateState: "",
      validateMessage: "",
    };
  },
  computed: {
    fieldValue: function () {
      return this.form.data[this.prop];
    },
  },
  created: function () {
    this.componentName = "SuperFormItem";
  },
  mounted: function () {
    if (this.prop) {
      this.dispatch("SuperForm", "super.form.addField", [this]);
      this.setRules();
      console.log(this.form.data[this.prop]);
    }
  },
  methods: {
    /** 监听基础表单控件触发校验 */
    setRules() {
      this.$on("super.formItem.onBlur", this.onFieldBlur);
      this.$on("super.formItem.onChange", this.onFieldChange);
    },
    /** get all rules */
    getRules() {
      let formRules = this.form.rules;
      if (formRules && formRules[this.prop]) {
        return formRules[this.prop];
      } else {
        return [];
      }
    },

    /** get符合条件的rules */
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter((rule) => !trigger || rule.trigger === trigger);
    },

    /** 校验 */
    validate(trigger, cb = () => {}) {
      const rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) return true;

      this.validateState = "validating";

      let descriptor = {},
        model = {};

      descriptor[this.prop] = rules;
      model[this.prop] = this.fieldValue;

      const validator = new AsyncValidator(descriptor);
      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        cb(this.validateMessage);
      });
    },

    onFieldBlur: function () {
      this.validate("blur");
    },

    onFieldChange: function () {
      this.validate("input");
    },
  },
  render: function (h) {
    return (
      <div>
        {this.label && <label>{this.label}</label>}
        <div>{this.$slots.default}</div>
        {this.validateState === "error" && (
          <div class="errormsg">{this.validateMessage}</div>
        )}
      </div>
    );
  },
};
