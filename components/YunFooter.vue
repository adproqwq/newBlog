<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue';

const { site } = useAddonVercount();
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
     <div>
      <span>
        本站总访问量 {{ site.pv }} 次

        本站总访客数 {{ site.uv }} 人
      </span>
     </div>
    <div class="icp">
      <a href="https://icp.gov.moe/?keyword=20233825" target="_blank">萌ICP备20233825号</a>

      <a href="https://icp.redcha.cn/beian/ICP-2025080071.html">
        <img src="https://icp.redcha.cn/static/picture/icplogoi.png" width="20" height="20" style="vertical-align: middle; margin-right: 5px; display: inherit;">
        茶ICP备2025080071号
      </a>
    </div>
  </YunFooter>
</template>

<style lang="css">
.icp {
  display: flexbox;
}
.icp > * {
  display: inline-flexbox;
  flex-flow: row wrap;
}
</style>