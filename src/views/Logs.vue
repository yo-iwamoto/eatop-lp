<template>
  <div class="logs-wrapper">
    <transition name="fade" mode="out-in" appear>
      <div>
        <div class="logs-guide">
          <h1>EATOP活動マップ</h1>
          <p>これまでEATOPが行ってきた活動のうちいくつかを紹介しています
            <br>クリックすると、詳しい情報が見られます
          </p>
        </div>
        <div class="map">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <div
          v-for="(prop, key) in pinProps"
          id="show-modal"
          @click="openModal"
          v-bind="{ key: key, style: coordinate(prop['position'])}"
          >
            <Pin
            v-bind="{ imgAlt: prop['title'], name: prop['name'], key: key}"
            @pin-click="postId = $event"
            />
          </div>
          <Post v-if="showModal" @close="showModal = false">
            <template v-slot:title>
              <h3 class="post-title">{{ postObjects[postId].postTitle }}</h3>
            </template>
            <template v-slot:contents>
              <img :src="postObjects[postId].postImg" class="post-img">
              <div class="icon-bar">
                <font-awesome-icon v-if="heartActive" class="fa-icon heart" :icon="['far', 'heart']" @click="heartActive = !heartActive"></font-awesome-icon>
                <font-awesome-icon v-else class="fa-icon heart heart-active" :icon="['fas', 'heart']" @click="heartActive = !heartActive"></font-awesome-icon>
                <font-awesome-icon class="fa-icon" :icon="['far', 'comment']"></font-awesome-icon>
                <font-awesome-icon class="fa-icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
              </div>
              <p class="post-text"><span class="bold">eatop</span>{{ postObjects[postId].postText }}</p>
            </template>
          </Post>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Pin from '@/components/Pin'
import Post from '@/components/Post'
import Vue from 'vue'

Vue.component('modal', {
  template: '#modal-template'
})

export default {
  name: 'logs',
  data () {
    return {
      postId: 'gurugura',
      showModal: false,
      heartActive: false,
      pinProps: [
        {
          position: [30, 35],
          title: '糸島グルメグランプリ',
          name: 'gurugura'
        },
        {
          position: [39, 57],
          title: '前原町の居酒屋Hihoの運営',
          name: 'hiho'
        },
        {
          position: [8, 25],
          title: '伊万里田植え体験',
          name: 'imari'
        },
        {
          position: [50, 24],
          title: '九大祭出店  いーとっぷカレー',
          name: 'kyudaisai'
        },
        {
          position: [86, 70],
          title: 'ピエトロ共同商品開発',
          name: 'pietro'
        },
        {
          position: [42, 60],
          title: 'Q-SHOCK  中学生 & 留学生と英語でランチ',
          name: 'qshock'
        },
        {
          position: [75, 65],
          title: 'サバイバル飯キャンプ',
          name: 'sabameshi'
        },
        {
          position: [68, 47],
          title: 'バレンタインお菓子づくり in さいとぴあ',
          name: 'saito'
        },
        {
          position: [66, 43],
          title: '西都連祭出店  いーとっぷカレー',
          name: 'saitorensai'
        },
        {
          position: [53, 18],
          title: 'またいちの塩で豆腐作り',
          name: 'tofu'
        },
        {
          position: [60, 30],
          title: '留学生の剣道 & 和食体験',
          name: 'kendo'
        }
      ],
      postObjects: {
        gurugura: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/gurugura.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        hiho: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/hiho.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        imari: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/imari.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        kyudaisai: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/kyudaisai.jpg`),
          postText: '九大祭に出店予定だったいーとっぷカレーですが、台風により出店叶わず…。翌日の夜、マルベリーハウスで企画された後夜祭にて、出店しました！'
        },
        pietro: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/pietro.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        qshock: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/qshock.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        sabameshi: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/sabameshi.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        saito: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/saito.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        saitorensai: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/saitorensai.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        tofu: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/tofu.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        kendo: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/kendo.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        }
      }
    }
  },
  components: {
    Pin,
    Post
  },
  methods: {
    openModal (event) {
      this.showModal = true
      this.heartActive = true
      this.postObjects[this.postId].postTitle = event.target.alt
    },
    coordinate (list) {
      return {
        '--x': list[0] + '%',
        '--y': list[1] + '%'
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/styles.sass';

.logs-guide
  padding: 40px 0

  h1
    margin-bottom: 10px
    &::before,
    &::after
      content: '～'
      font-size: 25px

  p
    color: $gray

.map
  width: 100%
  background: url(../assets/images/logs/map.png)
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  position: relative

  &::before
    display: block
    content: ''
    padding-top: 50%

#show-modal
  display: inline-block
  cursor: pointer
  position: absolute
  top: var(--y)
  left: var(--x)

.post

  &-title
    font-size: 1.3em

  &-img
    height: 300px

  &-text
    text-align: left

    .bold
      font-weight: bold
      margin-right: 15px

.icon-bar
  text-align: left
  border-bottom: 2px solid $gray

@media (min-width: $breakpoint-lg)
  .map
    width: 80%
    margin: 0 auto
</style>
