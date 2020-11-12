<template lang="pug">
  section.section
    .content
      .ep__container
        section-header(
          :title="errorText.title"
          :subtitle="errorText.subtitle"
        )

        nuxt-link.ep__link(
          class="primary"
          to="/"
        ) Home page
</template>

<script lang="ts">
import Vue from 'vue'

type Error = {
  statusCode: number
  message: string
}

type ErrorText = {
  title: string
  subtitle: string
}

type ErrorTexts = {
  [key: number]: ErrorText
  default: ErrorText
}

export default Vue.extend({
  name: 'ErrorPage',

  props: {
    error: {
      type: Object as () => Error,
      required: true,
    },
  },

  data: () => ({
    texts: {
      404: {
        title: '404. Page not found',
        subtitle: 'Something went wrong, no such address exists',
      },
      default: {
        title: 'Unknown error',
        subtitle:
          'Something went wrong, but we`ll try to figure out what`s wrong',
      },
    } as ErrorTexts,
  }),

  computed: {
    errorText(): ErrorText {
      const { statusCode } = this.error
      return this.texts[statusCode] || this.texts.default
    },
  },
})
</script>

<style lang="scss" scoped>
.ep {
  &__container {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    justify-content: center;
  }

  &__link {
    margin-top: 24px;
  }
}
</style>
