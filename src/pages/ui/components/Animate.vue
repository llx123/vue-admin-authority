<template>
  <div class="slider">
    <a @click="btnClick(-1)" class="btn pre">&lt;</a>
    <a @click="btnClick(1)" class="btn next">&gt;</a>
    <div class="topView" ref="topContent">
      <ul class="clear" ref="oUl">
        <li v-for="(item,index) in imgList" :key="index">
          <img :src="item.src" alt>
        </li>
      </ul>
    </div>
    <div class="bottomView">
      <ol class="clear" ref="oOl">
        <li v-for="(item,index) in imgList" :key="index">
          <img :src="item.src" alt>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

export default {
  data() {
    return {
      iNow: 1,
      topWdith: 600,
      len: 6,
      imgList: [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
        { src: img6 }
      ]
    };
  },
  mounted() {
    this.initSet();
    window.addEventListener("resize", () => {
      this.initSet();
    });
  },
  watch: {
    iNow(val, oldVal) {
      console.log(val, oldVal);
      let oUl = this.$refs.oUl;
      let oOl = this.$refs.oOl;
      let topWdith = this.topWdith;

      if (val > oldVal && val - oldVal === 1) {
        this.animate(
          oUl,
          { left: -val * topWdith },
          {
            complete: () => {
              if (val === this.len + 1) {
                this.iNow = 1;
              }
            }
          }
        );
      } else if (Math.abs(oldVal - val) === this.len) {
        oUl.style.left = -topWdith * val + "px";
      } else if (val < oldVal && val - oldVal === -1) {
        this.animate(
          oUl,
          { left: -val * topWdith },
          {
            complete: () => {
              if (val === 0) {
                this.iNow = this.len;
              }
            }
          }
        );
      }
    }
  },
  methods: {
    initSet() {
      let oUl = this.$refs.oUl;
      let aLi1 = oUl.children;
      let oOl = this.$refs.oOl;
      let aLi2 = oOl.children;
      let iNow = this.iNow;
      let topWdith = this.$refs.topContent.offsetWidth;
      this.topWdith = topWdith;
      if (aLi1.length === this.imgList.length) {
        let oLi1 = aLi1[0].cloneNode(true);
        let oLi2 = aLi1[aLi1.length - 1].cloneNode(true);
        oUl.appendChild(oLi1);
        oUl.insertBefore(oLi2, aLi1[0]);
      }

      oUl.style.width = topWdith * aLi1.length + "px";
      oUl.style.left = -topWdith * iNow + "px";
    },
    btnClick(num) {
      if (this.iNow > this.len || this.iNow <= 0) {
        return false;
      }
      this.iNow += num;
    },
    /*
     * 参数说明:
     * obj: 运动对象
     * json(json形式): 需要修改的属性
     * options(json形式):
     *       duration: 运动时间
     *       easing: 运动方式（匀速、加速、减速）
     *       complete: 运动完成后执行的函数
     */
    animate(obj, json, options) {
      var options = options || {};
      var duration = options.duration || 500;
      var easing = options.easing || "linear";
      var start = {};
      var dis = {};
      for (var name in json) {
        start[name] = parseFloat(this.getStyle(obj, name));
        dis[name] = json[name] - start[name];
      }
      var count = Math.floor(duration / 30);
      var n = 0;
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        if (n > count) {
          clearInterval(obj.timer);
          options.complete && options.complete();
        } else {
          for (var name in json) {
            switch (easing) {
              case "linear":
                var a = n / count;
                var cur = start[name] + dis[name] * a;
                break;
              case "ease-in":
                var a = n / count;
                var cur = start[name] + dis[name] * a * a * a;
                break;
              case "ease-out":
                var a = 1 - n / count;
                var cur = start[name] + dis[name] * (1 - a * a * a);
                break;
            }
            if (name == "opacity") {
              obj.style.opacity = cur;
              obj.style.filter = "alpha(opacity=" + cur * 100 + ")";
            } else {
              obj.style[name] = cur + "px";
            }
          }
        }
        n++;
      }, 30);
    },
    //获取非行间样式
    getStyle(obj, sName) {
      return (obj.currentStyle || getComputedStyle(obj, false))[sName];
    }
  }
};
</script>

<style lang="postcss" scoped>
.slider {
  width: 62.5%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 50px 0;
  & .btn {
    width: 30px;
    height: 60px;
    line-height: 60px;
    position: absolute;
    background: #ccc;
    z-index: 666;
    cursor: pointer;
    text-decoration: none;
  }
  & .pre {
    left: 0;
  }
  & .next {
    right: 0;
  }
  & .topView,
  & .bottomView {
    position: relative;
    & img {
      width: 100%;
    }
    & .clear::after,
    & .clear::after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
.topView,
.bottomView {
  margin: 0 auto;
  & ul,
  & ol {
    margin: 0;
    padding: 0;
    position: relative;
    & li {
      list-style: none;
      float: left;
      font-size: 0;
    }
  }
}
.topView {
  width: 100%;
  & ul {
    & li {
      width: 12.5%;
    }
  }
}
.bottomView {
  width: 88%;
}
</style>