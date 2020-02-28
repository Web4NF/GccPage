<template>
  <div class="pageHeaderWrapper">
    <Hheader />
    <div class="header_img_container">
      <img src="../../assets/imgs/Gheader-pic.jpg" alt />
    </div>
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader.vue";
export default {
  components: {
    Hheader: HomeHeader
  }
};
</script>
<style scoped >
.pageHeaderWrapper {
  height: 95vh;
}

.header_img_container {
  position: relative;
  top: -80px;
}

.header_img_container img {
  object-fit: cover;
  width: 100vw;
  height: 95vh;
}
</style>