<template>
  <div class="case">
    <div class="case-intro">项目介绍</div>
    <div class="case-pic">项目图片</div>
    <div id="options-bound" class="slider glide glide--swipeable glide--ltr glide--slider">
      <div class="slider__track glide__track" data-glide-el="track">
        <ul class="slider__slides glide__slides">
          <li class="glide__slide">
            <img src="../assets/imgs/main1.jpg" alt />
          </li>
          <li class="glide__slide">
            <img src="../assets/imgs/main1.jpg" alt />
          </li>
          <li class="glide__slide">
            <img src="../assets/imgs/main1.jpg" alt />
          </li>
          <li class="glide__slide">
            <img src="../assets/imgs/main1.jpg" alt />
          </li>
          <li class="glide__slide">
            <img src="../assets/imgs/main1.jpg" alt />
          </li>
        </ul>
      </div>
      <!-- glide 控制按钮 -->
      <div class="glide__arrows" data-glide-el="controls">
        <button
          class="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          style="background:rgba(200, 200, 200, .5)"
        >&lt;</button>
        <button
          class="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          style="background:rgba(200, 200, 200, .5)"
        >&gt;</button>
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
    initsmbanner() {
      // 创建glide实例
      const smglide = new Glide("#options-bound", {
        bound: true,
        focusAt: "center",
        startAt: 1,
        perView: 3
      });

      // 获取轮播标题实例
      const captionsEl = document.querySelectorAll(".glide__slide");
      const imgbg = document.querySelectorAll(".case-pic");
      const caseintro = document.querySelectorAll(".case-intro");
      // 当轮播加载完成后，每个轮播完成时，加载标题动画
      smglide.on(["mount.after", "run.after"], () => {
        // 获取当前展示的轮播index
        const caption = captionsEl[smglide.index];
        if (smglide.index == 0) {
          imgbg[0].style.backgroundColor = "blue";
          caseintro[0].style.backgroundColor = "blue";
        } else if (smglide.index == 1) {
          imgbg[0].style.backgroundColor = "red";
          caseintro[0].style.backgroundColor = "red";
        } else if (smglide.index == 2) {
          imgbg[0].style.backgroundColor = "black";
          caseintro[0].style.backgroundColor = "black";
        } else if (smglide.index == 3) {
          imgbg[0].style.backgroundColor = "yellow";
          caseintro[0].style.backgroundColor = "yellow";
        } else if (smglide.index == 4) {
          imgbg[0].style.backgroundColor = "pink";
          caseintro[0].style.backgroundColor = "pink";
        }
      });
      smglide.mount();
    }
  },
  mounted() {
    this.initsmbanner();
  }
};
</script>
<style scoped>
.case {
  width: 1200px;
  height: 600px;
  /* margin: 0 auto; */
  /* border: 1px solid red; */
  position: relative;
}

.slider {
  position: absolute;
  top: 370px;
  left: 90px;
  width: 500px;
  height: 150px;
  /* border: 1px solid red; */
}

.case-pic {
  position: absolute;
  left: 560px;
  top: 45px;
  width: 600px;
  height: 500px;
  transition: all 2s;
  /* border: 1px solid red; */
}

.case-intro {
  position: absolute;
  left: 90px;
  top: 70px;
  width: 400px;
  height: 200px;
  transition: all 2s;
  /* border: 1px solid red; */
}
</style>