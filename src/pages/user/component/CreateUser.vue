<template>
  <el-dialog
    title="Create User"
    :visible.sync="dialogVisible"
    width="35%"
    :before-close="handleClose">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="NickName" prop="nickName">
        <el-input v-model="ruleForm.nickName"></el-input>
      </el-form-item>
      <el-form-item label="Gender" prop="gender" required>
        <el-radio-group v-model="ruleForm.gender">
          <el-radio label="Male"></el-radio>
          <el-radio label="Female"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input-number v-model="ruleForm.age" :min="1" :max="99" label="Age"></el-input-number>
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email" required>
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address" required>
        <el-select v-model="ruleForm.address" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="changeUser(false)">取 消</el-button>
      <el-button type="primary" @click="changeUser(false)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        age: 18
      },
      rules: {
        name: [
          { required: true, message: '请输入Name', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入NickName', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        age: [
          { required: true, message: '请输入Age', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Phone不能为空'},
          { type: 'number', message: 'Phone必须为数字值'}
        ]
      }
    }
  },
  props: ['dialogVisible'],
  methods: {
    changeUser(b) {
      this.$emit('changeUser',b)
    },
    handleClose() {
      this.changeUser(false)
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
