<template>
  <div class="wea-quo">
    <el-col :sm="12" :md="24">
      <div class="weather">
        <div class="left">
          <div class="icon" style="background-image: url('//s5.sencdn.com/web/icons/3d_50/4.png')"></div>
          <p>{{weatherData.desc}}</p>
        </div>
        <div class="right">
          <span class="temperature">{{weatherData.temperature}}°</span>
          <p class="city">{{weatherData.city}}</p>
        </div>
      </div>
    </el-col>
    <el-col :sm="12" :md="24">
      <div class="quote">
        <el-scrollbar class="card-scroll">
          <div style="width: 100%;">
            <div class="inner">
              Detail is the key to success,
              a principle that's approve by all,
              but wisely observed by very few, for detail is always easily overlooked,
              as my recent personal experience showed!
            </div>
            <div class="footer">
              --By llx123              
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['weatherData']
}
</script>

<style lang="postcss" scoped>
.wea-quo {
  & .weather {
    height: 170px;
    padding: 24px;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    background-color: #8fc9fb;
    & .left {
      display: flex;
      flex-direction: column;
      width: 64px;
      padding-top: 25px;
      & .icon {
        width: 64px;
        height: 64px;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      & > p {
        margin-top: 16px;
      }
    }
    & .right {
      display: flex;
      flex-direction: column;
      width: 50%;
      & .temperature {
        height: 64px;
        font-size: 36px;
        text-align: right;
        color: #fff;
      }
      & .city {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: right;
      }
    }
  }
  & .quote {
    height: 170px;
    background-color: #f797d6;
    color: #fff;
    padding: 24px;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
    & .inner {
      text-overflow: ellipsis;
      word-wrap: normal;
      overflow: hidden;
      text-indent: 24px;
      line-height: 30px;
      text-align: left;
    }
    & .footer {
      position: relative;
      margin-top: 14px;
    }
  }
}
</style>
