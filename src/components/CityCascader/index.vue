<template>
  <el-cascader
    v-model="checkedValue"
    v-bind="$props"
    :options="city"
  ></el-cascader>
</template>

<script>
// @input.native="$emit('input', $event.garget.value)"
import { Cascader } from 'element-ui'
import { city } from './city'

export default {
  name: 'CityCascater',
  props: {
    ...Cascader.props,
    level: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      city: [],
      checkedValue: []
    }
  },
  watch: {
    checkedValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  mounted() {
    this.city = this.filterCity(city, this.level)
  },
  methods: {
    filterCity(city, level) {
      if (level < 3) {
        return city.map(item => {
          let { value, label, children } = item
          if (children && children.length && level > 1) {
            item.children = this.filterCity(children, level - 1)
            return item
          }
          return { value, label }
        })
      }
      return city
    }
  }
}
</script>

<style lang="scss" scoped></style>
