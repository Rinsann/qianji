<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type：{{ type }} <br>
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from "vue";
import {Component} from "vue-property-decorator";
import Types from "@/components/Money/Types.vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    {text: "按天", value: "day"},
    {text: "按周", value: "week"},
    {text: "按月", value: "month"}
  ];
  typeList = [
    {text: "支出", value: "-"},
    {text: "收入", value: "+"},
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>
