<template lang="pug">
section.section
  .content
    nuxt-link.lth__link(
      to="/"
      class="primary"
    )
      img.lth__link-icon(
        src="~/assets/icons/home.svg"
        alt="icon-home"
      )
      | Home
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LinkToHome',
})
</script>

<style lang="scss" scoped>
.lth__link {
  margin-bottom: 8px;
  display: inline-flex;
  align-items: flex-start;

  &-icon {
    margin-right: 12px;
  }
}
</style>
