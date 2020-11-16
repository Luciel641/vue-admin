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
      this.xData = [
        '09:52',
        '09:57',
        '10:02',
        '10:07',
        '10:12',
        '10:17',
        '10:22',
        '10:27',
        '10:32',
        '10:37',
        '10:42',
        '10:47',
        '10:52'
      ]
      this.y1Data = [
        45,
        169,
        400,
        285,
        316,
        148,
        150,
        234,
        158,
        100,
        266,
        250,
        120
      ]
      this.y2Data = [15, 39, 152, 94, 102, 86, 39, 38, 95, 30, 86, 90, 40]
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#D7DDE4'
            }
          },
          axisTick: {
            alignWithLabel: !0,
            lineStyle: {
              color: '#D7DDE4'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#7F8B9C'
            }
          },
          splitLine: {
            show: !1,
            lineStyle: {
              color: '#F5F7F9'
            }
          },
          data: this.xData,
          boundaryGap: !1
        },
        yAxis: {
          axisLine: {
            show: !1
          },
          axisTick: {
            show: !1
          },
          axisLabel: {
            textStyle: {
              color: '#7F8B9C'
            }
          },
          splitLine: {
            show: !0,
            lineStyle: {
              color: '#F5F7F9'
            }
          },
          type: 'value'
        },
        legend: {
          data: ['浏览量（PV）', '访客数（UV）'],
          x: 'right'
        },
        series: [
          {
            data: this.y1Data,
            name: '浏览量（PV）',
            type: 'line',
            tooltip: !0,
            smooth: !0,
            symbol: 'none',
            areaStyle: {
              normal: {
                opacity: 0.2
              }
            }
          },
          {
            data: this.y2Data,
            name: '访客数（UV）',
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
          left: 20,
          right: 20,
          bottom: 20,
          top: 40,
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
