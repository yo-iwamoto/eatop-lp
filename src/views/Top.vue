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
    <div class="info-wrapper">
      <div class="info-bar" @click="toInfo">
        <div class="info-bar-left">
          <font-awesome-icon icon="info-circle" class="info-icon"></font-awesome-icon>
          <p>新型コロナウイルス感染症対策について</p>
        </div>
        <div class="info-bar-right">
          <p>＞</p>
        </div>
      </div>
    </div>
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
    },
    toInfo () {
      this.$router.push('info')
    }
  },
  components: {
    Button
  }
}

</script>

<style scoped lang="sass">
@import '../assets/sass/styles.sass';

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
      height: 140px
      
    &-copy
      font-family: '851MkPOP'
      font-size: 60px
      text-shadow: 1px 1px $white
      
    &-text
      color: $gray

.info

  &-wrapper
    padding: 20px 0

  &-bar
    height: 40px
    width: 70%
    max-width: 700px
    margin: 0 auto
    padding: 0 15px
    background: $white
    border-radius: 6px
    cursor: pointer
    text-align: left
    color: $red
    display: flex
    justify-content: space-between
    align-items: center
    transform: scale(1.2)
    
    p
      display: inline-block
      padding-left: 15px

    &-right

      p
        font-weight: bold
        color: rgba(0,0,0,.3)

.sections-wrapper
  width: 90vw
  margin: 0 auto

.top-about
  padding: 20px 0 60px
  
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
    font-size: 18px
    line-height: 40px
    padding: 20px
    
.map-container
  height: 60vw
  width: 90vw
  max-height: 600px
  max-width: 1000px
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
    margin: 20vw auto 0

    h2
      font-size: 24px
      
    p
      font-size: 18px

#cursor

  &-about
    cursor: url(../assets/app/about_meat.png), default

  &-event
    cursor: url(../assets/app/event_vegit.png), default

  &-logs
    cursor: url(../assets/app/logs_fish.png), default

@media (max-width: $breakpoint-sm)
  .mv

    &-icon
      height: 180px
      
    &-copy
      height: 180px

@media (min-width: $breakpoint-lg)
  .mv

    &-container
      height: 600px

  .top-about-text
    font-size: 20px
      
  .map

    &-container
    height: 35vw
    width: 60vw

</style>
