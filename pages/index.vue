<template lang="pug">
.page
  section-header(
    :title="$t('home.title')"
    :subtitle="$t('home.subtitle')"
  )

  app-options

  post-list
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>
