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
button
    background: #ffccccb9
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
    margin: 20px 0
    width: 250px
    height: 50px
    border: none
    border-radius: 25px
    font-size: 20px
    color: #ffffff
    transition: background .2s, transform .05s, box-shadow .05s
    &:hover
        background: #ffc5c5
    &:active
        background: #ffc5c5
        transform: translate(4px, 4px)
        box-shadow: 0 3px 3px
</style>