<template>
  <div>
    <navbar />
    <content-main />
  </div>
</template>

<script>
import { Navbar, ContentMain } from './components'
export default {
  data() {
    return {

    }
  },
  components: {
    Navbar,
    ContentMain,
  }
}
</script>

<style lang="postcss" scoped>

</style>
