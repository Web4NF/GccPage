<template>
  <!-- 头部 -->
  <header class="open">
    <div class="logo">GCC</div>
    <!-- 导航 -->
    <nav>
      <a href="#home">首页</a>
      <a href="#about-us">公司介绍</a>
      <a href="#showcases">主要业务</a>
      <a href="#service">成功案例</a>
      <a href="#team-intro">新闻资讯</a>
      <a href="#company-activities">联系我们</a>
      <i class="fas fa-search"></i>
    </nav>
    <!-- 折叠导航按钮 -->
    <div class="burger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
  </header>
</template>

<script>
import "../assets/base.css";
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ============= 头部================== */

/* 头部 */
header {
  width: 100vw;
  /* width: 100vw; */
  height: 80px;
  /* 栅格布局 */
  display: grid;
  padding: 0 40px;

  /* 两列，一列占三分之一，一列占三分之二 */
  grid-template-columns: 1fr 2fr;
  /* 垂直居中 */
  align-items: center;
  /* 用于定位导航菜单 */
  position: relative;
  z-index: 200;
}

/* logo */
.logo {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-color-lightest);
}

/* 导航 */
header nav {
  /* 水平靠右对齐 */
  justify-self: end;
}

/* 导航链接 */
header nav a {
  color: var(--text-color-lightest);
  text-decoration: none;
  margin: 0 24px;
}

/* 搜索图标 */
header nav i {
  color: var(--text-color-lightest);
}
/* 折叠菜单 */
header .burger {
  display: none;
}

/* 页面下滑时固定导航，背景设置为白色 */
header.sticky {
  position: fixed;
  background-color: white;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  animation: dropDown 0.5s ease-in-out forwards;
}

/* 固定导航文字颜色为黑色 */
header.sticky .logo,
header.sticky nav a,
header.sticky nav i {
  color: var(--text-color-darker);
}

/* 固定导航下滑动画 */
@keyframes dropDown {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
