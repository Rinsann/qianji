<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectedType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectedType('+')">收入</li>
  </ul>
</template>

<script>
export default {
  name: 'Types',
  data() {
    return {
      type: '-', // ‘-’ 表示支出 ‘+’ 表示收入
    }
  },
  methods: {
    selectedType(type) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown')
      }
      this.type = type
    }
  }
};
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>
