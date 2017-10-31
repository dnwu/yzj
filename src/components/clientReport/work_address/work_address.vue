<template>
  <div class="work_address">
    <h4>办公地点</h4>
    <div class="pic">
      <img src="./defult.png" alt="">
    </div>
    <div class="word">
      <p>办公地点1：地址文字。。。。。。。。。。。。。。</p>
      <p>办公地点2：地址文字。。。。。。。。。。。。。。</p>
      <p>办公地点3：地址文字。。。。。。。。。。。。。。</p>
      <p>办公地点4：地址文字。。。。。。。。。。。。。。</p>
      <p>办公地点5：地址文字。。。。。。。。。。。。。。</p>
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
.work_address {
  // text-align: center;
  padding: 0 100px;
  flex: 1;
  h4 {
    margin: 5px 0;
    text-align: center;
  }
  .word {
    margin: 20px 0;
  }
}
</style>
