<template>
  <div class="top-wrapper">
    <transition name="fade" appear>
      <div class="mv-container">
        <div class="mv">
          <img src="../assets/images/top/icon.png" alt="EATOP" class="mv-icon">
          <h1 class="mv-copy">食べるという、<br>コミュニケーション</h1>
          <h2 class="mv-text">「まち」の食育プロジェクト<br>EATOP</h2>
        </div>
      </div>
    </transition>
    <div class="sections-wrapper">
      <section class="top-about">
        <h2 class="top-about-title">共に作り、共に食べる</h2>
        <div class="top-about-text">
          <p>EATOP（いーとっぷ）は、大学生、留学生、地域の方々を対象として、
            <br>「社会性」「芸術性」「国際性」を重視した食育活動を行っています。
            <br>ここでいう食育は、単なる食事ではありません。
            <br>「共に作り、共に食べる」という形こそ、本来の食育の形です。
          </p>
        </div>
        <Button @button-click="toAbout" id="cursor-about" />
      </section>
      <section class="top-logs">
        <div class="map-container">
          <div class="map-contents">
            <Button @button-click="toLogs" id="cursor-logs" />
            <h2>EATOP活動マップ</h2>
            <p>これまでの活動をマップにまとめています</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
// import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'top',
  methods: {
    toAbout () {
      this.$router.push('about')
    },
    toEvent () {
      this.$router.push('event')
    },
    toLogs () {
      this.$router.push('logs')
    }
  },
  components: {
    Button
  }
}

</script>

<style scoped lang="sass">
@import '../assets/sass/styles.sass';

.top-wrapper
  text-align: center

.mv-container
  height: 500px
  background: url(../assets/images/top/mv.png)
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  box-shadow: inset 0 0 5px 5px $beige
  .mv
    background: linear-gradient(90deg, rgba(255, 245, 242, 0) 0%, rgba(255, 245, 242, 0.5) 15%, rgba(255, 245, 242, 0.7) 30%, rgba(255, 245, 242, 0.7) 70%, rgba(255, 245, 242, 0.5) 75%, rgba(255, 245, 242, 0) 100%)
    height: 100%
    width: 85%
    min-width: 300px
    max-width: 800px
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    &-icon
      height: 130px
    &-copy
      font-family: '851MkPOP'
      font-size: 60px
      text-shadow: 1px 1px $beige
    &-text
      color: $gray

.sections-wrapper
  width: 90vw
  margin: 0 auto

.top-about
  padding: 60px 0
  &-title
    font-size: 30px
    margin-bottom: 30px
    letter-spacing: .2em
    &::before
      content: '「'
    &::after
      content: '」'
  &-text
    color: $gray
    font-size: 20px
    line-height: 40px
    padding: 20px
    
.map-container
  height: 60vw
  width: 90vw
  margin: 0 auto
  background: url(../assets/images/top/active_map.png)
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  border: 1px solid $gray
  .map-contents
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    height: 200px
    margin: 230px auto 0
    h2
      font-size: 24px
    p
      font-size: 18px

#cursor
  &-about
    cursor: url(../assets/images/top/cursor/about_meat.png)
  &-event
    cursor: url(../assets/images/top/cursor/event_vegit.png)
  &-logs
    cursor: url(../assets/images/top/cursor/logs_fish.png)

@media (max-width: $breakpoint-sm)
  .mv
    &-icon
      height: 180px
    &-copy
      height: 180px

@media (min-width: $breakpoint-lg)
  .mv
    &-container
      height: 650px
  .map-container
    height: 40vw
    width: 60vw
</style>
