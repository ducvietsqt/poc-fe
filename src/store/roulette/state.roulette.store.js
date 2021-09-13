export default () => ({
  history: {
    columns: [
      {
        title: "Spin",
        dataIndex: "spin",
        key: "spin",
        scopedSlots: { customRender: "content" },
      },
      {
        title: "Number",
        dataIndex: "number",
        key: "number",
        scopedSlots: { customRender: "content" },
      },
      {
        title: "Bet Unit",
        dataIndex: "betUnit",
        key: "betUnit",
        scopedSlots: { customRender: "content" },
      },
      {
        title: "Win",
        key: "win",
        dataIndex: "win",
        scopedSlots: { customRender: "content" },
      },
      {
        title: "Lost",
        key: "lost",
        dataIndex: "lost",
        scopedSlots: { customRender: "content" },
      },
      {
        title: "Bet Layout",
        key: "betLayout",
        dataIndex: "betLayout",
        scopedSlots: { customRender: "content" },
      },
    ],
    data: [{
      key: "1",
      spin: 2,
      number: 36,
      betUnit: 9,
      win: 0,
      lost: -9,
      betLayout: "1,2,3,8,9,12,24,30,32",
    },
    {
      key: "2",
      spin: 1,
      number: 23,
      betUnit: 5,
      win: 1,
      lost: -4,
      betLayout: "2,5,6,8,23",
    },
    {
      key: "3",
      spin: 0,
      number: 3,
      betUnit: 6,
      win: 0,
      lost: -6,
      betLayout: "2,5,7,9,12,34",
    },]
  },
  spin: false,
  number: -1
});
