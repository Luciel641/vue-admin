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
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
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
        series: [
          {
            data: [
              9728,
              4578,
              12768,
              4982,
              9665,
              5489,
              3288,
              13422,
              6753,
              7463,
              8162,
              6545
            ],
            type: 'bar',
            tooltip: !0,
            smooth: !0,
            symbol: 'none',
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#69cdff'
                  },
                  {
                    offset: 0.5,
                    color: '#3eb3f7'
                  },
                  {
                    offset: 1,
                    color: '#1495eb'
                  }
                ])
              }
            }
          }
        ],
        color: ['#1495EB', '#00CC66', '#F9D249', '#ff9900', '#9860DF'],
        grid: {
          left: 16,
          right: 25,
          bottom: 5,
          top: 20,
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
