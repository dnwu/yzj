<template>
  <div class="newsList">
    <ul>
      <li>
        <span>标题文字....标题文字....标题文字.标题文字标题文字标题文字</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
      <li>
        <span>标题文字....标题文字....标题文字....标题文字....标题文字....</span><span>2017-10-10</span>
      </li>
    </ul>
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
.newsList{
  ul{
    padding-left: 66px;
    li{
      display: flex;
      color: #5e5e5e;
      margin: 8px 0;
      &:hover{
        cursor: pointer;
      }
      span:first-child{
        width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span:last-child{
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>
