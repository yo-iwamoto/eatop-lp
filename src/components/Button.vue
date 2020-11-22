<template>
  <button @click="emit">もっと詳しく</button>
</template>

<script>
export default {
  methods: {
    emit () {
      this.$emit('button-click')
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/styles.sass';

button
    background: $red
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    margin: 20px 0
    width: 250px
    height: 50px
    border: none
    border-radius: 25px
    opacity: .5
    font-size: 20px
    color: #ffffff
    transition: opacity .2s, transform .05s, box-shadow .05s
    &:hover
        opacity: 1
    &:active
        opacity: 1
        transform: translate(4px, 4px)
        box-shadow: 0 3px 3px
</style>