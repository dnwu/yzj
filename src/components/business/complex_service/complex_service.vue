<template>
  <div class="complex_service">
    <h4>综合物流服务</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p>综合物流服务。主要包括提供陆运、海运、空陆联运、空海联运、空空转运、多式联运；提供汽配、冷链医药、快递快运干线等项目物流服务；为顾客提供运输、仓储、转运、配送一体化的物流增值服务。</p>
      <p class="pic"><img src="./defult.png" alt=""></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.complex_service {
  // text-align: center;
  padding: 0 50px;
  flex: 1;
  h4 {
    margin: 5px 0;
    text-align: center;
  }
  .word {
    margin: 20px 0;
    p{
      text-indent: 2em;
      line-height: 30px;
      &.pic{
        text-indent: 0;
      }
    }
  }
}
</style>
