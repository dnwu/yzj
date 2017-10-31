<template>
  <div class="spa_truck_service">
    <h4>SPA和卡车联运网络业务</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p>Special Prorate Agreement特殊比例分摊协议，简称SPA。是航空公司之间双边合作的一种模式，与外航通过SPA协议的方式共享特定航线的运力，按照里程比例分享相应的收益。SPA能够灵活的补充、调节航空公司间的运力，有针对性地拓展航司的营运网络。</p>
      <p>卡车航班是指航空公司在货物始发地与中转航站、或中转航站与目的地之间的固定开辟的地面运输路线。与地面运输承运人签署卡车协议，进行货物陆空联运的运输形式，作为航空运输的延伸服务来运作。一般航司所使用的为海关监管卡车，即经过海关批准可以承运海关监管货物的车辆。</p>
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
.spa_truck_service {
  // text-align: center;
  padding: 0 40px;
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
