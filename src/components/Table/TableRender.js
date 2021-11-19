export default {
  functional: true,
  props: {
    colData: {
      type: Object,
    },
    col: {
      type: Number,
    },
    row: {
      type: Number,
    },
    render: {
      type: Function,
    },
  },
  render: function (h, ctx) {
    const params = {
      data: ctx.props.colData,
      col: ctx.props.col,
      row: ctx.props.row,
    };
    return ctx.props.render(h, params);
  },
};
