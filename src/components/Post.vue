<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="modal-default-button" @click="$emit('close')">×</button>
            <slot name="title"></slot>
          </div>
          <div class="modal-body">
            <slot name="contents"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

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

.modal-body > img {
  height: 50px;
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
</style>
