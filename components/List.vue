<template>
  <div class="list__wrapper">
    <ul>
      <li class="list__item">
        <div class="list__item__photo"></div>
        <div class="list__item__detail">
          <div class="title"></div>
          <div class="address"></div>
          <div class="name"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {

    console.log(store)
    let targetUrl = 'https://datacenter.taichung.gov.tw/swagger/OpenData/98f036d6-197f-4bcc-a0c9-e4363ac3cdd3'
    return fetch(targetUrl)
      .then(res => { store.commit('SET_MEMBER_LIST', res.data)})
  },
  created () {
    this.$store.commit('SET_MEMBER_LIST')
  },
}
</script>

<style scoped>
  .list__wrapper {
    margin-top: 20px;
    width: 500px;
    height: 200px;
    border-radius: 5px;
  }

  .list__item {
    list-style: none;
  }
</style>
