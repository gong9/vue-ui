import CustomRender from "./TableRender";
import "./index.css";

export default {
  components: { CustomRender },
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
