<template>
  <div class="structure">
    <h4>集团构成</h4>
    <div class="pic">
      <img src="./instroction.png" alt="">
    </div>
    <div class="word">
      <p>扬子江航空货运控股有限责任公司成立于2017年3月29日,是海航现代物流有限责任公司旗下从事航空货邮运输的平台管理公司。</p>
      <p>目前该公司拥有金鹏航空股份有限公司、海航货运有限公司、天津华宇股份有限公司、海航速运（北京）有限责任公司、香港货运航空有限公司、MYCARGO航空货运有限公司、长安货航（筹）、天津货航（筹）等成员公司。航空货运业务覆盖国内外270余个城市，国内外航线近1200条，拥有26架全货机，近700架客机的腹舱资源。</p>
      <p>主营业务涵盖国内（含港澳）、国际航空货邮运输业务。该公司以西安为战略核心，连接国内、国际重要枢纽航点，构建国际货运航线网络，实现货物的全球快速送达。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'structure',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.structure {
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
    }
  }
}
</style>
