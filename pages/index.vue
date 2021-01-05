<template>
  <div class="container">
    <List :detailData="detailData"/>
  </div>
</template>

<script>
export default {
  asyncData({ $axios }) {
    const targetUrl = 'https://datacenter.taichung.gov.tw/swagger/OpenData/98f036d6-197f-4bcc-a0c9-e4363ac3cdd3'
    return $axios.get(targetUrl)
      .then((res) => {
        return {
          detailData: res.data,
        }
      }).catch((err) => {
        console.log(err.message)
      })
  },
  data () {
    return {
      detailData: [],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
