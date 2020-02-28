<template>
  <footer>
    <!-- 邮箱层 -->
    <div class="footer-floor">
      <p class="email-sub">邮件订阅</p>
      <div class="input-warpper">
        <i class="fa fa-paper-plane"></i>
        <input type="text" placeholder="请输入您的邮箱地址" class="email-input" />
      </div>
      <p class="email-remind">收到邮件后,我们会在24小时内与您联系</p>
    </div>
    <!-- 导航层 -->
    <div class="footer-nav">
      <div class="footer-nav-container">
        <!-- 导航 -->
        <nav>
          <a href="#home">首页</a>
          <a href="#about-us">公司介绍</a>
          <a href="#showcases">主要业务</a>
          <a href="#service">成功案例</a>
          <a href="#company-activities">联系我们</a>
        </nav>
        <!-- 分享 -->
        <div class="floor-right">
          <a href="#" v-for="item in 4" :key="item" style="margin:0 5px 0 5px">
            <img src="../assets/imgs/facebook.png" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- 版权层 -->
    <div class="rights">
      <pre>©2017 Global Consulting Center Inc. All Rights Reserved.</pre>
    </div>
  </footer>
</template>
<style scoped>
/* ============= 底部区域 ================== */

/* 底部 */
footer {
  display: grid;
  justify-items: center;
  padding-top: 48px;
}

.footer-floor {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

/* 邮箱 */
.email-sub {
  font-size: 17px;
  color: var(--text-color-dark);
}

.input-warpper {
  position: relative;
}

/* input飞机图标 */
.fa {
  position: absolute;
  top: 10px;
  left: 375px;
  color: var(--primary-color);
  font-size: 20px;
  cursor: pointer;
}

input:focus {
  outline: none;
}

.email-input {
  margin: 0 10px 0 15px;
  width: 400px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  padding-left: 25px;
}

.email-remind {
  font-size: 15px;
  color: var(--text-color-gray);
}

/* 导航链接 */
.footer-nav {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
}

.footer-nav-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-nav-container nav a {
  color: var(--text-color-dark);
  text-decoration: none;
  margin: 0 24px;
}

.floor-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 版权 */
.rights {
  width: 100%;
  height: 50px;
  text-align: center;
  background: #333333;
  line-height: 50px;
  font-size: 15px;
  color: var(--text-color-gray);
}
</style>