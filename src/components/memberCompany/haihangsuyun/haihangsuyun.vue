<template>
  <div class="haihangsuyun">
    <h4>海航速运</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p><img class="fl" src="./pic1.png" alt="">海航速运于2007年成立，隶属海航现代物流，多年来丰富的业务类型使得我司奠定了雄厚的车辆和人员基础，积累了丰富的机坪内外快速、高效的操作经验，是一家集国内、国际航空货运代理、空港配送、公路运输、城际配送于一体的跨区域、网络型、信息化、并具有供应链管理能力的综合型物流企业，旗下拥有8家分支机构。</p>
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
.haihangsuyun {
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
      img{
        margin: 0 15px 5px 0;
      }
    }
  }
}
</style>
