<template>
  <notifications :width="400">
    <template slot="body" slot-scope="props">
      <div
        class="
          mt-10
          mr-8
          py-5
          px-5
          flex
          justify-between
          border-solid border
          rounded-2xl
          shadow-lg
          border-gold
          bg-black
        "
      >
        <div class="flex">
          <AtomCheckCircleIcon
            v-if="props.item.type == 'success'"
            class="w-6 h-6 flex-none text-green-500"
          />
          <AtomCloseCircleIcon
            v-if="props.item.type == 'error'"
            class="w-6 h-6 flex-none text-red-500"
          />
          <div class="ml-4 font-thin">
            <a class="text-gray-50 text-base"> {{ props.item.title }} </a>
            <div class="text-gray-100 text-sm break-word" v-html="props.item.text"></div>
          </div>
        </div>
        <a @click="props.close" class="text-gray-50 text-sm cursor-pointer">
          <AtomCloseIcon />
        </a>
      </div>
    </template>
  </notifications>
</template>
<script>
import AtomCheckCircleIcon from "@/components/atoms/icons/check-circle.icon.atom";
import AtomCloseCircleIcon from "@/components/atoms/icons/close-circle.icon.atom";
import AtomCloseIcon from "@/components/atoms/icons/close.icon.atom";

export default {
  components: {
    AtomCheckCircleIcon,
    AtomCloseIcon,
    AtomCloseCircleIcon,
  },
};
</script>
<style lang="less">
</style>
