<template lang="pug">
section.section
  .content
    .footer
      a.secondary(
        href="mailto:example@mail.com?subject=Nuxt blog"
      ) {{ $t('footer.feedback') }}
      p.footer__copyright(
        class="body3 regular"
      ) {{ copyright }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DbFooter',

  computed: {
    copyright(): string {
      const year = new Date().getUTCFullYear()
      return `© ${year} · ${(this as any).$t('footer.copyright')}`
    },
  },
})
</script>

<style lang="scss" scoped>
.footer {
  margin: $section-indent-mobile 0;

  @media (min-width: $tablet) {
    margin: $section-indent-desktop 0;
  }

  &__copyright {
    margin-top: 16px;
    color: $text-secondary;
  }
}
</style>
