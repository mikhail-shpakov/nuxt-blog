import Vue from 'vue'

export const methods = {
  getDynamicFile(name: string) {
    return require(`@/${name}`)
  },
}

Vue.mixin({
  methods,
})
