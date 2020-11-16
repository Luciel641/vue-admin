<template>
  <div class="err-wrapper">
    <div class="err-container">
      <div class="err-msg">
        <div class="err-num">401</div>
        <div class="err-tips">抱歉，你无权访问该页面</div>
      </div>
      <div class="err-btns">
        <router-link to="/">
          <el-button class="err-back-btn" type="primary">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page401'
}
</script>

<style lang="scss" scoped>
.err-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 100px 0;
  background-color: #fff;
}
.err-container {
  text-align: center;
}
.err-msg {
  margin: 0 auto;
  color: #354053;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.05);
}
.err-num {
  font-size: 100px;
  font-weight: bold;
  line-height: 1;
}
.err-tips {
  margin-top: 20px;
  font-size: 22px;
}
.err-btns {
  margin-top: 20px;
}
</style>
