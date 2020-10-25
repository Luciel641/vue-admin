<template>
  <div class="header">
    <div class="navbar"></div>
    <tags-view></tags-view>
  </div>
</template>

<script>
import TagsView from './TagsView'

export default {
  name: 'AppHeader',
  components: { TagsView }
}
</script>

<style lang="scss" scoped></style>
