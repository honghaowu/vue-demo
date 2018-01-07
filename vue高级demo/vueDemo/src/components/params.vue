<template>
  <div class="params">
    <h1>{{ $route.params.id }}</h1>
    <p>{{$route.params.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
