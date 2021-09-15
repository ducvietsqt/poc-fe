<template>
  <div class="w-full px-20 py-10 history">
    <h1 class="text-gold text-4xl" style="text-shadow: 2px 2px 4px #b14700">
      HISTORY
    </h1>
    <a-table
      class="text-white"
      :columns="columns"
      :loading="loading"
      :data-source="history.items"
      @change="handlePageChange"
      :pagination="{
        pageSize: history.limit,
        current: current,
        total: history.total,
      }"
    >
      <span slot="content" slot-scope="text" class="text-white">{{
        text
      }}</span>
    </a-table>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "organism-betting-area",
  props: {
    history: {
      type: Object,
    },
    userId: {
      type: [Number, String],
    },
  },
  data() {
    return {
      loading: this.userId ? false : true,
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
      current: Math.ceil(this.history.offset / this.history.limit) + 1,
    };
  },
  methods: {
    ...mapMutations({
      updateHistory: "user/UPDATE_USER_HISTORY",
    }),
    handlePageChange(pagination) {
      console.log(`handlePageChange:>>pagination:>>`, pagination);
      this.loading = true;
      setTimeout(async () => {
        try {
          const results = await this.$http.get(`/users/${this.userId}/bettings`);
          this.updateHistory(results.data);
        } catch (error) {
          console.log(`handlePageChange:>>`, error);
        } finally {
          this.loading = false;
        }
      }, 100);
    },
  },
};
</script>
<style lang="less">
.history {
  background-color: #202020;
  .ant-table-thead > tr > th {
    @apply text-gold;
    background-color: #202020;
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
    background-color: #202020;
  }
  .ant-pagination-item-active a {
    @apply text-gold;
  }
  .ant-pagination-disabled a,
  .ant-pagination-disabled:hover a,
  .ant-pagination-disabled:focus a,
  .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus .ant-pagination-item-link {
    display: flex;
    justify-content: center;
    @apply opacity-10;
    align-items: center;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    background-color: black;
    color: #fff;
  }
}
</style>
