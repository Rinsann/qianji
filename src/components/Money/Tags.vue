<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ol class="current">
      <li v-for="tag in tagList" :key="tag.id" :class="{selected:selectedTags.indexOf(tag) >=0}"
          @click="toggle(tag)">{{ tag.name }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  computed:{
    tagList(){
      return []
    }
  }
})
export default class Tags extends Vue {
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }

  create() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      return window.alert("标签名不能为空");
    }
    //TODO
    // store.createTag(name);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  background: white;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: $color-heihlight;
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>
