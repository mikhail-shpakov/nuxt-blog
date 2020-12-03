<template lang="pug">
button(@click="changeColorMode")
  img(
    alt="theme-icon"
    :src="getDynamicFile(icon)"
  )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SwitcherColorMode',

  computed: {
    icon() {
      return (this as any).$colorMode.value === 'light'
        ? 'assets/icons/sun.svg'
        : 'assets/icons/moon.svg'
    },
  },

  methods: {
    changeColorMode() {
      ;(this as any).$colorMode.preference =
        (this as any).$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  transition: $transition-default;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 12px 20px;
  cursor: pointer;
  background-color: $background-color;

  &:hover,
  &:focus,
  &:active {
    filter: brightness(90%);
  }
}
</style>
