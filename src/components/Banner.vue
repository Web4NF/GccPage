<template>
  <!-- 首页图片轮播，使用glide JS插件 -->
  <div class="glide" id="home">
    <!-- 轮播轨道 -->
    <div class="glide__track" data-glide-el="track">
      <!-- 所有轮播容器 -->
      <div class="glide__slides">
        <!-- 单个轮播组件 -->
        <div class="glide__slide" v-for="item in 3" :key="item">
          <!-- 轮播标题 -->
          <div class="slide-caption">
            <h1>用未来思考今天</h1>
            <h3>PONDERING TODAY BY FUTURE</h3>
            <h6>Leading the Development of Industry</h6>
            <!-- 探索按钮 -->
            <!-- <button class="explore-btn">探索更多</button> -->
          </div>
          <!-- 背景遮罩 -->
          <div class="backdrop"></div>
          <!-- 轮播图片 -->
          <img src="../assets/imgs/banner1.jpg" alt />
        </div>
        <!-- 第二张轮播 -->
        <div class="glide__slide">
          <div class="slide-caption left">
            <h1>科技改变世界</h1>
            <h3>Based on scientific development, focus on independent innovation.</h3>
            <!-- <button class="explore-btn">探索更多</button> -->
          </div>
          <div class="backdrop"></div>
          <!-- 轮播视频 -->
          <!-- <video src="videos/working-man.mp4" muted autoplay loop></video> -->
          <img src="../assets/imgs/banner2.jpg" alt />
        </div>
      </div>
    </div>
    <!-- glide 控制按钮 -->
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">&lt;</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">&gt;</button>
    </div>
    <!-- glide 控制圆点 -->
    <div class="glide__bullets" data-glide-el="controls[nav]">
      <button class="glide__bullet" data-glide-dir="=0"></button>
      <button class="glide__bullet" data-glide-dir="=1"></button>
    </div>
    <!-- 团队实力容器 -->
    <div class="bannerbottom">
      <div class="bannerbottomnavcontainer">
        <div class="bannerbottomnav" v-for="item in 5" :key="item">
          <div>
            <img src="../assets/imgs/strength1.jpg" alt />
          </div>
          <div style="text-align:left;margin-left:10px;">
            <p style="font-size:20px;color:#08a5dc;">20+</p>
            <p style="font-size:15px;font-weight:600;">年对日的合作经验</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from "../assets/libs/glide/glide.min.js";
import anime from "../assets/libs/anime/anime.min.js";
import "../assets/libs/glide/glide.core.min.css";
import "../assets/libs/glide/glide.theme.min.css";
export default {
  data() {
    return {};
  },
  methods: {
    initbanner() {
      // 初始轮播
      const glide = new Glide(".glide");
      // 获取轮播标题实例
      const captionsEl = document.querySelectorAll(".slide-caption");
      // 当轮播加载完成后，每个轮播完成时，加载标题动画
      glide.on(["mount.after", "run.after"], () => {
        // 获取当前展示的轮播index
        const caption = captionsEl[glide.index];
        anime({
          // 对每个子元素进行动画
          targets: caption.children,
          // 透明度
          opacity: [0, 1],
          // 持续时间
          duration: 400,
          easing: "linear",
          // 每个子元素相继延迟400毫秒，第一个延迟300毫秒
          delay: anime.stagger(400, { start: 300 }),
          // 从下向上移动，每行从40到10递减，最后移动到0
          translateY: [anime.stagger([40, 10]), 0]
        });
      });

      // 轮播进行前，把标题透明度设置为0，还原
      glide.on("run.before", () => {
        document.querySelectorAll(".slide-caption > *").forEach(el => {
          el.style.opacity = 0;
        });
      });

      // 加载轮播，必须在添加事件处理函数之后
      glide.mount();
    }
  },
  mounted() {
    this.initbanner();
  }
};
</script>
<style scoped>
/* ============= 轮播 ================== */
.glide {
  /* 定位标题和图片 */
  position: relative;
  /* 抵消导航高度 */
  top: -80px;
  /* 放置在最下层 */
  z-index: 50;
}

/* 轮播的图片和视频的大小 */
.glide__slide img,
.glide__slide video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
}

/* 轮播的布局 */
.glide__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 轮播标题容器 */
.slide-caption {
  position: absolute;
  /* 放置在遮罩上层 */
  z-index: 70;
  color: var(--text-color-lightest);
  text-align: center;
  max-width: 60vw;
}

/* 轮播标题默认不显示，在JS中用动画移入  */
.slide-caption > * {
  opacity: 0;
}

/* 轮播标题中的主标语 */
.slide-caption h1 {
  font-size: 65px;
  font-weight: 600;
}

/* 轮播标题中的副标语 */
.slide-caption h3 {
  font-size: 20px;
  margin: 30px 0;
  /* margin: 48px 0; */
}

.slide-caption h6 {
  font-size: 15px;
  margin: 30px 0;
}

/* 第二页轮播标题布局方式 */
.slide-caption.left {
  max-width: 80vw;
  text-align: left;
}

/* 轮播遮罩层 */
.backdrop {
  background: var(--backdrop-color);
  opacity: 0.3;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  /* 放置在幻灯片上层 */
  z-index: 60;
}

.glide__arrows,
.glide__bullets {
  z-index: 70;
}

.glide__bullets {
  bottom: 10em;
}

/* 探索更多按钮 */
.explore-btn {
  padding: 14px 32px;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 4px;
  color: var(--text-color-lightest);
  font-size: 18px;
  cursor: pointer;
  outline: none;
}

/* 团队实力 */
/* 轮播下导航样式 */
.bannerbottom {
  width: 100%;
  height: 100px;
  background-color: #f3f3f3;
}

.bannerbottom > .bannerbottomnavcontainer {
  /* width: 100%;
  margin: 0 auto; 水平居中 */
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%); /*垂直居中*/
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bannerbottom > .bannerbottomnavcontainer > .bannerbottomnav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 75px;
  background-color: #ffffff;
}
</style>