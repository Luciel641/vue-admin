<template>
  <el-cascader v-bind="$props" :options="city"></el-cascader>
</template>

<script>
import { Cascader } from 'element-ui'
import { city } from './city'

export default {
  name: 'CityCascater',
  props: {
    ...Cascader.props
  },
  data() {
    return {
      city: []
    }
  },
  mounted() {
    this.city = city
  }
}
</script>

<style lang="scss" scoped></style>
