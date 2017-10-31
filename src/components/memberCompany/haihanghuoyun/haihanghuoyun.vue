<template>
  <div class="haihanghuoyun">
    <h4>海航货运</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p>海航货运有限公司成立于2011年，前身为海南航空货运部，股东方为海航航空投资集团和神行速运。</p>
      <p>海航货运代理海航集团内海南航空、首都航空、祥鹏航空等十余家航空公司及集团外山东航空等多家航空公司腹舱运输业务，同时通过与其他公司签署SPA协议等方式，建立了一个拥有近500架飞机腹舱运力、600多条航线覆盖五大洲200多个城市的海陆空一体化运输网络，极大地提升了物流效率，并依靠互联网技术提升了服务质量和用户体验。</p>
      <p>公司拥有相当规模的全球航线网络优势，经营范围包括航空货物运输代理、地面派送与快递、仓储业务、第三方物流以及物流金融等，现拥有北京、杭州、广州等全国8个城市快递运营资质及国际快递营运资质。海航货运连续多年获得“十佳物流企业”、“物流业品牌价值百强企业”、“科技进步奖”、“创新成果一等奖”等荣誉。</p>
      <p class="pic"><img src="./pic1.jpg" alt=""></p>
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
@import '../../../common/mixin.scss';
.haihanghuoyun {
  // text-align: center;
  padding: 0 100px;
  flex: 1;
  h4 {
    margin: 5px 0;
    text-align: center;
  }
  .word {
    margin: 20px 0;
    p {
      margin: 5px 0;
      text-indent: 2em;
      line-height: 30px;
      &.pic {
        text-indent: 0;
        img {
          text-indent: 0;
          width: 100%;
        }
      }
    }
  }
}
</style>
