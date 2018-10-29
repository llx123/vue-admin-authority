<template>
  <div class="login-container">
    <p @click="doLogin">11</p>
  </div>
</template>

<script>
export default {
  name: 'Login',  
  data() {    
    return {
      
    }
  },
  created() {
    
  },
  mounted() {
    setTimeout(()=>{
      
    })
  },
  destroyed() {
    
  },
  methods: {
    doLogin() {
      this.axios.get('/login/logout', {
        username: '222',
        password: '222'
      }).then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
:root {
  --red: red
}
p {
  color: var(--red)
}
</style>
