import CustomRender from "./TableRender";
import "./index.css";

export default {
  components: { CustomRender },
  props: {
    provide: function () {
      return {
        table: this,
      };
    },
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
            {this.data.map((data, rowIndex) => {
              return (
                <tr>
                  {this.columns.map((item, colIndex) => {
                    return (
                      <td>
                        {item.key === "options" ? (
                          <CustomRender
                            colData={this.data[rowIndex]}
                            col={colIndex}
                            row={rowIndex}
                            render={data.render}
                          />
                        ) : (
                          data[item.key]
                        )}
                      </td>
                    );
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

{
  /* <lowcode-table :data="data" :schame="json"> */
}
//
const json = [
  {
    label: "申诉ID",
    name: "申诉ID",
    value: (row) => {
      return (h) => {
        return <div>data</div>;
      };
    },
  },
  {
    name: "处置ID",
    label: "处置ID",
    value: (row) => {
      return (h) => {
        return <div>{row.data}</div>;
      };
    },
  },
];
