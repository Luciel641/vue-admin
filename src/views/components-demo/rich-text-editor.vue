<template>
  <div>
    <div class="page-header">
      <div class="title">富文本编辑器</div>
      <div class="content"></div>
    </div>
    <div class="page-card">
      <tinymce v-model="content" :height="300" />
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'RichTextEditor',
  components: { Tinymce },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
