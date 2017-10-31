<template>
  <div class="other_service">
    <h4>其他特色业务</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <h5>1、 “货机+腹舱”业务</h5>
      <p>主要以金鹏航空和海航货运为主体，通过两家企业的资源和业务整合，扩展服务航线网络，形成统一的运力平台，共同推出具有竞争力的航空运输产品。</p>
      <p class="pic"><img src="./defult.png" alt=""></p>
      <h5>2 、“飞尝鲜”项目</h5>
      <p>它的目标客户主要是国内外生鲜电商以及上游供应商，核心业务包括通过扬子江货运控股全球运输产业链和保鲜技术应用，为客户提供运输、配送、仓储等一系列服务 </p>
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
.other_service {
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
