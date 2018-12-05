<template>
  <div class="wea-quo">
    <el-col :sm="12" :md="24">
      <div class="weather">
        <div class="left">
          <div style="width:100px;height: 50px;background-image: url('//s5.sencdn.com/web/icons/3d_50/4.png');background-repeat: no-repeat;"></div>
        </div>
        <div class="right">
          011
        </div>
      </div>
    </el-col>
    <el-col :sm="12" :md="24">
      <div class="quote">
        <el-scrollbar class="card-scroll">
          <div style="width: 100%;">
            <p>Detail is the key to success, a principle that's approve by all, but wisely observed by very few, for detail is always easily overlooked, as my recent personal experience showed</p>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.wea-quo {
  & .weather {
    background-color: #8fc9fb;
    height: 165px;
    margin-bottom: 20px;
  }
  & .quote {
    height: 165px;
    background-color: #f797d6;
  }
}
</style>
