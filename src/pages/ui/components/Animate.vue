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
    <div class="bottomView" ref="bottomContent">
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
      topWidth: 600,
      bottomWidth: 588,
      canBtnClick: true,
      canImgClick: true,
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
      let oUl = this.$refs.oUl;
      let oOl = this.$refs.oOl;
      let topWidth = this.topWidth;
      let boWidth = oOl.children[0].offsetWidth * 1.125;

      if (val > oldVal && val - oldVal === 1) {
        this.animate(oOl, { left: -oldVal * boWidth });
        this.animate(
          oUl,
          { left: -val * topWidth },
          {
            complete: () => {
              if (val === this.len + 1) {
                this.iNow = 1;
              }
            }
          }
        );
      } else if (Math.abs(oldVal - val) === this.len) {
        oUl.style.left = -topWidth * val + "px";
        oOl.style.left = -boWidth * (val - 1) + "px";
      } else if (val < oldVal && val - oldVal === -1) {
        if (val === 0) {
          oOl.style.left = -boWidth * this.len + "px";
          this.animate(oOl, { left: -boWidth * (this.len - 1) });
        } else {
          this.animate(oOl, { left: -boWidth * (val - 1) });
        }
        this.animate(
          oUl,
          { left: -val * topWidth },
          {
            complete: () => {
              if (val === 0) {
                this.iNow = this.len;
              }
            }
          }
        );
      }
      for (let i = 0; i < oOl.children.length; i++) {
        if (i !== val) {
          oOl.children[i].style.border = "none";
        }
      }
      if (val === 0) {
        oOl.children[this.len].style.border = "2px solid red";
      }
      oOl.children[val].style.border = "2px solid red";
    }
  },
  methods: {
    initSet() {
      let oUl = this.$refs.oUl;
      let aLi1 = oUl.children;
      let oOl = this.$refs.oOl;
      let aLi2 = oOl.children;
      let iNow = this.iNow;
      let topWidth = this.$refs.topContent.offsetWidth;
      let bottomWidth = this.$refs.bottomContent.offsetWidth;

      this.topWidth = topWidth;
      this.bottomWidth = bottomWidth;

      if (aLi1.length === this.len) {
        let oLi1 = aLi1[0].cloneNode(true);
        let oLi2 = aLi1[aLi1.length - 1].cloneNode(true);
        oUl.appendChild(oLi1);
        oUl.insertBefore(oLi2, aLi1[0]);

        let oLi3 = aLi2[0].cloneNode(true);
        let oLi4 = aLi2[1].cloneNode(true);
        let oLi5 = aLi2[aLi2.length - 1].cloneNode(true);

        oOl.appendChild(oLi3);
        oOl.appendChild(oLi4);
        oOl.insertBefore(oLi5, aLi2[0]);

        for (let i = 0; i < aLi2.length; i++) {
          aLi2[i].nowIndex = i;
        }
      }

      oUl.style.width = topWidth * aLi1.length + "px";
      oUl.style.left = -topWidth * iNow + "px";

      oOl.style.width = (bottomWidth * aLi2.length) / 3 + "px";
      oOl.style.left = -(iNow - 1) * oOl.children[0].offsetWidth * 1.125 + "px";

      oOl.children[iNow].style.border = "2px solid red";
      oOl.addEventListener("click", e => {
        if (
          e.target &&
          e.target.parentNode.nodeName.toUpperCase() === "LI" &&
          this.canImgClick &&
          this.canBtnClick
        ) {
          if (this.iNow === e.target.parentNode.nowIndex) {
            return false;
          } else {
            this.iNow = e.target.parentNode.nowIndex;
            this.canImgClick = false;
            setTimeout(() => {
              this.canImgClick = true;
            }, 550);
          }
        }
      });
    },
    btnClick(num) {
      if (
        this.iNow > this.len ||
        this.iNow <= 0 ||
        !this.canBtnClick ||
        !this.canImgClick
      ) {
        return false;
      }
      this.iNow += num;
      this.canBtnClick = false;
      setTimeout(() => {
        this.canBtnClick = true;
      }, 550);
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
  },
  destroyed() {
    this.$refs.oOl.removeEventListener("click");
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
    bottom: 13%;
    background: #ccc;
    z-index: 666;
    cursor: pointer;
    text-decoration: none;
  }
  & .pre {
    left: -2%;
  }
  & .next {
    right: -0.3%;
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
  overflow: hidden;
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
  & ol {
    & li {
      width: 10%;
      margin-right: 1.25%;
      box-sizing: border-box;
      cursor: pointer;
    }
    & li:last-child {
      margin-right: 0;
    }
  }
}
</style>