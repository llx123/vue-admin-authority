<template>
  <section class="buttons">
    <el-row>
      <el-col :span="12">
        <h3>基础用法</h3>
        <el-row :gutter="5">
          <el-col :span="10">
            <el-select v-model="type" placeholder="请选择类型">
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="14" style="line-height: 40px">
            <el-radio-group v-model="radio">
              <el-radio :label="'plain'">朴素按钮</el-radio>
              <el-radio :label="'round'">圆角按钮</el-radio>
              <el-radio :label="'disabled'">禁用按钮</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">          
          <el-button :type="type"
           :plain="radio==='plain'"
           :round="radio==='round'"
           :disabled="radio==='disabled'">{{renderType(type)}}</el-button>          
        </el-row>      
      </el-col>
      <el-col :span="12">
        <h3>图标按钮</h3>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <h3>文字按钮</h3>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
      </el-col>
      <el-col :span="12">
         <h3>按钮组</h3>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      type: 'primary',
      types: [{label: 'Primary',value: 'primary'}, {label: 'Success',value: 'success'}, {label: 'Info',value: 'info'}, {label: 'Warning',value: 'warning'}, {label: 'Danger',value: 'danger'}],
      radio: ''
    }
  },
  methods: {
    renderType(type) {
      switch(type) {
        case 'primary':
          return '默认按钮';
        case 'success':
          return '成功按钮';        
        case 'info':
          return '信息按钮';
        case 'warning':
          return '警告按钮';
        case 'danger':
          return '危险按钮';
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  .buttons {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    text-align: left;
  }  
</style>
