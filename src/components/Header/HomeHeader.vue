<template>
  <!-- 头部 -->
  <header class="open">
    <div class="logo">GCC</div>
    <!-- 导航 -->
    <nav>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="/Home">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">公司介绍</template>
          <el-menu-item index="/CompanyProfile">公司简介</el-menu-item>
          <el-menu-item index="/MCompanyProfile">母公司简介</el-menu-item>
          <el-menu-item index="/NanJingProfile">南京市简介</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">主要业务</template>
          <el-menu-item index="3-1">公司简介</el-menu-item>
          <el-menu-item index="3-2">母公司简介</el-menu-item>
          <el-menu-item index="3-3">南京市简介</el-menu-item>
        </el-submenu>
        <el-menu-item index="/SuccessfulCase">成功案例</el-menu-item>
        <el-menu-item index="/News">新闻资讯</el-menu-item>
        <el-menu-item index="/Contact">联系我们</el-menu-item>
      </el-menu>
    </nav>
    <!-- 语言|搜索 -->
    <el-breadcrumb separator="｜">
      <el-breadcrumb-item>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="icon">&#xe60a;</i>
            中文
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="fa fa-paper-plane"></i>
              中文
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="fa fa-paper-plane"></i>
              English
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="fa fa-paper-plane"></i>
              日本語
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <i class="fa fa-search"></i>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 折叠导航按钮 -->
    <div class="burger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
  </header>
</template>

<script>
import "../../assets/base.css";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ============= 头部================== */

.el-menu {
  color: var(--text-color-lightest);
}

.el-menu-demo {
  height: 40px;
  /* border-bottom-color:none!important; */
  background-color: rgba(0, 0, 0, 0);
  /* float: right; */
  /* margin-right: 8.54%; */
}

/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

/* 点击以后的背景色进行隐藏 */
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
}

/* 导航栏字体颜色白色 */
nav >>> .el-menu-item {
  color: var(--text-color-lightest);
}

nav >>> .el-menu-item:not(.is-disabled):hover {
  color: var(--text-color-lightest);
}

/* 二集下拉父级hover效果取消 */
nav
  >>> .el-menu-demo.el-menu--horizontal.el-menu
  > .el-submenu
  > .el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0);
}

/* 二集下拉图标白色 */
nav
  >>> .el-menu-demo.el-menu--horizontal.el-menu
  > .el-submenu
  > .el-submenu__title
  i {
  color: var(--text-color-lightest);
}

/* 二集下拉父级字体白色 */
nav
  >>> .el-menu-demo.el-menu--horizontal.el-menu
  > .el-submenu
  > .el-submenu__title {
  color: var(--text-color-lightest);
}

header >>> .el-breadcrumb {
  justify-self: end;
  margin-right: 15px;
}

header
  >>> .el-breadcrumb
  > .el-breadcrumb__item
  > .el-breadcrumb__inner
  > .el-dropdown {
  color: var(--text-color-lightest);
}

header >>> .el-breadcrumb > .el-breadcrumb__item > .el-breadcrumb__inner {
  color: var(--text-color-lightest);
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: var(--text-color-lightest);
}

/* 头部 */
header {
  width: 100vw;
  /* width: 100vw; */
  height: 80px;
  /* 栅格布局 */
  display: grid;
  padding: 0 40px;

  /* 两列，一列占三分之一，一列占三分之二 */
  grid-template-columns: 1fr 2fr 1fr;
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
  justify-self: center;
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
