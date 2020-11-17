<template>
  <el-dialog
    v-if="src"
    title="图片裁剪"
    :visible.sync="isVisible"
    width="460px"
    :close-on-click-modal="false"
  >
    <div class="cropper-content">
      <div>
        <vue-cropper ref="cropper" v-bind="$props" class="cropper" />
        <div class="tips">使用鼠标滚轮可以调整图片大小</div>
      </div>
      <slot name="preview"></slot>
    </div>
    <span slot="footer">
      <el-button @click="isVisible = false">取消</el-button>
      <el-button type="primary" @click="cropImage">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

// https://github.com/Agontuk/vue-cropperjs
// https://github.com/fengyuanchen/cropperjs

export default {
  name: 'ImageCropper',
  components: { VueCropper },
  props: {
    ...VueCropper.props,
    showCropper: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {
    isVisible: {
      get() {
        return this.showCropper
      },
      set(val) {
        this.$emit('update:showCropper', val)
      }
    }
  },
  watch: {
    src(url) {
      // 替换裁剪的图片
      if (this.$refs.cropper) {
        this.$nextTick(() => {
          console.log('cropper: ', this.$refs.cropper)
          console.log('url: ', url)
          this.$refs.cropper.replace(url)
        })
      }
    }
  },
  methods: {
    cropImage() {
      let canvas = this.$refs.cropper.getCroppedCanvas({
        // 设置一下图片参数，输出符合要求的图片
        width: 200,
        height: 200,
        imageSmoothingQuality: 'high'
      })
      let cropData = {}
      canvas.toBlob(blob => {
        cropData.blob = blob
      }, 'image/jpeg')
      cropData.dataURL = canvas.toDataURL('image/jpeg')
      this.$emit('cropOver', canvas)
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper-content {
  display: flex;
  overflow: hidden;
  .tips {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }
}
.cropper {
  width: 300px;
  height: 200px;
  overflow: hidden;
}
</style>
