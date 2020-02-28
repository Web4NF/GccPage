<template>
  <div>
    <Gheader />
    <!-- 内容容器 -->
    <div class="content-wrapper">
      <!-- 内容区域-母公司简介 -->
      <section>
        <h1>母公司简介</h1>
        <div class="father">
          <!-- 左侧 -->
          <div class="text-wrapper" v-for="items in listleft" :key="items">
            <i class="fa fa-search"></i>
            <div
              style="width:300px;height:50px;border-bottom:1px solid red;display:grid;grid-template-columns: 1fr 2fr ;align-items: center;"
            >
              <p style="justify-self: start;">{{items.name}}</p>
              <p style="justify-self: start;">{{items.text}}</p>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="text-wrapper" v-for="items in listright" :key="items">
            <i class="fa fa-search"></i>
            <div
              style="width:300px;height:50px;border-bottom:1px solid red;display:grid;grid-template-columns: 1fr 2fr ;align-items: center;"
            >
              <p style="justify-self: start;">{{items.name}}</p>
              <p style="justify-self: start;">{{items.text}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Gfooter />
  </div>
</template>
<script>
import "../assets/base.css";
export default {
  data() {
    return {
      listleft: [
        {
          name: "所在地",
          text: "中国江苏省南京市雨花台区软件大道11号花神大厦4楼"
        },
        { name: "资本金", text: "2000万" },
        { name: "电话番号", text: "025-84816252-8019" }
      ],
      listright: [
        { name: "社名", text: "南京迈特望科技股份有限公司" },
        { name: "従業員数", text: "近2000人" },
        { name: "设立", text: "2000年2月25日" }
      ]
    };
  }
};
</script>
<style scoped>
.father {
  display: grid;
  grid-template-columns: 2fr 2fr;
}
.text-wrapper {
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>