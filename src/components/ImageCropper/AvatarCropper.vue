<template>
  <div>
    <div class="avatar-upload-container" :style="{ width: size }">
      <el-upload
        ref="avatarUpload"
        :action="action"
        accept="image/jepg,image/png"
        :file-list="fileList"
        :show-file-list="false"
        :auto-upload="false"
        :disabled="disabled"
        :on-change="handleChange"
        class="avatar-uploader"
        :style="{ width: size, height: size }"
      >
        <img
          v-if="cropUrl || placeholder"
          :src="cropUrl || placeholder"
          class="avatar"
        />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div v-if="!disabled" class="action-btns">
        <el-button size="small" :disabled="!fileList.length" @click="upload">
          保存
        </el-button>
      </div>
    </div>
    <image-cropper
      ref="avatarCropper"
      :src="imageUrl"
      :show-cropper.sync="showCropper"
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
      @cropOver="cropOver"
    >
      <div slot="preview" class="preview-container">
        <div class="preview"></div>
        <div class="preview circle"></div>
      </div>
    </image-cropper>
  </div>
</template>

<script>
import ImageCropper from './index'
import { uploadImage } from '@/api/upload'

export default {
  name: 'AvatarCropper',
  components: { ImageCropper },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '200px'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      action: process.env.VUE_APP_BASE_API + '/upload/image',
      fileList: [],
      showCropper: false, // 显示裁剪框
      imageUrl: '', // 选择的原图
      cropUrl: '', // 裁剪后的图片
      cropBlob: null // 裁剪后的图片的blob
    }
  },
  methods: {
    handleChange(file, fileList) {
      if (file.status == 'ready') {
        const { raw } = file
        const isImage = ['image/jpeg', 'image/png'].indexOf(raw.type) > -1
        const isLt2M = raw.size / 1024 / 1024 < 2
        if (isImage && isLt2M) {
          this.fileList = fileList.slice(-1)
          // 这里不要使用 URL.createObjectURL(file.raw) ，cropper.js和moc.js这样使用会报错
          this.setImageUrl(raw)
        } else if (!isImage) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
        } else if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        } else {
          this.$message.error('请上传符合要求的图片')
        }
      }
    },
    // 确定裁剪
    cropOver(canvas) {
      this.cropUrl = canvas.toDataURL('image/jpeg')
      canvas.toBlob(blob => {
        this.cropBlob = blob
      }, 'image/jpeg')
    },
    // 点击上传按钮
    upload() {
      if (!this.fileList.length || !this.cropBlob) {
        this.$message.error('请选择图片')
        return false
      }
      // const formData = new FormData()
      // formData.append(
      //   'image',
      //   this.cropBlob,
      //   this.fileList[0].name.split('.')[0].jpg
      // )
      // formData.append('url', this.cropUrl)
      // 用mock.js模拟数据，仅测试时使用，实际生产环境需修改代码
      const formData = {
        url: this.cropUrl
      }
      uploadImage(formData).then(res => {
        this.fileList = []
        this.$emit('upload-success', {
          url: res.data.url
        })
        this.$message.success('上传成功（结果仅为模拟）')
      })
    },
    // 设置图片
    setImageUrl(file) {
      const fr = new FileReader()
      fr.onload = e => {
        this.imageUrl = e.target.result
        this.showCropper = true // 显示图片裁剪框
      }
      fr.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-upload-container {
  width: 200px;
}
.avatar-uploader ::v-deep .el-upload {
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.avatar-uploader ::v-deep .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100%;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.action-btns {
  margin-top: 15px;
  text-align: center;
}

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
