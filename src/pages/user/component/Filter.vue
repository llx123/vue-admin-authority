<template>
  <section>
    <el-form :rules="rules" :model="formInline" ref="forms" :inline="true" class="demo-form-inline">
      <el-form-item prop="user">
        <el-input v-model="formInline.user" placeholder="Search Name">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="region">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="CreateTime" prop="createTime">
        <el-date-picker
          v-model="formInline.createTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('forms')">Search</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('forms')">Reset</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onCreate">Create</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        createTime: []
      },
      rules: {
        user: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success('submit')
        } else {
          this.$message.error('something went wrong!')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onCreate() {
      this.$emit('changeUser',true)
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
