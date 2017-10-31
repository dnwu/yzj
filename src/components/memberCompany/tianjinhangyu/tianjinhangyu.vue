<template>
  <div class="tianjinhangyu">
    <h4>天津航宇</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p class="pic"><img src="./pic1.jpg" alt=""></p>
      <p>天津华宇股份有限公司（以下简称“天津华宇”)，原名天津空港华宇航空货运站有限公司。2006年，由德国汉莎创立，2011年海航集团完成对天津华宇资产重组，现隶属于海航现代物流板块。</p>
      <p>近几年来，天津华宇依托海航集团丰富的全球航线网络资源，紧紧把握京津冀一体化、一带一路、自贸试验区、跨境电商试点城市等政策机遇，迅速完善航空地面服务和综合物流业务，并重点发展跨境电商业务，打造了阳光透明的口岸平台，搭建了快捷完善的物流体系，树立了行业标杆。天津华宇先后获批天津市跨境电子商务集聚区重点支持项目、天津市跨境电子商务创新试验区。经过几年的跨越式发展，天津华宇于2016年3月正式登陆新三板，成为新三板市场首家专业化的跨境电商物流供应商（证券简称：天津华宇 证券代码：835896）。</p>
      <p>天津华宇凭借良好的运行品质、优秀的服务质量以及持续的技术创新，先后荣获“中国质量诚信企业”和“天津市高新技术企业”等各项殊荣。作为海航集团成员企业，天津华宇始终秉承“为社会做点事、为他人做点事”的企业文化，多次与慈善机构、政府机构、共青团体联合，参与公益活动，塑造了良好的企业形象。</p>
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
.tianjinhangyu {
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
