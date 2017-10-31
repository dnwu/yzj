<template>
  <div class="memberCompany">
    <div class="img"></div>
    <div class="content">
      <div class="left">
        <h4>成员公司</h4>
        <ul>
          <li>
            <router-link to="/memberCompany/jinpeng">金鹏航空</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/haihanghuoyun">海航货运</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/tianjinhangyu">天津航宇</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/haihangsuyun">海航速运</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/changan">长安货航</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/tianjinhuohang">天津货航</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/myCargo">My Cargo</router-link>
          </li>
          <li>
            <router-link to="/memberCompany/xianggang">香港货航</router-link>
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
.memberCompany {
  .img {
    @include content-header-img('./headerPic.png')
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
