import { Table } from "../../components";

export default {
  data: function () {
    return {
      columns: [
        {
          title: "id",
          key: "id",
        },
        {
          title: "name",
          key: "name",
        },
        {
          title: "age",
          key: "age",
        },
        {
          title: "sex",
          key: "sex",
        },
        {
          title: "操作",
          key: "options",
        },
      ],
      data: [
        {
          id: 1,
          name: "zhangsan",
          age: 18,
          sex: "男",
          render: function (h, params) {
            return (
              <button
                onClick={() => {
                  console.log(this);
                  this.$message(params.name);
                }}
              >
                按钮1
              </button>
            );
          },
        },
        {
          id: 2,
          name: "lisi",
          age: 18,
          sex: "男",
          render: function (h, params) {
            return <button>按钮2</button>;
          },
        },
        {
          id: 3,
          name: "wangwu",
          age: 20,
          sex: "男",
          render: function (h, params) {
            return <button>按钮3</button>;
          },
        },
      ],
    };
  },
  render: function (h) {
    return (
      <div>
        <Table columns={this.columns} data={this.data} />
      </div>
    );
  },
};
