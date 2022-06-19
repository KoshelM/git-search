<template>
  <div class="search-layout" v-if="!showError">
    <div class="search">
      <input @keydown.enter="getItems" type="text" v-model="searchStr">
      <button @click="getItems">Search</button>
    </div>
    <div class="search-results" v-if="!!searchStr.length">
      <UserListItem v-for="user in users" :user="user" :key="user.id" />
      <SearchPagination :props="{ page: pageNum, perPage: itemsPerPage, records: total }"
        @pageChanged="onPageChanged" />

    </div>
  </div>

  <SearchError v-else />
  <SearchLoading v-show="isLoading" />
</template>

<script lang="ts">
import { UsersApi } from '@/entities/users'
import { defineComponent } from 'vue'
import UserListItem from './UserListItem.vue'
import SearchPagination from './SearchPagination.vue'
import { UserModel } from '@/entities/users/lib/models/UserSearchResultModel'
import SearchError from './SearchError.vue'
import SearchLoading from './SearchLoading.vue'

export default defineComponent({
  data () {
    return {
      users: [] as UserModel[],
      total: 0,
      pageNum: 1,
      itemsPerPage: 10,
      showError: false,
      isLoading: false,
      searchStr: ''
    }
  },
  components: {
    UserListItem,
    SearchPagination,
    SearchError,
    SearchLoading
  },
  methods: {
    async onPageChanged (pageNum: number) {
      this.pageNum = pageNum
      await this.getItems()
    },
    async getItems () {
      if (!this.searchStr.length) {
        return
      }
      try {
        this.isLoading = true
        const { data } = await UsersApi.search({ q: this.searchStr, per_page: this.itemsPerPage, page: this.pageNum })
        const promises = data.items.map(item => UsersApi.get(item.login))
        this.users = (await Promise.all(promises)).map(u => u.data)
        this.total = data.total_count
      } catch (e) {
        this.showError = true
      } finally {
        this.isLoading = false
      }
    }
  },
  watch: {
    searchStr () {
      if (!this.searchStr.length) {
        this.users = []
        this.total = 0
        this.pageNum = 1
      }
    }
  }

})
</script>
<style scoped>
.search {
  justify-content: center;
  display: flex;
}

.search input {
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  width: 50%;
  margin-right: 10px;

}
</style>
