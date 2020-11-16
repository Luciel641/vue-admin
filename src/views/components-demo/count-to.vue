<template>
  <div class="page-card">
    <div style="width: 500px">
      <div class="count-to-wrap">
        <count-to
          ref="example"
          :start-val="_startVal"
          :end-val="_endVal"
          :duration="_duration"
          :decimals="_decimals"
          :separator="_separator"
          :prefix="_prefix"
          :suffix="_suffix"
          :autoplay="false"
          class="count-to"
        />
      </div>

      <el-form label-width="200px">
        <el-form-item label="起始值[startVal]">
          <el-input v-model.number="setStartVal" type="number"></el-input>
        </el-form-item>
        <el-form-item label="结束值[endVal]">
          <el-input v-model.number="setEndVal" type="number"></el-input>
        </el-form-item>
        <el-form-item label="持续时间[duration]">
          <el-input v-model.number="setDuration" type="number"></el-input>
        </el-form-item>
        <el-form-item label="小数位数[decimals]">
          <el-input v-model.number="setDecimals" type="number"></el-input>
        </el-form-item>
        <el-form-item label="千位分隔符[separator]">
          <el-input v-model="setSeparator"></el-input>
        </el-form-item>
        <el-form-item label="前缀[prefix]">
          <el-input v-model="setPrefix"></el-input>
        </el-form-item>
        <el-form-item label="后缀[suffix]">
          <el-input v-model="setSuffix"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="start">开始</el-button>
          <el-button type="success" @click="pauseResume">暂停/继续</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  name: 'CountToDemo',
  components: { CountTo },
  data() {
    return {
      setStartVal: 0,
      setEndVal: 2020,
      setDuration: 4000,
      setDecimals: 0,
      setSeparator: ',',
      setSuffix: ' rmb',
      setPrefix: '¥ '
    }
  },
  computed: {
    _startVal() {
      if (this.setStartVal) {
        return this.setStartVal
      } else {
        return 0
      }
    },
    _endVal() {
      if (this.setEndVal) {
        return this.setEndVal
      } else {
        return 0
      }
    },
    _duration() {
      if (this.setDuration) {
        return this.setDuration
      } else {
        return 100
      }
    },
    _decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert('digits argument must be between 0 and 20')
          return 0
        }
        return this.setDecimals
      } else {
        return 0
      }
    },
    _separator() {
      return this.setSeparator
    },
    _suffix() {
      return this.setSuffix
    },
    _prefix() {
      return this.setPrefix
    }
  },
  methods: {
    start() {
      this.$refs.example.start()
    },
    pauseResume() {
      this.$refs.example.pauseResume()
    }
  }
}
</script>

<style lang="scss" scoped>
.count-to-wrap {
  padding: 30px 0;
  text-align: center;
  .count-to {
    font-size: 50px;
    color: #409eff;
  }
}
</style>
