<template>
  <!-- 创建导航栏组件 -->
  <div>
    <ul class="navigation">
      <li><a @click="$router.push('/')">影视</a></li>
      <li><a @click="$router.push('/category')">影视分类</a></li>
      <li><a @click="$router.push('/review')">影评</a></li>
      <li><a @click="$router.push('/ranking-list')">排行榜</a></li>
      <li><a @click="$router.push('/chat-room')">聊天室</a></li>
    </ul>
    <router-view />
  </div>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style scoped>
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding: 0;
    list-style: none;
    height: 40px;
  }
  .navigation li {
    margin: 0 50px;
  }

  .navigation a {
    font-size: 16px;
    color: #333;
    text-decoration: none;
    transition: all .3s;
  }
  .navigation a:hover {
    color: rgb(29, 165, 56);
   
  }
  </style>
  