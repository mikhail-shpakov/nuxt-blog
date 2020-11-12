<template lang="pug">
section.section
  .content
    h1.sh__title(
      class="h1"
    ) {{ title }}

    p.sh__subtitle(
      v-if="subtitle"
      class="body2 regular"
    ) {{ subtitle }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SectionHeader',

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.sh {
  &__title {
    margin: 0;
  }

  &__subtitle {
    color: $text-secondary;
    margin-top: 16px;
  }
}
</style>
