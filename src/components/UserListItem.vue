<template>
  <div class="user-list-item">
    <div class="user-list-item__avatar">
      <img :src="user.avatar_url" :alt="user.login" />
    </div>
    <div class="user-list-item__content">
      <div class="user-list-item__line text">
        <a v-if="user.name" :href="user.html_url">{{ user.name }}</a>
        <a class="text_muted" v-if="user.login" :href="user.html_url">{{ user.login }}</a>
      </div>
      <div class="user-list-item__line">
        <span>{{ user.bio }}</span>
      </div>
      <div class="user-list-item__line text">
        <span class="text_small" v-if="user.location">{{ user.location }}</span>
        <span class="text_small" v-if="user.email">{{ user.email }}</span>
      </div>
      <div class="user-list-item__line text">
        <span class="text_small" v-if="user.followers">{{`Folowers: ${user.followers}` }}</span>
        <span class="text_small" v-if="user.followers">{{`Public gists: ${user.public_gists}` }}</span>
        <span class="text_small" v-if="user.followers">{{`Public repos: ${user.public_repos}` }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  UserModel
} from '@/entities/users/lib/models/UserSearchResultModel'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserModel>,
      required: true
    }
  }

})
</script>
<style scoped lang="less" src="./UserListItem.less">
</style>
