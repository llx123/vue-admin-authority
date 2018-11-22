<template>
  <div>
    {{path}}
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="postcss" scoped>

</style>
