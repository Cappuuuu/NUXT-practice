<template>
  <div class="list__wrapper">
    <ul>
      <li class="list__item" v-for="(item,index) in detailData" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    }
  },
  props: ['detailData'],
}
</script>

<style scoped>
  .list__wrapper {
    margin-top: 20px;
    width: 500px;
    height: 200px;
    border: 5px solid #5081ad;
    border-radius: 5px;
  }

  .list__item {
    list-style: none;
  }
</style>
