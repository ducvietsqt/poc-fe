<template>
  <div>
    <h1 class="text-white">HISTORY</h1>
    <a-table
      class="text-white"
      :columns="columns"
      :data-source="bettings"
    >
      <span slot="content" slot-scope="text" class="text-white">{{
        text
      }}</span>
    </a-table>
  </div>
</template>
<script>
export default {
  name: "organism-betting-area",
  props: {
    bettings: {
      type: Array,
    },
  },
  data() {
    return {
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
    };
  },
};
</script>
<style lang="less">
</style>
