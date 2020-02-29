<template>
  <div>
    <Gheader />
    <!-- 内容容器 -->
    <div class="content-wrapper">
      <!-- 内容区域-南京市简介 -->
      <section>
        <div class="njprofile">
          <!-- 南京简介左侧 -->
          <div class="njleft">
            <!-- 头部区域 -->
            <div class="njleft-tit">
              <p style="color:#00ADDA">南京介绍</p>
              <p class="comtit">了解南京市</p>
            </div>
            <!-- 内容区域 -->
            <div class="njleft-cont">
              <p>
                南京，简称“宁”,古称金陵、建康，是江苏省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽。
                截至2018年，全市下辖11个区，总面积6587平方千米，建成区面积971.62平方千米，常住人口843.62万人，城镇人口695.99万人，城镇化率82.5%，是长三角及华东的特大城市。
              </p>
              <p>
                南京地处中国东部、长江下游、濒江近海，是中国东部战区司令部驻地，国家物流枢纽，长江国际航运物流中心，长三角辐射带动中西部地区发展的国家重要门户城市，
                也是东部沿海经济带与长江经济带战略交汇的重要节点城市。
              </p>
              <p>
                南京是首批国家历史文化名城，中华文明的重要发祥地，长期是中国南方的政治、经济、文化中心，历史上曾数次庇佑华夏之正朔，在中国历史上具有特殊地位和价值。
                南京早在100-120万年前就有古人类活动，35-60万
                年前已有南京猿人在汤山生活，有着7000多年文明史、近2600年建城史和近500年的建都史，有“六朝古都"、“十朝都会”之称。
                です。専攻は日本語ですが、興味があって大学の時自分でコンピューターも自習していました。卒業した後、そのまま直接今の会社に入ったんです。
              </p>
            </div>
          </div>
          <!-- 南京简介右侧 -->
          <div class="njright">
            地图
          </div>
        </div>
        <div class="njjpprofile">
          <div class="njjpprofile-warp">
            <div class="njjpprofile-left">
              <div class="njjpcont-left">
                <p>
                  <font color="#a0522d">東京<->上海</font> 
                <p>3時間</p>
                </p>
                <p>
                  <font color="#a0522d">上海<->南京 </font>
                  <p>高鐵：１H</p>
                </p>
                <p>
                  <font color="#a0522d">南京<->北京</font>
                    <p>高鐵：3.5H</p>
                </p>
              </div>
              <div class="njjpcont-left-right">
                <p>
                  東京成田<->南京
                </p>
                <p>
                  関西大阪<->南京
                </p>
                <p>
                  静岡<->南京
                 <p>福岡<->南京</p> 
                </p>
                <p>
                  成田週　4便（火木金日）
                </p>
                <p>
                  関西週　4便（火水金土）
                </p>
                <p>
                  静岡週　2便（火土曜日）
                </p>
                <p>
                  福岡週　3便（月木日）
                </p>
              </div>
            </div>
            <div class="njjpprofile-right">
              <div class="njjpcont-right">
                <p>
                  南京は中国有名な六朝古都市
                </p>
                <p>
                  今は江蘇省の省都
                </p>
                <p>
                  中国初の「軟件名城」（工信部）（ソフトウェアCITY）,ITエンジニア５０万人以上
                </p>
                <p>
                  HUAWEI、ZTE、ALIBABA、富士通、XIAOMI、TENCENT、JDなど大手IT企業の開発センター所在地
                </p>
                <p>
                  住みやすい都市✓北京、上海より物価安く
                </p>
              </div>
              <div class="njjpcont-right-marks">
            </div>
            　<p>大手企業開発センター所在地‐南京</p>
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
    return {};
  }
};
</script>
<style scoped>
     * {
        margin: 0;
        padding: 0;
      }

      /* 去除p标签原有的样式 */
      p {
        margin: 0;
        padding: 0;
      }

      /* 伪类元素画线 */
      .comtit {
        text-align: left;
        font-size: 30px;
        position: relative;
        margin-top: 10px;
      }

      .comtit::after {
        content: "";
        position: absolute;
        left: 12%;
        bottom: 0;
        margin-left: -70px;
        margin-bottom: -25px;
        width: 40px;
        height: 3px;
        background: #01a7db;
      }

      /* 南京简介容器 */
      .njprofile {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 0 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      /* 南京简介左侧 */
      .njprofile > .njleft {
        width: 600px;
        padding: 20px;
        /*文字对齐*/
        text-align: justify;
        text-justify: inter-ideograph;
      }

      .njprofile > .njleft > .njleft-cont {
        padding-top: 50px;
      }

      .njprofile > .njleft > .njleft-cont > p {
        line-height: 30px;
        text-indent: 32px;
      }

      /* 南京简介右侧 */
      .njprofile > .njright {
        width: 600px;
        height: 550px;
        border: 1px solid #000;
      }

      /* 日语介绍 */
      .njjpprofile {
        width: 100%;
        background: #f5fafe;
      }

      .njjpprofile > .njjpprofile-warp {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 0 30px;
        border: 1px solid red;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .njjpprofile > .njjpprofile-warp > .njjpprofile-left {
        width: 500px;
        height: 350px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid red;
      }

      .njjpprofile > .njjpprofile-warp > .njjpprofile-left > .njjpcont-left {
        width: 200px;
        border: 1px solid red;
      }

      .njjpprofile > .njjpprofile-warp > .njjpprofile-left > .njjpcont-left-right {
        width: 200px;
        height: 250px;
        border: 1px solid red;
      }

      .njjpprofile > .njjpprofile-warp > .njjpprofile-right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        width: 600px;
        height: 350px;
        border: 1px solid red;
      }

      .njjpprofile>.njjpprofile-warp>.njjpprofile-right>.njjpcont-right {
        line-height: 30px;
      }

      .njjpprofile>.njjpprofile-warp>.njjpprofile-right>.njjpcont-right-marks {
        border: 1px solid #000;
        width: 600px;
        height: 50px;
      }
</style>