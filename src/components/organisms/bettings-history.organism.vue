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
      :pagination="pagination"
      :rowKey="(record) => record.bet_spin"
    >
      <span slot="content" slot-scope="text" class="text-white">{{
        text
      }}</span>
      <span
        slot="number"
        slot-scope="text"
        class="
          text-white
          w-6
          h-6
          border
          shadow-inner
          rounded-full
          flex
          justify-center
          items-center
        "
        :class="wrapperNumberClass(text)"
        >{{ text }}</span
      >
      <span slot="win" slot-scope="text" class="text-green font-light">{{
        text
      }}</span>
      <span slot="lost" slot-scope="text" class="text-red-500 font-light"
        >-{{ text }}</span
      >
      <span slot="layout" slot-scope="layout" class="text-white">{{
        layout.toString()
      }}</span>
      <a slot="tx" :href="`https://igniscan.io/tx/${tx}`" target="_blank" slot-scope="tx" class="text-white">
        {{tx | truncate(18)}}
      </a>
    </a-table>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { RED_NUMBERS, EXPLORER_URL } from "@/constants/roulette.constant";

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
  watch: {
    history() {
      if (this.history.total <= this.history.limit) {
        return (this.pagination = false);
      }
      this.pagination = {
        pageSize: this.history.limit,
        current: Math.ceil(this.history.offset / this.history.limit) + 1,
        total: this.history.total,
      };
    },
  },
  data() {
    return {
      RED_NUMBERS,
      EXPLORER_URL,
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
          scopedSlots: { customRender: "number" },
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
          scopedSlots: { customRender: "win" },
        },
        {
          title: "Lost",
          key: "bet_lost",
          dataIndex: "bet_lost",
          scopedSlots: { customRender: "lost" },
        },
        {
          title: "Bet Layout",
          key: "bet_layout",
          dataIndex: "bet_layout",
          scopedSlots: { customRender: "layout" },
        },
        {
          title: "Tx Hash",
          dataIndex: "bet_tx_hash",
          key: "bet_tx_hash",
          scopedSlots: { customRender: "tx" },
        }
      ],
      pagination: false,
    };
  },
  methods: {
    ...mapMutations({
      updateHistory: "user/UPDATE_USER_HISTORY",
    }),
    wrapperNumberClass(number) {
      if (RED_NUMBERS.indexOf(number) != -1) return "bg-red-700";
      return "bg-black";
    },
    handlePageChange(pagination) {
      console.log(`handlePageChange:>>pagination:>>`, pagination);
      this.loading = true;
      setTimeout(async () => {
        try {
          const results = await this.$http.get(
            `/users/${this.userId}/bettings`,
            {
              params: {
                offset: (pagination.current - 1) * this.history.limit,
                limit: this.history.limit
              },
            }
          );
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
  .ant-pagination-item {
    &.ant-pagination-item-active a {
      @apply text-gold;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-pagination-prev:focus .ant-pagination-item-link,
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    @apply border-gold;
  }
  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    @apply border-gold;
  }
  .ant-pagination-item {
    background-color: black;
  }
  .ant-pagination-item:focus a,
  .ant-pagination-item:hover a {
    @apply text-gold;
  }
  .ant-pagination-item a {
    color: #fff;
  }
}
</style>
