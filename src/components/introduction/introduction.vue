<template>
  <div class="introduction">
    <div class="img"></div>
    <div class="content">
      <div class="left">
        <h4>集团介绍</h4>
        <ul>
          <li><router-link to="/introduction/structure">集团构成</router-link></li>
          <li><router-link to="/introduction/cultural">品牌文化</router-link></li>
          <li><router-link to="/introduction/develop">发展历程</router-link></li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/mixin.scss';
.introduction {
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // height: 100%;
  // width: 100%;
  .img {
    @include content-header-img('./instroction.png')
  }
  .content{
    width: 1000px;
    margin: 30px auto;
    display: flex;
    .left{
      width: 100px;
      h4{
        display: inline-block;
        margin: 0;
        padding: 5px;
        border-bottom: 3px solid #EFC400;
      }
      ul{
        li{
          padding: 5px;
          font-size: 14px;
          a{
            display: inline-block;
            color: #808080;
          }
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .right{
      flex: 1;
    }
  }
}
</style>
