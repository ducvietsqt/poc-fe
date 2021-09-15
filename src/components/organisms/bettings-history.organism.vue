<template>
  <div class="w-full px-20 py-10 history">
    <h1 class="text-gold text-4xl">HISTORY</h1>
    <a-table class="text-white" :columns="columns" :data-source="bettings">
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
.history {
  box-shadow: 0 0 0 4px var(--global-gold-color), 0 0 0 5px #837a69;
  background: linear-gradient(to bottom, #252525 0%, #585858 100%);
  .ant-table-thead > tr > th {
    @apply text-gold;
    background: linear-gradient(to bottom, #252525 0%, #585858 100%);
    font-weight: 700;
  }
  .ant-table-placeholder {
    border-bottom: none;
    background: linear-gradient(to bottom, #252525 0%, #585858 100%);
    .ant-empty-description {
      color: white;
    }
  }
  .ant-table-thead
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-thead
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td {
    background: transparent;
  }
  .ant-pagination-item-active {
    @apply border-gold;
  }
  .ant-pagination-item-active a {
    @apply text-gold;
  }
  .ant-pagination-disabled a, .ant-pagination-disabled:hover a, .ant-pagination-disabled:focus a, .ant-pagination-disabled .ant-pagination-item-link, .ant-pagination-disabled:hover .ant-pagination-item-link, .ant-pagination-disabled:focus .ant-pagination-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
