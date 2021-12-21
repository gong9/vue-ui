// table column

/**
 * 想清楚每一个table列需要做的事情
 * 1. 简单渲染这一列的数据
 * 2. 如果是操作类的呢？
 *
 * 思路不对！！！
 * 需要什么？
 * 1. 需要父亲给的数据
 */
export default {
  inject: ["table"],
  props: {
    prop: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  render: function (h) {
    return <div></div>;
  },
};
