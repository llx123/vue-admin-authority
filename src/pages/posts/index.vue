<template>
  <section class="post">
    <Tab />
  </section>
</template>

<script>
import { Tab } from './component'
export default {
  data() {
    return {

    }
  },
  components: {
    Tab
  }
}
</script>

<style lang="postcss" scoped>
  .post {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    text-align: left;
  }
</style>
