<template>
  <div class="myCargo">
    <h4>My Cargo</h4>
    <div class="pic">
      <img src="" alt="">
    </div>
    <div class="word">
      <p class="pic"><img src="./defult.png" alt=""></p>
      <p>2011年10月24日海航集团（HNA）投资2700万美元与香港私募股权投资集团（Bravia Capital，简称Bravia）参股土耳其货运航空公司。Bravia和海航集团可借此打造一个货运平台，利用不断成长中的欧亚货运市场商机来获利。MYCARGO航空公司主要经营国际包机空运服务，以及ACMI服务和干湿租赁服务。</p>
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
.myCargo {
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
      line-height: 30px;
      text-indent: 2em;
      img{
        width: 100%;
      }
      &.pic{
        text-indent: 0;
      }
    }
  }
}
</style>
