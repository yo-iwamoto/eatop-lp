<template>
  <div id="logs">
    <transition name="fade" mode="out-in">
      <div>
        <div id="title">
          <h1>EATOP活動マップ</h1>
          <p>これまでEATOPが行ってきた活動のうちいくつかを紹介しています
          <br>クリックすると、詳しい情報が見られます</p>
        </div>
        <div id="map">
          <div v-for="(prop, key) in pinProps" :key="key">
            <div
            :key="key"
            id="show-modal"
            @click="openModal">
              <Pin
              v-bind="{pinImg: prop['pinImg'], position: prop['position'], imgAlt: prop['imgAlt'], name: prop['name'], key: key}"
              @pin-click="postId"
              />
            </div>
          </div>
          <Post v-if="showModal" @close="showModal = false">
            <template v-slot:title>
              <h3 id="post-title">{{ postObject[postId].postTitle }}</h3>
            </template>
            <template v-slot:contents>
              <img :src="postObject[postId].postImg" id="post-img">
              <div class="icon-bar">
                <font-awesome-icon v-if="heartActive" class="fa-icon heart" :icon="['far', 'heart']" @click="heartActive = !heartActive"></font-awesome-icon>
                <font-awesome-icon v-else class="fa-icon heart heart-active" :icon="['fas', 'heart']" @click="heartActive = !heartActive"></font-awesome-icon>
                <font-awesome-icon class="fa-icon" :icon="['far', 'comment']"></font-awesome-icon>
                <font-awesome-icon class="fa-icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
              </div>
              <!-- eslint-disable-next-line no-irregular-whitespace -->
              <p><span class="bold">eatop</span>　{{ postObject[postId].postText }}</p>
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
      pinProps: [
        {
          pinImg: require('../assets/images/logs/pins/gurugura.png'),
          position: [30, 35],
          imgAlt: '糸島グルメグランプリ',
          name: 'gurugura'
        },
        {
          pinImg: require('../assets/images/logs/pins/hiho.png'),
          position: [39, 57],
          imgAlt: '前原町の居酒屋Hihoの運営',
          name: 'hiho'
        },
        {
          pinImg: require('../assets/images/logs/pins/imari.png'),
          position: [8, 25],
          imgAlt: '伊万里田植え体験',
          name: 'imari'
        },
        {
          pinImg: require('../assets/images/logs/pins/kyudaisai.png'),
          position: [50, 24],
          imgAlt: '九大祭出店  いーとっぷカレー',
          name: 'kyudaisai'
        },
        {
          pinImg: require('../assets/images/logs/pins/pietro.png'),
          position: [86, 70],
          imgAlt: 'ピエトロ共同商品開発',
          name: 'pietro'
        },
        {
          pinImg: require('../assets/images/logs/pins/qshock.png'),
          position: [42, 60],
          imgAlt: 'Q-SHOCK  中学生 & 留学生と英語でランチ',
          name: 'qshock'
        },
        {
          pinImg: require('../assets/images/logs/pins/sabameshi.png'),
          position: [75, 65],
          imgAlt: 'サバイバル飯キャンプ',
          name: 'sabameshi'
        },
        {
          pinImg: require('../assets/images/logs/pins/saito.png'),
          position: [68, 47],
          imgAlt: 'バレンタインお菓子づくり in さいとぴあ',
          name: 'saito'
        },
        {
          pinImg: require('../assets/images/logs/pins/saitorensai.png'),
          modalImg: require('../assets/images/logs/events/saitorensai.jpg'),
          position: [66, 43],
          imgAlt: '西都連祭出店  いーとっぷカレー',
          name: 'saitorensai'
        },
        {
          pinImg: require('../assets/images/logs/pins/tofu.png'),
          position: [53, 18],
          imgAlt: 'またいちの塩で豆腐作り',
          name: 'tofu'
        },
        {
          pinImg: require('../assets/images/logs/pins/kendo.png'),
          position: [60, 30],
          imgAlt: '留学生の剣道 & 和食体験',
          name: 'kendo'
        }
      ],
      postId: 'gurugura',
      showModal: false,
      postObject: {
        gurugura: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/gurugura.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        hiho: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/hiho.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        imari: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/imari.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        kyudaisai: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/kyudaisai.jpg`),
          postText: '九大祭に出店予定だったいーとっぷカレーですが、台風により出店叶わず…。翌日の夜、マルベリーハウスで企画された後夜祭にて、出店しました！'
        },
        pietro: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/pietro.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        qshock: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/qshock.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        sabameshi: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/sabameshi.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        saito: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/saito.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        saitorensai: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/saitorensai.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        tofu: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/tofu.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        },
        kendo: {
          postTitle: '',
          postImg: require(`../assets/images/logs/events/kendo.jpg`),
          postText: 'ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります'
        }
      },
      heartActive: false
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
      this.postObject[this.postId].postTitle = event.target.alt
    }
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-to {
  transition: opacity .3s;
}

* {
  font-family: 'Nasu';
  font-weight: normal;
  margin: 0;
}

#logs {
  height: 900px;
}
@media (min-width: 840px) {
  #logs {
    height: 1000px;
  }
}

#title {
  text-align: center;
  padding: 40px 0;
  margin: 0;
}

#title > h1 {
  margin-bottom: 10px;
}

#title > p {
  color: '#c1e396',rgba(0,0,0,0.8);
}

#title > h1::before,
#title > h1::after {
  content: '～';
  font-size: 25px;
}

button {
  cursor: pointer;
}

#show-modal {
  cursor: pointer;
}

#map {
  box-sizing: border-box;
  width: 100%;
  height: 800px;
  background-image: url(../assets/images/logs/map.png);
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
  position: relative;
}

#post-img {
  width: 100%;
  box-shadow: inset 0 0 5px 5px #fff5f1;
}

.fa-icon {
  font-size: 25px;
  margin-right: 10px;
  transition: all .15s;
}

.heart-active {
  color: rgb(226, 66, 93);
}

.heart:hover {
  cursor: pointer;
}

.heart:active {
  padding-bottom: 13px;
}

.icon-bar {
  border-bottom: 2px solid black;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.bold {
  font-weight: bold;
}

@media (min-width: 1800px) {
  #map {
    display: none;
  }
}
</style>
