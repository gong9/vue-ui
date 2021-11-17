export default {
  provide: function () {
    return {
      form: this,
    };
  },
  props: {
    data: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data: function () {
    return {
      fields: [], // 缓存内部的form-item实例
    };
  },
  created: function () {
    this.componentName = "SuperForm";
    this.$on("super.form.addField", (field) => {
      if (field) {
        this.fields.push(field);
      }
    });
  },
  mounted: function () {
    console.log(this.fields);
  },
  methods: {
    /** form级别的校验 */
    validate(cb) {
      return new Promise((res, rej) => {
        let count = 0;
        let valid = true;
        this.fields.forEach((field) => {
          field.validate("", (errors) => {
            if (errors) {
              valid = false;
            }
          });
          if (++count === this.fields.length) {
            res(valid);
            if (typeof callback === "function") {
              cb(valid);
            }
          }
        });
      });
    },
  },
  render: function (h) {
    return <form>{this.$slots.default}</form>;
  },
};
