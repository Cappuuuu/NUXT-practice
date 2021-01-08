<template>
  <div class="list__wrapper">
    <ul>
      <li class="list__item" v-for="(item, index) of memberList" :key="index">
        <div class="list__item__photo">
          <img :src="item.photoUrl" alt="">
        </div>
        <div class="list__item__detail">
          <div class="title">{{ item.title }}</div>
          <div class="phone">{{ item.phone }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="price">{{ `$${item.price}k-${item.price + 50}K` }}</div>
        </div>
        <a class="view__more" href="">View more</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name:'list',
  computed: {
    ...mapState([
      'memberList'
    ]),
  },
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
