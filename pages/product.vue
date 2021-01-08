<template>
  <div class="qq">
    <List />
  </div>
</template>
<script>
export default {
  asyncData ({ req, res }) {
    if (process.client) console.log('client !')
    if (process.server) console.log('server !')
    console.log(req)
  },
  layout: 'dark'
}
</script>
