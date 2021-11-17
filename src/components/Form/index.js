/* eslint-disable no-unused-vars */

/**
 * Form
 */

export default {
  name: "super",
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
      fields: [], // 缓存内部的item
    };
  },
  created: function () {
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
