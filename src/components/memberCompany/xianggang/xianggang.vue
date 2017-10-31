<template>
  <div class="xianggang">
    <h4>香港货航</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p><img src="./defult.png" alt="" class="fr">香港货运航空为香港航空旗下一间以香港为基地，经营国际公共航空货运业务的航空公司。
      </p>
      <p>香港航空的货运业务，自2010年引进第一架A330-2002F全货机以来，逐年递增。截至2016年度，业务覆盖11条货机航线，13个货机航点，以及载货量突破32.75万吨，占香港国际机场整体吞吐量7%。
      </p>
      <p>放眼未来，香港货运航空将充分结合货运市场的需求，陆续引进广体延程货机，并利用新增运力，陆续扩展其亚洲航线网络及开辟欧、美长途货机航线。配合陆上运输和海上航运服务，香港货运航空将逐步建构其空陆海物流系统。</p>
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
.xianggang {
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
      text-indent: 2em;
      img {
        margin: 0 0 10px 10px;
        width: 50%;
      }
    }
  }
}
</style>
