<template>
  <div id="app">
    <div class="header-back">
      <div class="header">
        <img src="./assets/images/top/eatop.png" alt="EATOP" class="header-logo" @click="toTop">
        <nav>
          <router-link to="/about" class="header-link" id="cursor-about">EATOPとは</router-link>
          <router-link to="/event" class="header-link" id="cursor-event">イベント情報</router-link>
          <router-link to="/logs" class="header-link" id="cursor-logs">活動実績</router-link>
          <a href="https://lin.ee/1QVJQLx"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" id="line"></a>
        </nav>
      </div>
    </div>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view/>
    </transition>
    <div class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <img class="footer-icon" src="@/assets/images/top/icon.png" alt="EATOP">
        </div>
        <div class="footer-right">
          <div class="footer-right-top">
            <img src="./assets/images/top/eatop.png" alt="EATOP" class="footer-logo" @click="toTop">
            <nav>
              <a href="https://twitter.com/Eatop_musha"><font-awesome-icon :icon="['fab', 'twitter']" class="sns-icon" /></a>
              <a href="https://www.facebook.com/mushamusha.eatop"><font-awesome-icon :icon="['fab', 'facebook']" class="sns-icon" /></a>
              <a href="https://www.instagram.com/mushamushaeatop/"><font-awesome-icon :icon="['fab', 'instagram']" class="sns-icon" /></a>
            </nav>
          </div>
          <div class="footer-right-bottom">
            <nav>
              <router-link to="" class="footer-link">コロナ対策について</router-link>
              <router-link to="" class="footer-link">お問い合わせ</router-link>
              <router-link to="" class="footer-link">ENGLISH</router-link>
            </nav>
          </div>
        </div>
      </div>
      <p class="copyright">Copyright © Eatop All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter () {
      this.$root.$emit('triggerScroll')
    },
    toTop () {
      if (this.$route.path === '/') {
        this.$router.go({ name: 'top' })
      } else {
        this.$router.push({ name: 'top' })
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import './assets/sass/styles.sass';

#app
  background: url(./assets/images/top/background.jpg)
  background-size: contain

.header-back
  height: 78px

  .header
    width: 100%
    height: 78px
    position: fixed
    z-index: 900
    padding: 0 20px
    display: flex
    justify-content: space-between
    flex-wrap: nowrap
    background: linear-gradient(rgba(255,245,241,0.8) 0%, rgba(255,245,241,0.8) 95%, rgba(255,245,241,0) 100%)
    
    &-logo
      cursor: pointer
      padding: 20px 0

    &-link
      box-sizing: content-box
      display: inline-block
      font-size: 18px
      text-decoration: none
      margin-right: 1em
      padding: 5px
      color: $gray
      border-bottom: 2px solid transparent
      transition: border-color .2s, text-shadow .2s

      &:hover
        text-shadow: .1px .1px 0 $gray
      
      &#cursor

        &-about:hover
          border-color: $brown

        &-event:hover
          border-color: $lightgreen

        &-logs:hover
          border-color: $blue

    nav
      display: flex
      justify-content: space-between
      align-items: center
      flex-wrap: nowrap
      
      #line
        height: 40px
        transform: translateY(3px)
        cursor: url(./assets/app/line_brown.png), default

#cursor

  &-about
    cursor: url(./assets/app/about_meat.png), default

  &-event
    cursor: url(./assets/app/event_vegit.png), default

  &-logs
    cursor: url(./assets/app/logs_fish.png), default

.footer
  
  &-container
    width: 90%
    max-width: 850px
    margin: 100px auto 0
    display: flex
    justify-content: space-between
    align-content: center
  
  &-icon
    height: 200px

  &-link
    font-size: 15px
    display: inline-block

  &-logo
    cursor: pointer

  &-right
    width: 70%
    max-width: 550px
    min-width: 90px

    &-top
      height: 100px
      padding: 0 20px 15px
      border-bottom: solid 1px $gray
      display: flex
      justify-content: space-between
      align-items: flex-end

      nav
        display: flex
        justify-content: space-between
        align-items: center

        .sns-icon
          color: #333
          font-size: 2em
          margin-left: 3vw

    &-bottom
      margin-top: 20px

      .footer-link
        text-decoration: none
        color: $gray
        margin: 0 15px

        &:hover
          border-bottom: 1px solid black

@media (max-width: $breakpoint-sm)
  body
    text-align: center

@media (min-width: $breakpoint-lg)
  .footer-container
    justify-content: space-around
</style>
