<template>
  <!-- 创建头部组建 -->
    <div class="header">
      <Logo />
      <LoginRegister />
    </div>
  </template>
  
  <script>
  import Logo from './Logo.vue'
  import LoginRegister from './LoginRegister.vue'
  
  export default {
    name: 'Header',
    components: {
      Logo,
      LoginRegister
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #dbdbdb;
  }
  </style>
  