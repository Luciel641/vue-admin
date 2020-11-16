<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          type: 'category',
          show: !1
        },
        yAxis: {
          show: !1,
          type: 'value'
        },
        series: [
          {
            data: [120, 300, 150, 350, 70, 210, 130],
            type: 'line',
            tooltip: !0,
            smooth: !0,
            symbol: 'none',
            areaStyle: {
              normal: {
                opacity: 0.2
              }
            }
          }
        ],
        color: ['#1495EB', '#00CC66', '#F9D249', '#ff9900', '#9860DF'],
        grid: {
          left: -60,
          right: -20,
          bottom: -20,
          top: 0,
          containLabel: !0
        },
        tooltip: {
          trigger: 'axis'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
