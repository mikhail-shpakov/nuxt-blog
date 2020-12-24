<template lang="pug">
nuxt-link.pc(:to="pageUrl")
  img.pc__img(
    :src="getDynamicFile(post.img)"
    :alt="`post-image-${post.id}`"
  )

  p.pc__title(class="body1 medium") {{ post.title }}
  p.pc__subtitle(class="body3 regular") {{ post.desc }}
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '~/content/Post'

export default Vue.extend({
  name: 'PostCard',

  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },

  computed: {
    pageUrl(): string {
      return (this as any).localePath(`/post/${this.post.id}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.pc {
  color: $text-primary;
  border: $line-default;
  border-radius: $border-radius-primary;
  padding: 24px;
  display: block;

  @media (max-width: $mobile) {
    &:not(:nth-last-child(1)) {
      margin-bottom: 16px;
    }
  }

  @media (min-width: $tablet) {
    padding: 32px;
  }

  &:hover {
    background-color: $background-color;
  }

  &__img {
    max-width: 100%;
    display: block;
  }

  &__title {
    margin: 16px 0 12px;
  }

  &__subtitle {
    color: $text-secondary;

    @media (min-width: $tablet) {
      margin-top: 16px;
    }
  }
}
</style>
