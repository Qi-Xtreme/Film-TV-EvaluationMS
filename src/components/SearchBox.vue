<template>
  <!-- 创建搜索栏组件 -->
    <div class="search-box">
      <input type="text" v-model="keyword" placeholder="请输入影视名">
      <button @click="search">搜索</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBox',
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      search() {
        this.$emit('search', this.keyword)
      }
    }
  }
  </script>
  
  <style scoped>
  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f2f2f2;
  }
  .search-box input {
    width: 300px;
    height: 34px;
    padding: 0 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-shadow: 2px 3px 5px #ddd;
  }
  .search-box button {
    margin-left: 10px;
    width: 80px;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    color: #fff;
    background-color: rgb(1, 132, 25);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
  }
  .search-box button:hover{
    background-color: #4d4d4d;
    color: rgb(29, 165, 56);
  }
  </style>
  