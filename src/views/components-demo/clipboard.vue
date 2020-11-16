<template>
  <div>
    <div class="page-header">
      <div class="title">剪贴板</div>
      <div class="content">
        点击按钮复制输入框的内容
      </div>
    </div>
    <div class="page-card">
      <el-input v-model="inputText">
        <el-button
          slot="append"
          type="primary"
          icon="el-icon-document-copy"
          @click="copy(inputText, $event)"
          >复制</el-button
        >
      </el-input>
    </div>
  </div>
</template>

<script>
import clipboard from '@/utils/clipboard'

export default {
  name: 'Clipboard',
  data() {
    return {
      inputText: '这是一段需要复制的文字'
    }
  },
  methods: {
    copy(text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style lang="scss" scoped></style>
