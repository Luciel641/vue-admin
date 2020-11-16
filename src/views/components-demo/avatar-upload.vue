<template>
  <div>
    <div class="page-header">
      <div class="title">头像上传</div>
      <div class="content">
        上传用户头像，上传前可以进行裁剪
      </div>
    </div>
    <div class="page-card">
      <avatar-cropper></avatar-cropper>
    </div>
  </div>
</template>

<script>
import AvatarCropper from '@/components/ImageCropper/AvatarCropper'

export default {
  name: 'AvatarUpload',
  components: { AvatarCropper }
}
</script>

<style lang="scss" scoped></style>
