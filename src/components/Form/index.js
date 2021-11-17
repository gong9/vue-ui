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
  render: function (h) {
    return <form>{this.$slots.default}</form>;
  },
};
