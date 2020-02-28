<template>
  <div class="active">
    <div class="newsglide">
      <!-- 轮播轨道 -->
      <div class="slider__track glide__track" data-glide-el="track">
        <!-- 所有轮播容器 -->
        <div class="glide__slides">
          <!-- 单个轮播内容 -->
          <div class="glide__slide" v-for="item in 5" :key="item">
            <p class="time-cont">2020-02-20</p>
            <p class="news-tit">GCC秉承"人才,效率,创造,服务"的经营理念</p>
            <p class="time-cont">稳步建立与客户的信赖关系,针对客户的多样性要求,提供更加高品质的服务,做到"双赢"</p>
            <p class="more">
              <i class="fa fa-chevron-circle-right"></i>
              查看更多
            </p>
          </div>
        </div>
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
    initnewsbanner() {
      const newsglide = new Glide(".newsglide", {
        bound: true,
        startAt: 1,
        perView: 3
      });
      newsglide.mount();
    }
  },
  mounted() {
    this.initnewsbanner();
  }
};
</script>
<style scoped>
.active {
  width: 1200px;
  height: 350px;
  background-color: #ffffff;
  position: relative;
  border-bottom: 4px solid #f2f2f2;
}

.newsglide {
  width: 1000px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.time-cont {
  font-size: 15px;
  color: var(--text-color-gray);
}

.news-tit {
  font-size: 17px;
  color: var(--text-color-dark);
  margin: 20px 0 30px 0;
}

.more {
  font-size: 17px;
  color: var(--primary-color);
  margin-top: 40px;
  cursor: pointer;
}
</style>