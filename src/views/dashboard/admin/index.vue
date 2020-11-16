<template>
  <div>
    <el-row :gutter="16" class="first-row">
      <el-col :sm="12" :lg="6">
        <el-card shadow="never" :body-style="bodyStyle">
          <div slot="header">访问量</div>
          <div class="card-body">
            <count-to
              :start-val="0"
              :end-val="56789"
              :duration="2000"
              class="count-to"
            />
          </div>
          <el-divider></el-divider>
          <div class="card-footer">
            <span>总访问量</span>
            <span>300万</span>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-card shadow="never" :body-style="bodyStyle">
          <div slot="header">销售额</div>
          <div class="card-body">
            <count-to
              :start-val="0"
              :end-val="45612"
              :duration="2000"
              class="count-to"
            />
          </div>
          <el-divider></el-divider>
          <div class="card-footer">
            <span>总销售额</span>
            <span>76万</span>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-card shadow="never" :body-style="bodyStyle">
          <div slot="header">订单量</div>
          <div class="card-body">
            <count-to
              :start-val="0"
              :end-val="12345"
              :duration="2000"
              class="count-to"
            />
          </div>
          <el-divider></el-divider>
          <div class="card-footer">
            <span>转化率</span>
            <span>30%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-card shadow="never" :body-style="bodyStyle">
          <div slot="header">新增用户</div>
          <div class="card-body">
            <count-to
              :start-val="0"
              :end-val="5674"
              :duration="2000"
              class="count-to"
            />
          </div>
          <el-divider></el-divider>
          <div class="card-footer">
            <span>总用户</span>
            <span>23456人</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="16" class="second-row">
      <el-col
        v-for="(item, index) in links"
        :key="index"
        :xs="8"
        :sm="4"
        :lg="3"
      >
        <router-link :to="item.url">
          <el-card shadow="hover">
            <i :class="item.icon" :style="{ color: item.iconColor }"></i>
            <p>{{ item.text }}</p>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <el-card shadow="never" class="visitChart">
      <div slot="header">
        <i class="el-icon-s-data" style="color: #69c0ff"></i> 访问量
      </div>
      <el-row :gutter="16">
        <el-col :md="16">
          <h4>访问量趋势</h4>
          <visit-chart height="240px" />
        </el-col>
        <el-col :md="8">
          <h4>访问量排行</h4>
          <div class="ranking">
            <ul>
              <li
                v-for="(item, index) in ranking"
                :key="item.name"
                class="mg-t-10"
              >
                <div class="flex">
                  <span class="flex flex-auto">
                    <el-avatar size="small" class="mg-r-5">
                      {{ index + 1 }}
                    </el-avatar>
                    <span>{{ item.name }}</span>
                  </span>
                  <span>{{ item.count }}</span>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-card>
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
  </div>
</template>

<script>
import VisitChart from './charts/VisitChart'
import SearchUserChart from './charts/SearchUserChart'
import SearchCountChart from './charts/SearchCountChart'
import CountTo from 'vue-count-to'

export default {
  name: 'DashboardAdmin',
  components: {
    VisitChart,
    SearchUserChart,
    SearchCountChart,
    CountTo
  },
  data() {
    return {
      bodyStyle: {
        padding: '10px'
      },
      links: [
        {
          icon: 'el-icon-s-custom',
          iconColor: '#69c0ff',
          text: '用户',
          url: ''
        },
        { icon: 'el-icon-s-data', iconColor: '#95de64', text: '分析', url: '' },
        {
          icon: 'el-icon-s-goods',
          iconColor: '#ff9c6e',
          text: '商品',
          url: ''
        },
        {
          icon: 'el-icon-s-order',
          iconColor: '#b37feb',
          text: '订单',
          url: ''
        },
        {
          icon: 'el-icon-s-ticket',
          iconColor: '#ffd666',
          text: '票据',
          url: ''
        },
        {
          icon: 'el-icon-s-opportunity',
          iconColor: '#5cdbd3',
          text: '消息',
          url: ''
        },
        {
          icon: 'el-icon-s-management',
          iconColor: '#ff85c0',
          text: '标签',
          url: ''
        },
        { icon: 'el-icon-s-tools', iconColor: '#ffc069', text: '配置', url: '' }
      ],
      ranking: [
        { name: '北京', count: '78945' },
        { name: '上海', count: '78945' },
        { name: '广东', count: '78945' },
        { name: '四川', count: '78945' },
        { name: '江苏', count: '78945' },
        { name: '云南', count: '78945' },
        { name: '福建', count: '78945' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  ::v-deep .el-card__header {
    font-size: 16px;
  }
}
.count-to {
  font-size: 32px;
  color: #333;
}
.first-row {
  .el-col {
    margin-bottom: 15px;
  }
  .el-divider {
    margin: 10px 0;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
}
.second-row {
  .el-col {
    margin-bottom: 15px;
  }
  .el-card {
    text-align: center;
    i {
      font-size: 24px;
      color: #666;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
    }
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
