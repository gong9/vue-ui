let uuid = 0;

/**
 * 保证message notice的唯一，方面delete
 * @returns messageNoticeName
 */
const getNoticeName = () => {
  return `_message${++uuid}`;
};

export default {
  data: function () {
    return {
      notice: [],
    };
  },
  methods: {
    add(option) {
      const currenNoticeName = getNoticeName();
      const currenNotice = {
        name: currenNoticeName,
        ...option,
      };
      this.notice.push(currenNotice);
      setTimeout(() => {
        this.delete(currenNoticeName);
      }, option.duration || 1000);
    },
    delete(name) {
      for (let i = 0; i < this.notice.length; i++) {
        if (this.notice[i].name === name) {
          this.notice.splice(i, 1);
          break;
        }
      }
    },
  },
  render: function (h) {
    return (
      <div>
        {this.notice.length > 0 &&
          this.notice.map((notice) => <div>{notice.content}</div>)}
      </div>
    );
  },
};
