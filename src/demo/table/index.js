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
      ],
      data: [
        {
          id: 1,
          name: "zhangsan",
          age: 18,
          sex: "男",
        },
        {
          id: 2,
          name: "lisi",
          age: 18,
          sex: "男",
        },
        {
          id: 3,
          name: "wangwu",
          age: 20,
          sex: "男",
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
