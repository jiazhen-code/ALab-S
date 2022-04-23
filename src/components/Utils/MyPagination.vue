<template>
  <a-pagination
      v-model="current"
      :page-size-options="pageSizeOptions"
      :total="total"
      :page-size="pageSize">

<!--      @showSizeChange="onShowSizeChange"-->

<!--    <template slot="buildOptionText" slot-scope="props">-->
<!--      <span v-if="props.value !== '50'">{{ props.value }}条/页</span>-->
<!--      <span v-if="props.value === '50'">全部</span>-->
<!--    </template>-->
  </a-pagination>
</template>
<script>
export default {
  data() {
    return {
      // pageSizeOptions: ['4'],
      current: 1,
      pageSize: 4,
      total: 4,
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
    },
  },
};
</script>