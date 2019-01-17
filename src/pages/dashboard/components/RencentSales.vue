<template>
  <div class="rencent-sales">
    <el-scrollbar class="card-scroll">
      <el-table
        :data="rencentSales"
        align="center"
        style="width: 100%">
        <el-table-column
          prop="name"
          align="center"
          label="NAME">
        </el-table-column>
        <el-table-column
          label="STATUS"          
          align="center">          
          <template slot-scope="scope">
            <span :style="renderStyle(scope.row.status)">{{ renderStatus(scope.row.status) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="DATE">
        </el-table-column>
        <el-table-column
          prop=""
          align="center"
          label="PRICE">
          <template slot-scope="scope">
            <span :style="renderStyle(scope.row.status)">{{ `$${scope.row.price}` }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['rencentSales'],  
  methods: {
    renderStatus(v) {
      switch(v) {
        case "0":
          return 'REJECT';
        case "1":
          return 'TAX';
        case "2":
          return 'SALE';
        case "3":
          return 'EXTENDED';
      }
    },
    renderStyle(v) {
      switch(v) {
        case "0":
          return "padding: 3px; background-color: rgb(248, 200, 46); color: #fff";
        case "1":
          return "padding: 3px; background-color: rgb(246, 152, 153); color: #fff";
        case "2":
          return "padding: 3px; background-color: rgb(100, 234, 145); color: #fff";
        case "3":
          return "padding: 3px; background-color: rgb(143, 201, 251); color: #fff";
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.rencent-sales {
  height: 200px;
  background-color: #fff;
}
</style>
