/* eslint-disable no-unused-vars */

import { Form, FormItem } from "./components";
export default {
  components: { Form, FormItem },

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
  render: function (h) {
    return (
      <div>
        <Form data={this.formValidate} rules={this.ruleValidate}>
          <FormItem label="name" prop="delivery">
            <input type="text" />
          </FormItem>
        </Form>
      </div>
    );
  },
};
