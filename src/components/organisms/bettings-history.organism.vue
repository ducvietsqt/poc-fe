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
          dataIndex: "bet_spin",
          key: "bet_spin",
          scopedSlots: { customRender: "content" },
        },
        {
          title: "Number",
          dataIndex: "number_win",
          key: "number_win",
          scopedSlots: { customRender: "content" },
        },
        {
          title: "Bet Unit",
          dataIndex: "bet_unit",
          key: "bet_unit",
          scopedSlots: { customRender: "content" },
        },
        {
          title: "Win",
          key: "bet_win",
          dataIndex: "bet_win",
          scopedSlots: { customRender: "content" },
        },
        {
          title: "Lost",
          key: "bet_lost",
          dataIndex: "bet_lost",
          scopedSlots: { customRender: "content" },
        },
        {
          title: "Bet Layout",
          key: "bet_layout",
          dataIndex: "bet_layout",
          scopedSlots: { customRender: "content" },
        },
      ],
    };
  },
};
</script>
<style lang="less">
</style>
