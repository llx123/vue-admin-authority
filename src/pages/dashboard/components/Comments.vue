<template>
  <div class="comments">
    <el-scrollbar class="card-scroll">
      <div class="comments">        
        <el-row class="container" v-for="(item,index) in rencentSales" :key="index">
          <el-col :span="4" class="left">
            <img :src="item['avatar']" :alt="item.name">
          </el-col>
          <el-col :span="20" class="right">
            <div class="name">{{item.name}}</div>
            <div class="assess">{{item.assess}}</div>
            <div class="date">{{item.date}}</div>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['rencentSales']
}
</script>

<style lang="postcss" scoped>
.comments {
  height: 200px;
  background-color: #fff;
  & .container {
    margin: 15px 0;
    & .left {

    }
    & .right {
      text-align: left;
      & .name {
        font-weight: 500;
        font-size: 16px;
        color: #474747;
      }
      & .assess {
        font-size: 14px;
        color: #757575;
      }
      & .date {
        padding-right: 20px;
        font-size: 12px;
        color: #a3a3a3;
        text-align: right;
      }
    }
  }  
}
</style>
