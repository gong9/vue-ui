import { Form, FormItem, Input } from "../../components";
import "./FormView.css";

export default {
  components: { Form, FormItem, Input },

  data: function () {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate().then((res) => {
        console.log(res);
        console.log(this.formValidate);
      });
    },
  },
  render: function (h) {
    return (
      <div class="form-demo-view">
        <div>
          <h3>表单ui组件demo</h3>
          <Form ref="form" data={this.formValidate} rules={this.ruleValidate}>
            <FormItem label="name:" prop="name">
              <Input v-model={this.formValidate.name} />
            </FormItem>
            <FormItem label="mail:" prop="mail">
              <Input v-model={this.formValidate.mail} />
            </FormItem>
          </Form>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    );
  },
};
