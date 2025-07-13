<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue';
import { onMounted } from 'vue';

const { site } = useAddonVercount();

onMounted(() => {
  const wuIcpCss = document.createElement('link');
  wuIcpCss.rel = 'stylesheet';
  wuIcpCss.href = 'https://scdn.星.fun/icp.css';

  document.head.append(wuIcpCss);
});
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

      <a href="https://icp.xnet.ren/id.php?keyword=20250825" target="_blank">
        <img src="https://icp.xnet.ren/favicon.ico" width="20" height="20" style="vertical-align: middle; margin-right: 5px; display: inherit;">
        信备20250825号
      </a>

      <a href="https://icp.星.fun/id.php?keyword=20250825" target="_blank">
        <img src="https://icp.星.fun/logo.png" width="20" height="20" style="vertical-align: middle; margin-right: 5px; display: inherit;">
        团ICP备20250825号
      </a>

      <a href="https://icp.govs.wang/id.php?keyword=20250825" target="_blank">
        <img src="https://icp.govs.wang/favicon.ico" width="20" height="20" style="vertical-align: middle; margin-right: 5px; display: inherit;">
        网ICP备20250825号
      </a>

      <div class="github-badge">
        <span class="badge-subject">雾备</span>
        <a style="color:#fff" href="https://icp.wudu.ltd/id.php?keyword=20080825" rel="external" target="_blank">
          <span class="badge-value bg-cai">20080825号</span>
        </a>
      </div>
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