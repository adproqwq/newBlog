<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue';

const { site } = useAddonVercount();
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
     <div>
      <span>本站总访问量 {{ site.pv }} 次</span>
      <span>本站总访客数 {{ site.uv }} 人</span>
     </div>
    <div>
      <a href="https://icp.gov.moe/?keyword=20233825" target="_blank">萌ICP备20233825号</a>
    </div>
  </YunFooter>
</template>