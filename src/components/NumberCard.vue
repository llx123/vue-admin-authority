<template>
  <div class="card-panel">
    <div class="card-panel-icon">            
      <i :class="iconType" :style="{color: iconColor}"></i>
    </div>
    <div class="card-panel-desc">
      <div class="card-panel-title">{{cardText}}</div>
      <div class="card-panel-number">
        <count-to :star-val="start" :end-val="end" :duration="duration"></count-to>
      </div>      
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  data() {
    return {

    }
  },
  components: { CountTo },
  props: ['start', 'end', 'duration', 'card-text', 'icon-type', 'icon-color']
}
</script>

<style lang="postcss" scoped>
.card-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  & .card-panel-icon {
    margin-right: 10px;
    font-size: 45px
  }
  & .card-panel-desc {
    text-align: left;
    & .card-panel-title {
      line-height: 16px;
      font-size: 16px;
      margin-bottom: 7px;
      height: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    & .card-panel-number{
      line-height: 32px;
      font-size: 24px;
      height: 32px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0;
    }
  }
}
</style>
