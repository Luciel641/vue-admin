<template>
  <image-cropper
    :src="src"
    :visible.sync="isVisible"
    preview=".preview"
    :view-mode="1"
    drag-mode="move"
    :aspect-ratio="1 / 1"
    :guides="false"
    :center="false"
    :highlight="false"
    :auto-crop-area="1"
    :crop-box-movable="false"
    :crop-box-resizable="false"
    :min-canvas-height="200"
    class="image-cropper"
    v-on="$listeners"
  >
    <div slot="preview" class="preview-container">
      <div class="preview"></div>
      <div class="preview circle"></div>
    </div>
  </image-cropper>
</template>

<script>
import ImageCropper from './index'

let { src, visible } = ImageCropper.props

export default {
  name: 'AvatarCropper',
  components: { ImageCropper },
  props: {
    ...{ src, visible }
  },
  computed: {
    isVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image-cropper {
  .preview-container {
    margin-left: 20px;
  }
}
.preview {
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  overflow: hidden;
  + .preview {
    margin-top: 10px;
  }
  &.circle {
    border-radius: 50%;
  }
}
</style>
