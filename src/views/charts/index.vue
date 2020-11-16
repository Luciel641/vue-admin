<template>
  <div>
    <!-- 访问量-折线图 -->
    <el-card shadow="never" class="visitChart">
      <div slot="header">
        <i class="el-icon-s-marketing" style="color: #69c0ff"></i>
        最近一小时访问情况
      </div>
      <el-row :gutter="16">
        <el-col :md="24">
          <visit-chart-line height="240px" />
        </el-col>
      </el-row>
    </el-card>

    <!-- 访问量-柱状图 -->
    <el-card shadow="never" class="visitChart">
      <div slot="header">
        <i class="el-icon-s-data" style="color: #69c0ff"></i> 访问量
      </div>
      <el-row :gutter="16">
        <el-col :md="24">
          <h4>访问量趋势</h4>
          <visit-chart height="240px" />
        </el-col>
      </el-row>
    </el-card>

    <!-- 热门搜索 -->
    <el-card shadow="never" class="searchChart">
      <div slot="header">
        <i class="el-icon-search" style="color: #69c0ff"></i> 热门搜索
      </div>
      <el-row :gutter="16">
        <el-col :span="12">
          <div class="number-info">
            <div class="title">
              <span>搜索用户数</span>
              <el-tooltip content="指标说明" placement="top">
                <i class="el-icon-warning-outline mg-l-5"></i>
              </el-tooltip>
            </div>
            <div class="value">
              <span class="total">123456</span>
              <span class="sub-total">
                123 <i class="el-icon-caret-bottom text-success"></i>
              </span>
            </div>
          </div>
          <search-user-chart height="80px" />
        </el-col>
        <el-col :span="12">
          <div class="number-info">
            <div class="title">
              <span>人均搜索次数</span>
              <el-tooltip content="指标说明" placement="top">
                <i class="el-icon-warning-outline mg-l-5"></i>
              </el-tooltip>
            </div>
            <div class="value">
              <span class="total">21</span>
              <span class="sub-total">
                3 <i class="el-icon-caret-top text-danger"></i>
              </span>
            </div>
          </div>
          <search-count-chart height="80px" />
        </el-col>
      </el-row>
    </el-card>

    <el-row class="visit-percent" :gutter="16">
      <!-- 访问来源 -->
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header">
            <i class="el-icon-s-help" style="color: #69c0ff"></i> 访问来源
          </div>
          <pie-chart-ring />
        </el-card>
      </el-col>

      <!-- 本月目标 -->
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header">
            <i class="el-icon-s-help" style="color: #69c0ff"></i> 本月目标
          </div>
          <gauge-chart />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VisitChart from '@/components/charts/VisitChart'
import VisitChartLine from '@/components/charts/VisitChartLine'
import SearchUserChart from '@/components/charts/SearchUserChart'
import SearchCountChart from '@/components/charts/SearchCountChart'
import PieChartRing from '@/components/charts/PieChartRing'
import GaugeChart from '@/components/charts/GaugeChart'

export default {
  name: 'Charts',
  components: {
    VisitChart,
    VisitChartLine,
    SearchUserChart,
    SearchCountChart,
    PieChartRing,
    GaugeChart
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  ::v-deep .el-card__header {
    font-size: 16px;
  }
}
.visitChart {
  margin-bottom: 15px;
  .el-col {
    margin-bottom: 15px;
  }
  .ranking {
    .el-avatar {
      width: 22px;
      height: 22px;
      line-height: 22px;
    }
    li:nth-child(-n + 3) {
      .el-avatar {
        background-color: #69c0ff;
      }
    }
  }
}
.searchChart {
  margin-bottom: 15px;
  .number-info {
    .title {
      margin-bottom: 10px;
      color: #666;
    }
    .total {
      margin-right: 20px;
      font-size: 24px;
      color: #333;
    }
    .sub-total {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
