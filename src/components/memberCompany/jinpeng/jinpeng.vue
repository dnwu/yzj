<template>
  <div class="jinpeng">
    <h4>金鹏航空</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p><img class="fl" src="./pic1.png" alt="">金鹏航空股份有限公司成立于2002年，注册资本50.25亿元人民币，是海航集团旗下一家以上海为主运营基地的航空公司。 截止2017年8月底，金鹏航空共运营飞机22架，其中货机16架，先后开通国内、国际航线40余条，建成直达欧美、覆盖全球的航线网络。自2003年1月开航至今，金鹏航空始终坚持“安全至上”的运营理念，累计安全飞行逾31万小时，保持了良好的安全运行记录，累计6年获得中国民用航空局“安康杯”及累积10年获得民航华东管理局“安康杯”荣誉。2015年7月，金鹏航空抓住中国民航改革的历史机遇，获得航空旅客运输资质，同年12月15日，金鹏航空客运盛大开航。
      </p>
      <p>金鹏航空立足上海，网络全球。公司始终致力于打造解决方案最优，运输时效最优，客户体验最优的全产业链航空物流提供方。依托国内首创的环球航线，中国、欧美及亚洲枢纽航线，金鹏航空竭诚为您提供通达全球的定期航班及定制化的特殊货物包机服务。</p>
      <p><img class="fl" src="./pic2.png" alt=""><img class="fl" src="./pic3.png" alt=""></p>
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
.jinpeng {
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
      img{
        margin: 0 15px 5px 0;
      }
      text-indent: 2em;
      margin: 5px 0;
      line-height: 30px;
    }
  }
}
</style>
