<template>
  <div class="error">
    <div>404,页面没有找到</div>
    <div>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
.error {
  font-size: 60px;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {

  }
}
</style>
