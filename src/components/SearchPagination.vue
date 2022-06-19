<template>
  <div class="pagination-wrapper">
    <Pagination :records="props.records" :per-page="props.perPage" v-model="page" @paginate="onPageChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Pagination from 'v-pagination-3'

export default defineComponent({
  components: { Pagination },
  props: {
    props: {
      type: Object as PropType<{
        page: number;
        perPage: number;
        records: number;
      }>,
      required: true
    }
  },
  data () {
    return {
      page: this.props.page
    }
  },
  methods: {
    onPageChange (pageNum: number) {
      this.$emit('pageChanged', pageNum)
    }
  }
})
</script>
<style>
.pagination {
  display: flex;
  list-style-type: none;
  justify-content: center;
}

.page-link {
  width: 34px;
  height: 34px;
  border-radius: 5px;
  margin-left: 5px;
  border: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.page-link.active {
  background-color: #0969da;
  color: #fff;
}
</style>
