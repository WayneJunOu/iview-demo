<template>
  <div class="header">
    <div class="header-nav">
      <img class="header-logo" src="../../assets/logo3.png" alt="">
      <div class="header-container">
        <div class="header-button-wrapper">
          <Button type="primary" style="margin-left: 10px;" class="header-container-button">登录</Button>
          <Button type="primary" class="header-container-button">注册</Button>
        </div>
        <ul>
          <li class="header-container-list active">首页</li>
          <li class="header-container-list">社会招聘</li>
          <li class="header-container-list">业务介绍</li>
          <li class="header-container-list">品牌文化</li>
        </ul>
      </div>
      <div class="header-mobile">
        <Icon class="header-mobile-button" type="navicon-round" size="50" color="#00A3FE"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.ivu-btn-primary {
  color: #fff;
  background-color: #00A3FE;
  border-color: #00A3FE;
}
</style>
<style lang="less" scoped>
/* @import '~iview/src/styles/index.less';
@primary-color: #00A3FE; */
.header {
  position: relative;
  display: block;
  width: 100%;
  height: 88px;
  padding: 0;
  text-align: center;
}
.header-nav {
  display: block;
  max-width: 1400px;
  height: 88px;
  margin: 0 auto;
  text-align: left;
}
.header-logo {
  width: 350px;
  height: 44px;
  margin-top: 22px;
}
.header-container {
  float: right;
  white-space: nowrap;
}
.header-mobile {
  display: none;
  float: right;
  white-space: nowrap;
}
.header-mobile-button {
  margin-top: 22px;
  margin-right: 20px;
  background: transparent;
  white-space: pre-wrap;
  cursor: pointer;
}
.header-container ul {
  float: left;
}
.header-container-list {
  display: inline-block;
  height: 88px;
  line-height: 88px;
  padding: 0 30px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.header-container-list:hover {
  height: 90px;
  color: #fff;
  background: #00A3FE;
}
.active {
  height: 90px;
  color: #fff;
  background: #00A3FE;
}
.header-button-wrapper {
  float: right;
  margin-top: 22px;
}
.header-container-button {
  width: 88px;
  height: 44px;
}
@media screen and (max-width: 1050px)  {
  .header-container {
    display: none;
  }
  .header-mobile {
    display: block;
  }
}
</style>
