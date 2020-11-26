<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="close">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <button class="modal-default-button" @click="$emit('close')">×</button>
            <slot name="title"></slot>
          </div>
          <div class="modal-body" :class="{ justify: form }">
            <div v-if="!form">
              <slot name="contents"></slot>
            </div>
            <div v-if="form">
              <form @submit.prevent="onSubmit">
                <label for="first-name">姓：</label>
                <input id="first-name" name="firstName" type="text"><br>
                <label for="last-name">名：</label>
                <input id="last-name" name="lastName" type="text"><br>
                <label for="mail">メールアドレス：</label>
                <input id="mail" name="mail" type="text"><br>
                <label for="type">お問い合わせの種類</label>
                <select id="type" name="type">
                  <option v-for="type in contactTypes" :key="type">{{ type }}</option>
                </select><br>
                <label for="detail">お問い合わせ内容</label>
                <textarea id="detail" name="detail" cols="30" rows="10"></textarea>
                <input type="submit" value="送信" class="submit">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  props: {
    form: {
      default: false
    }
  },
  data () {
    return {
      contactTypes: [
        'イベント開催について',
        'その他EATOPについて'
      ]
    }
  },
  methods: {
    // close modal by clicking outside of modal only if it is not a form
    close () {
      if (this.form === false) {
        this.$emit('close')
      }
    },
    onSubmit: function(e) {
      emailjs.sendForm(
        'gmail',
        'template_ztj3znh',
        e.target,
        'user_1XQbtA2vNp8D6V1yCQQM6'
      ).then(
        result => {
          console.log('SUCCESS!', result.status, result.text)
        },
        error => {
          console.log('FAILED...', error)
        }
      )
    }
  }
}
</script>

<style scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.justify {
  text-align: justify
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all .3s ease;
  border-radius: 25px;
}

@media (min-width: 1000px) {
  .modal-container {
    width: 700px;
  }
}

.modal-header {
  background: #b5d2ff;
  padding: 10px 20px;
  border-radius: 25px 25px 0 0;
}

.modal-body {
  margin: 20px 0;
  padding: 10px 20px;
}

.modal-default-button {
  cursor: pointer;
  float: right;
  font-size: 20px;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: 1px solid black;
  opacity: 1;
  transition: opacity .1s;
}

.modal-default-button:hover {
  opacity: 0.8;
}

.submit {
  height: 50px;
  width: 100px;
}
</style>
