<template>
  <section>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Publised" name="first">
        <Published :tableData="tableData" :loading="loading"/>
        <el-row type="flex" justify="center">
          <el-pagination
            layout="total, prev, pager, next"
            :total="100">
          </el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="Unpublished" name="second">
        <Un-published :tableData="tableData" :loading="loading"/>
        <el-row type="flex" justify="center">
          <el-pagination
            layout="total, prev, pager, next"
            :total="5">
          </el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import Published from './Published'
import UnPublished from './UnPublished'
export default {
  data() {
    return {
      activeName: this.$route.query.status || 'first',
      loading: true,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  },
  components: {
    Published, UnPublished
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false
    }, 500)
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({
        path: 'posts',
        query: {
          status: this.activeName
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
