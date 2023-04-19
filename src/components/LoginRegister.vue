<template>
  <!-- 创建登录组件 -->
    <div class="login-register">
      <a href="#">登录</a>
      <span>|</span>
      <a href="#">注册</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginRegister'
  }
  </script>
  
  <style scoped>
  a{
    text-decoration: none;
  }
  .login-register {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
  }
  .login-register a {
    margin: 0 10px;
    color: #4f4f4f;
  }
  .login-register :hover{
    color: #005b18;
  }
  .login-register span {
    margin: 0 5px;
  }
  </style>
  