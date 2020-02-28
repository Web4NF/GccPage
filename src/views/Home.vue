<template>
  <div>
    <Gheader />
    <Banner />
    <!-- 内容容器 -->
    <div class="content-wrapper">
      <!-- 主要业务 -->
      <section id="main-business" class="main-business">
        <h2 class="title1">主要业务</h2>
        <p class="intro">利用信息技术和人才的能力,为客户提供高效率高质量的产品和服务</p>
        <!-- 业务容器 -->
        <div class="businesses">
          <!-- 业务 -->
          <div class="business">
            <!-- 业务图片 -->
            <div class="act-image-wrapper">
              <img src="../assets/imgs/main1.jpg" alt />
            </div>
          </div>
          <div class="business">
            <div class="act-image-wrapper">
              <img src="../assets/imgs/main2.jpg" alt />
            </div>
          </div>
          <div class="business">
            <div class="act-image-wrapper">
              <img src="../assets/imgs/main3.jpg" alt />
            </div>
          </div>
        </div>
        <!-- 分割线 -->
        <div class="split-line">查看更多</div>
      </section>
      <!-- 公司简介 -->
      <section id="compy-intro" class="compy-intro section-bg">
        <h2 class="title1">公司简介</h2>
        <p class="intro">稳步建立与客户的信赖关系,针对客户的多样性要求,提供更加高品质的服务,做到"双赢"</p>
        <!-- 公司简介容器 -->
        <div class="cpintro-wrapper">
          <!-- 左侧简介 -->
          <div class="ciitem-left">
            <!-- 左侧标题 -->
            <h3 class="intro-title">更专业的IT定制发方案,最完善的服务体系</h3>
            <!-- 详细 -->
            <p>
              <!-- 图标 -->
              <i class="fa fa-check-circle"></i>
              认证专业实力
            </p>
            <p>
              <i class="fa fa-check-circle"></i>
              专属顾问全程一对一服务
            </p>
            <p>
              <i class="fa fa-check-circle"></i>
              售后服务完善,即时性回复,无需等待
            </p>
            <p>
              <i class="fa fa-check-circle"></i>
              秉承"人才,效率,创造,服务"的经营理念
            </p>
            <!-- 用户疑问输入框 -->
            <input type="text" placeholder="请输入您的疑问..." class="compy-input" />
            <!-- 用户电话提交输入框 -->
            <div class="search-warpper">
              <!-- 左侧输入区域 -->
              <input type="text" placeholder="填写您的手机号..." class="left-input" />
              <!-- 右侧提交按钮 -->
              <input type="button" value="立即提交" class="right-input" />
            </div>
          </div>
          <!-- 右侧简介 -->
          <div class="ciitem-right">
            <div class="cir-item" v-for="item in 3" :key="item">
              <!-- 上圆 -->
              <div class="cir">
                <!-- 文字部分 -->
                <div class="intro-data">
                  <p>人员</p>
                  <p>100%</p>
                  <p>学士及上</p>
                </div>
              </div>
              <!-- 箭头 -->
              <div class="arrow">
                <img src="../assets/imgs/arrow_03.jpg" alt />
              </div>
              <!-- 下园 -->
              <div class="cir">
                <div class="intro-img">
                  <img src="../assets/imgs/jiaoyushuiping.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 成功案例 -->
      <section id="success-case" class="success-case">
        <h2 class="title1">成功案例</h2>
        <p class="intro">随着新技术和服务的层出不穷,人类正在逐渐进入一个智能时代</p>
        <!-- 动态容器 -->
        <div class="cases">
          <CaseBanner />
        </div>
      </section>
      <!-- 新闻资讯 -->
      <section id="news-active" class="news-active section-bg">
        <h2 class="title2">新闻资讯</h2>
        <p class="intro2">最新的新闻资讯 实时更新 时时关注 于您共享</p>
        <!-- 公司简介容器 -->
        <div class="actives">
          <NewsBanner />
        </div>
      </section>
      <!-- 商业合作 -->
      <section id="Business-cooperation" class="Business-cooperation">
        <h2 class="title3">商业合作</h2>
        <!-- 动态容器 -->
        <div class="cooperations">
          <div class="cooperation">
            <div class="cooperation-item" v-for="item in 10" :key="item">
              <img src="../assets/imgs/alipay.jpg" alt />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Gfooter />
  </div>
</template>

<script>
// @ is an alias to /src
import Gheader from "@/components/Gheader.vue";
import Banner from "../components/Banner.vue";
import CaseBanner from "../components/CaseBanner.vue";
import NewsBanner from "../components/NewsBanner.vue";
import Gfooter from "../components/Gfooter.vue";

export default {
  components: {
    Gheader,
    Banner,
    CaseBanner,
    NewsBanner,
    Gfooter
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
/* ============= 内容区域 ================== */

/* 通用样式  */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 所有section都按grid布局 */
section {
  display: grid;
  /* 单元格都居中对齐 */
  justify-items: center;
  max-width: 1200px;
}

/* 区域大标题 */
.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
}

.title2 {
  font-size: 34px;
  color: var(--text-color-lightest);
}

.title3 {
  font-size: 34px;
  color: var(--text-color-darker);
  margin-bottom: 40px;
}

/* 大标题下方红线 */
.title1::after {
  content: "";
  display: block;
  width: 20%;
  height: 4px;
  transform: translateX(200%);
  margin-top: 14px;
  background-color: var(--primary-color);
}

/* 大d标题下方简介 */
.intro {
  margin: 30px 0 30px 0;
  font-size: 15px;
  color: var(--text-color-gray);
}

.intro2 {
  margin: 30px 0 30px 0;
  font-size: 15px;
  color: var(--text-color-lightest);
}

/* 区域背景色，因为区域有最大宽度限制，用before来设置占满浏览器宽度 */
.section-bg {
  position: relative;
}

.section-bg::before {
  content: "";
  display: block;
  position: absolute;
  background-color: #f2f2f2;
  width: 100vw;
  height: 100%;
  z-index: -1;
}

/* ============= 主要业务 ================== */

/* 动态栅格布局 */
.businesses {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
}
/* 动态 */
.business {
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: 0.4s;
}

/* 动态图片容器 */
.act-image-wrapper {
  height: 430px;
  overflow: hidden;
  /* 抵消business的padding */
  margin: -24px;
}

/* 动态图片 */
.act-image-wrapper img {
  min-height: 430px;
  object-fit: cover;
}

/* 动态鼠标移上时 */
.business:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
}

/* 分割线 */
.split-line {
  padding: 0 20px 0;
  margin: 60px 0;
  line-height: 1px;
  border-left: 545px solid #ddd;
  border-right: 545px solid #ddd;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #01a7db;
}

/* ============= 公司简介 ================== */

.compy-intro {
  padding-top: 48px;
}

.cpintro-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.intro-title {
  font-size: 17px;
  margin-bottom: 30px;
}

/* 左侧简介 */
.ciitem-left {
  width: 400px;
  height: 350px;
  text-align: left;
  padding: 40px 40px;
}

.ciitem-left > p {
  font-size: 15px;
  color: var(--text-color-dark-gray);
}

.ciitem-left > p:not(:last-child) {
  margin-bottom: 15px;
}

.ciitem-left > p:nth-child(5) {
  margin-bottom: 30px;
}

/* 图标 */
.ciitem-left i.fa {
  color: var(--primary-color);
  margin-right: 10px;
}

/* input去除点击后的边框 */
input:focus {
  outline: none;
}

/*  用户疑问输入框 */
.compy-input {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 0 0 10px;
  border: 0;
  /* 边框阴影 */
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.075),
    0px 0px 8px rgba(102, 175, 233, 0.6);
}

/* 左侧输入区域 */
.left-input {
  width: 65%;
  height: 40px;
  padding: 0 0 0 10px;
  border: 3px solid var(--primary-color);
}

/* 右侧提交按钮 */
.right-input {
  width: 35%;
  height: 40px;
  vertical-align: top;
  background-color: var(--primary-color);
  border: none;
  color: #ffff;
  cursor: pointer;
}

/* 右侧简介 */
.ciitem-right {
  width: 680px;
  height: 460px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

/* 简介列 */
.cir-item {
  width: 150px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* 中间箭头 */
.arrow {
  width: 33px;
  height: 46px;
  /* border: 1px solid purple; */
}

.arrow img {
  width: 100%;
  height: 100%;
}

/* 圆圈 */
.cir {
  width: 150px;
  height: 150px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 15px rgba(220, 220, 220, 0.6);
  /* border: 1px solid blue; */
  border-radius: 50% 50%;
  text-align: center;
  position: relative;
}

.intro-data {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.intro-data p {
  font-size: 17px;
  font-weight: 500;
  color: var(--text-color-dark-gray);
}

.intro-data p:nth-child(2) {
  font-size: 34px;
  color: var(--primary-color);
  margin: 10px 0;
}

.intro-img img {
  width: 65%;
  margin-top: 25px;
}

/* ============= 成功案例 ================== */

.success-case {
  padding: 48px 0 0 0;
}

.cases {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
}

/* ============= 新闻资讯 ================== */
.news-active {
  padding-top: 48px;
}

.actives {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
}

/* ============= 商业合作 ================== */
.Business-cooperation {
  padding-top: 48px;
}

.cooperations {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
}

.cooperation {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}

.cooperation-item {
  width: 235px;
  height: 75px;
  text-align: center;
  margin-bottom: 20px;
}
.cooperation-item > img {
  width: 70%;
}
</style>
