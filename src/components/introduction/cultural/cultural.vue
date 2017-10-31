<template>
  <div class="cultural">
    <h4>品牌文化</h4>
    <div class="pic">
      <img src="./defult.png" alt="">
    </div>
    <div class="word">
      <p>品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...</p>
      <p>品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...</p>
      <p>品牌文化...品牌文化...品牌文化...品牌文化...品牌文化...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cultural',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.cultural {
  // text-align: center;
  padding: 0 100px;
  flex: 1;
  h4 {
    margin: 5px 0;
    text-align: center;
  }
  .word {
    margin: 20px 0;
    p{
      margin: 0;
      text-indent: 2em;
      line-height: 30px;
    }
  }
}
</style>
