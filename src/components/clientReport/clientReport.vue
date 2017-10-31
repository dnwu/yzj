<template>
  <div class="clientReport">
    <div class="img"></div>
    <div class="content">
      <div class="left">
        <h4>客户报告</h4>
        <ul>
          <li>
            <router-link to="/clientReport/work_address">办公地点</router-link>
          </li>
          <li>
            <router-link to="/clientReport/contact_information">联系方式</router-link>
          </li>
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
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/mixin.scss';
.clientReport {
  .img {
    @include content-header-img('./report_pic.png')
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
