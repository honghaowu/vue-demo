<template>
  <div class="page">
    <h1>{{ msg }}</h1>
    <div>
        <router-link to='/page/page1'>page1</router-link>
        <router-link :to='{name: "page2",params: {username: "dd"}}'>page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: 'page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
