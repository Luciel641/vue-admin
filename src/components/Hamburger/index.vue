<template>
  <div class="hamburger" @click="toggleClick">
    <i v-if="active" class="el-icon-s-fold"></i>
    <i v-else class="el-icon-s-unfold"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  font-size: 20px;
  cursor: pointer;
}
</style>
