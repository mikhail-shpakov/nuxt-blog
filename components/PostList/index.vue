<template lang="pug">
section.section
  .content
    p.pl__count(class="body2 regular")
      img.pl__count-icon(
        src="~/assets/icons/list.svg"
        alt="icon-list"
      )
      | {{ $t('home.postCount') + posts.length }}

    .pl__items
      post-card(
        v-for="post in posts"
        :key="post.id"
        :post="post"
      )
</template>

<script lang="ts">
import Vue from 'vue'
import posts from '~/content/posts'
import { Post } from '~/content/Post'

export default Vue.extend({
  name: 'PostList',

  computed: {
    posts(): Post[] {
      const { locale } = (this as any).$i18n

      return posts[locale as 'en' | 'ru']
    },
  },
})
</script>

<style lang="scss" scoped>
section.section {
  margin-top: 32px;

  @media (min-width: $tablet) {
    margin-top: 64px;
  }
}

.pl {
  &__count {
    display: inline-flex;
    align-items: center;
    margin-bottom: 12px;
    color: $text-secondary;

    @media (min-width: $tablet) {
      margin-bottom: 24px;
    }

    &-icon {
      margin-right: 12px;
    }
  }

  &__items {
    margin-top: 12px;

    @media (min-width: $tablet) {
      margin-top: 24px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;
    }
  }
}
</style>
