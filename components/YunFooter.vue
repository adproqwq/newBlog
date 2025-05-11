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

      <a href="https://icp.govs.xin/id.php?keyword=20250825" target="_blank">
        <img src="https://icp.govs.xin/favicon.ico" width="20" height="20" style="vertical-align: middle; margin-right: 5px; display: inherit;">
        信ICP备20250825号
      </a>
    </div>
  </YunFooter>
</template>

<style lang="css">
.icp {
  white-space: nowrap;
}
.icp > * {
  display: inline;
}
</style>