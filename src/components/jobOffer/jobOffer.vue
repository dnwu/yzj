<template>
  <div class="jobOffer">
    <div class="img"></div>
    <div class="content">
      <div class="left">
        <h4>人才招聘</h4>
        <!-- <ul>
          <li>
            <router-link to="/business/aviation_traffic_service">航空货物运输服务</router-link>
          </li>
        </ul> -->
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
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
@import '../../common/mixin.scss';
.jobOffer {
  .img {
    @include content-header-img('./offer_pic.png')
  }
  .content {
    width: 1000px;
    margin: 30px auto;
    display: flex;
    .left {
      h4 {
        display: inline-block;
        margin: 0;
        padding: 5px;
        border-bottom: 3px solid #EFC400;
      }
      ul {
        li {
          padding: 5px;
          font-size: 14px;
          a {
            color: #808080;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .right {
      flex: 1;
    }
  }
}
</style>
