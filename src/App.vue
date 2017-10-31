<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <router-link to="/">
          <div class="logo">
            扬子江航空货运集团
          </div>
        </router-link>
        <div class="navigate">
         <a href="http://yzj.sibat.cn/dist/"> 扬子江航空货运集团相关平台
          <span class="triangle"></span>
          </a>
        </div>
      </div>
      <div class="tab">
        <ul>
          <li>
            <router-link to="/introduction">集团介绍</router-link>
            <span class="triangle"></span>
            <ul class="list">
              <li>
                <router-link to="/introduction/structure">集团构成</router-link>
              </li>
              <li>
                <router-link to="/introduction/cultural">品牌文化</router-link>
              </li>
              <li>
                <router-link to="/introduction/develop">发展历程</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/memberCompany">成员公司</router-link>
            <span class="triangle"></span>
            <ul class="list">
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
          </li>
          <li>
            <router-link to="/business">业务产品</router-link>
            <span class="triangle"></span>
            <ul class="list">
              <li>
                <router-link to="/business/aviation_traffic_service">航空货物运输服务</router-link>
              </li>
              <li>
                <router-link to="/business/line_traffic_service">航空干线_落地配服务</router-link>
              </li>
              <li>
                <router-link to="/business/spa_truck_service">SPA和卡车联运网络业务</router-link>
              </li>
              <li>
                <router-link to="/business/complex_service">综合物流服务</router-link>
              </li>
              <li>
                <router-link to="/business/other_service">其他特色业务</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/importantNews">集团要闻</router-link>
          </li>
          <li>
            <router-link to="/responsibility">社会责任</router-link>
          </li>
          <li>
            <router-link to="/clientReport">客户报告</router-link>
            <span class="triangle"></span>
            <ul class="list">
              <li>
                <router-link to="/clientReport/work_address">办公地点</router-link>
              </li>
              <li>
                <router-link to="/clientReport/contact_information">联系方式</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/jobOffer">人才招聘</router-link>
          </li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="contain">
        <div class="footlogo"></div>
        <div>
          <ul>
            <li>
              <router-link to="/introduction">集团介绍</router-link>
            </li>
            <li>
              <router-link to="/introduction/structure">集团构成</router-link>
            </li>
            <li>
              <router-link to="/introduction/cultural">品牌文化</router-link>
            </li>
            <li>
              <router-link to="/introduction/develop">发展历程</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/memberCompany">成员公司</router-link>
            </li>
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
        <div>
          <ul>
            <li>
              <router-link to="/business">业务产品</router-link>
            </li>
            <li>
              <router-link to="/business/aviation_traffic_service">航空货物运输服务</router-link>
            </li>
            <li>
              <router-link to="/business/line_traffic_service">航空干线_落地配服务</router-link>
            </li>
            <li>
              <router-link to="/business/spa_truck_service">SPA和卡车联运网络业务</router-link>
            </li>
            <li>
              <router-link to="/business/complex_service">综合物流服务</router-link>
            </li>
            <li>
              <router-link to="/business/other_service">其他特色业务</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/importantNews">集团要闻</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/responsibility">社会责任</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/clientReport">客户报告</router-link>
            </li>
            <li>
              <router-link to="/clientReport/work_address">办公地点</router-link>
            </li>
            <li>
              <router-link to="/clientReport/contact_information">联系方式</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/jobOffer">人才招聘</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>
<style lang="scss" scoped>
@import "./common/mixin.scss";
#app {
  // width: 1000px;
  // margin: 0 auto;
  height: 100%;
  .wrapper {
    box-sizing: border-box;
    min-height: 100%;
    padding-bottom: 322px;
    display: flex;
    flex-flow: column;
    .header {
      width: 1000px;
      margin: 0 auto;
      height: 94px;
      .logo {
        width: 150px;
        height: 94px;
        overflow: hidden;
        float: left;
        text-indent: -9em;
        background-image: url("assets/logo.png");
        background-size: contain;
      }
      .navigate {
        float: right;
        height: 94px;
        text-align: center;
        line-height: 94px;
        font-size: 14px;
        a{
          color: black;
        }
        .triangle {
          @include triangle(8px,
          #808080);
          position: relative;
          top: 8px;
          left: 8px;
        }
      }
    }
    .tab {
      // position: absolute;
      // left: 0;
      // right: 0;
      width: 100%;
      height: 70px;
      background-color: #efc400;
      text-align: center;
      line-height: 70px;
      font-size: 14px;
      > ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        width: 1000px;
        margin: 0 auto;
        > li {
          flex: 1;
          color: #fff;
          position: relative;
          a {
            display: inline-block;
            width: 100%;
            color: #fff;
          }
          .triangle {
            @include triangle(6px,
            #fff);
            position: absolute;
            top: 32px;
            right: 16px;
          }
          &:hover {
            background-color: #eee;
            color: #efc400;
            cursor: pointer;
            .triangle {
              @include triangle(6px,
              #EFC400);
            }
            a {
              color: #efc400;
            }
            .list {
              display: block;
              color: #808080;
            }
          }
          .list {
            list-style: none;
            padding: 0;
            min-width: 100%;
            background-color: #eee;
            position: absolute;
            z-index: 10;
            padding: 10px 0;
            display: none;
            li {
              padding: 5px;
              word-break: keep-all;
              /* 不换行 */
              white-space: nowrap;
              /* 不换行 */
              height: 35px;
              line-height: 35px;
              a {
                color: #808080;
              }
              &:hover {
                color: #efc400;
                a {
                  color: #efc400;
                }
              }
            }
          }
        }
      }
    }
    .main {
      flex: 1;
      position: relative;
    }
  }
  .footer {
    margin: -322px auto 0 auto;
    height: 322px;
    background-color: #efc400;
    position: absolute;
    left: 0;
    right: 0;
    .contain {
      width: 1000px;
      margin: 0 auto;
      padding: 35px 0 0 0;
      display: flex;
      .footlogo {
        background-image: url("assets/footLogo.png");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        width: 134px;
        height: 62px;
      }
      > div:nth-of-type(n + 2) {
        flex: 1;
        text-align: center;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            font-size: 12px;
            color: #eee;
            word-break: keep-all;
            /* 不换行 */
            white-space: nowrap;
            /* 不换行 */
            a {
              color: #eee;
            }
            &:first-child {
              font-weight: 700;
            }
            &:nth-of-type(n + 2) {
              padding: 5px 0;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>
