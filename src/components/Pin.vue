<template>
    <img v-bind="{ src: pinSrc, alt: imgAlt }" @click="emit">
</template>

<script>
export default {
  props: {
    pinImg: {},
    imgAlt: {},
    name: {}
  },
  computed: {
    pinSrc () {
      return require(`../assets/images/logs/pins/${this.name}.png`)
    }
  },
  methods: {
    emit () {
      this.$emit('pin-click', this.name)
    }
  }
}
</script>

<style scoped lang="sass">
img
  height: 50px
  transition: transform .2s
  transform-origin: bottom center

  &:hover
    transform: scale(2)
    transform-origin: bottom center
</style>
