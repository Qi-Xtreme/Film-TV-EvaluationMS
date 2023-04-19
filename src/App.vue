<template>
  <!-- 组件使用 -->
    <div id="app">
    <Header></Header>
    <SearchBox></SearchBox>
    <Navigation></Navigation>
    <!-- <MovieList></MovieList> -->
    <!-- 其他页面内容 -->
  </div>
  </template>

  <script>
// 组件引入
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import SearchBox from '@/components/SearchBox.vue'
// import MovieList from '@/components/MovieList.vue'


export default {
    name: 'App',
  components: {
    Header,
    Navigation,
    SearchBox,
    // MovieList

  }
}
</script>

<style>
.app {
  margin: 0;
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
}
</style>

