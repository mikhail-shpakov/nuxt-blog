<template lang="pug">
.page
  section-header(
    title="Nuxt blog"
    subtitle="The best blog you can find on the global internet"
  )

  post-list
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>
