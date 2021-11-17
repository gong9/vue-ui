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
    setRules() {
      this.$on("super.formItem.onBlur", this.onFieldBlur);
      this.$on("super.formItem.onChange", this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      if (formRules && formRules[this.prop]) {
        return formRules[this.prop];
      } else {
        return [];
      }
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter((rule) => rule.trigger === trigger || !rule.trigger);
    },
    validate(trigger, cb = () => {}) {
      const rules = this.getFilteredRule(trigger);
      console.log(rules);
      if (!rules || rules.length === 0) return true;

      this.validateState = "validating";

      let descriptor = {};
      let model = {};
      model[this.prop] = this.fieldValue;
      descriptor[this.prop] = rules;

      // 校验
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
