<template>
  <div>
    <div class="page-header">
      <div class="title">头像上传</div>
      <div class="content">
        上传用户头像，上传前可以进行裁剪
      </div>
    </div>
    <div class="page-card">
      <div class="avatar-upload-container">
        <el-upload
          ref="avatarUpload"
          :action="action"
          accept="image/jepg,image/png"
          :file-list="fileList"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="handleChange"
          class="avatar-uploader"
        >
          <img v-if="cropUrl" :src="cropUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="action-btns">
          <!-- <el-button @click="showCropper = true">裁剪</el-button> -->
          <el-button type="primary" size="medium" @click="upload"
            >上传</el-button
          >
        </div>
      </div>
      <avatar-cropper
        ref="avatarCropper"
        :src="imageUrl"
        :visible.sync="showCropper"
        @cropOver="cropOver"
      ></avatar-cropper>
    </div>
  </div>
</template>

<script>
import { uploadImage } from '@/api/upload'
import AvatarCropper from '@/components/ImageCropper/AvatarCropper'

export default {
  name: 'AvatarUpload',
  components: { AvatarCropper },
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
          this.imageUrl = URL.createObjectURL(file.raw)
          this.showCropper = true // 显示图片裁剪框
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
      const formData = new FormData()
      formData.append(
        'image',
        this.cropBlob,
        this.fileList[0].name.split('.')[0].jpg
      )
      formData.append('url', this.cropUrl)
      uploadImage(formData).then(res => {
        this.$message.success('上传成功')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-upload-container {
  width: 200px;
}
.avatar-uploader ::v-deep .el-upload {
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
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
.avatar {
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 50%;
}
.action-btns {
  margin-top: 20px;
  text-align: center;
}
</style>
