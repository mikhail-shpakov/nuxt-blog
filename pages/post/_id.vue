<template lang="pug">
.page
  link-to-home

  section-header(
    :title="currentPost.title"
  )

  post-full(
    :post="currentPost"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'
import posts from '~/content/posts'

export default Vue.extend({
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  computed: {
    currentId(): number {
      return Number(this.$route.params.id)
    },
    currentPost(): Post | undefined {
      return posts.find(({ id }) => id === this.currentId)
    },
  },
})
</script>
