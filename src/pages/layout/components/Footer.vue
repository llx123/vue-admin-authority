<template>
  <div class="footer">
    {{msg}}
  </div>  
</template>

<script>
export default {
  data() {
    return {
      msg: 'Create By 573381010@qq.com'
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  flex: 1;
  height: 30px;
  line-height: 30px;
  margin-top: 20px;
  padding-bottom: 30px;
}
</style>

