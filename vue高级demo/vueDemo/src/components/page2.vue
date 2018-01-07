<template>
  <div class="page2">
    <h1>{{ msg }}</h1>
    <p>{{$route.name}}</p>
    <p>{{$route.params.username}}</p>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      msg: 'page2'
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
