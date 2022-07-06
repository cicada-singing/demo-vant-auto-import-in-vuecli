<template>
  <h1>演示 Vant 3 基础组件</h1>

  <h2>Button 按钮</h2>

  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

  <h2>Icon 图标</h2>

  <van-icon name="chat-o" />
  <van-icon dot name="chat-o" />
  <van-icon badge="9" name="chat-o" />
  <van-icon color="#1989fa" name="cart-o" />
  <van-icon color="#ee0a24" name="fire-o" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
