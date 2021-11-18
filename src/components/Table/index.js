import "./index.css";

export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  render: function (h) {
    return (
      <div>
        <table>
          <thead>
            {this.columns.map((data) => {
              return <th>{data.title}</th>;
            })}
          </thead>
          <tbody>
            {this.data.map((data) => {
              return (
                <tr>
                  {this.columns.map((item) => {
                    return <td>{data[item.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  },
};
