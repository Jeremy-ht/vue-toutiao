<template>
  <div class="my-container">
    <van-cell-group :border="false" class="base-info">
      <van-cell center class="base-info-title">
        <van-image
          slot="icon"
          width="50"
          height="50"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">名称</div>
        <van-button
          slot="right-icon"
          size="small"
          round>编辑资料
        </van-button>
      </van-cell>
      <van-grid :border="false">
        <van-grid-item text="头条">
          <div slot="icon">123</div>
        </van-grid-item>
        <van-grid-item text="关注">
          <div slot="icon">123</div>
        </van-grid-item>
        <van-grid-item text="粉丝">
          <div slot="icon">123</div>
        </van-grid-item>
        <van-grid-item text="获赞">
          <div slot="icon">123</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <van-grid :column-num="2">
      <van-grid-item
        icon-prefix="iconfont"
        icon="shoucang"
        text="收藏"/>
      <van-grid-item
        icon-prefix="iconfont"
        icon="lishi"
        text="历史"/>
    </van-grid>

    <van-cell title="消息通知" is-link to="/"/>
    <van-cell title="小爱同学" is-link to="/"/>
    <van-cell title="退出登录" to="/"/>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less">
.my-container {
  .base-info {
    background: url('../../assets/my/banner.png') no-repeat;

    .base-info-title {
      background-color: unset;
    }

    .van-grid-item__content {
      background-color: unset;
    }

    .van-grid-item__text {
      color: #000000;
    }
  }
}
</style>
