<template>
  <div class="page-card">
    <el-card shadow="never">
      <div slot="header" class="flex row-between">
        <span>基本信息</span>
        <!-- <el-button type="text" @click="editing = !editing">编辑</el-button> -->
      </div>
      <avatar-cropper
        size="150px"
        :placeholder="avatar"
        :disabled="!editing"
        class="avatar"
        @upload-success="uploadSuccess"
      ></avatar-cropper>
      <el-form
        ref="userForm"
        :model="userForm"
        :rules="userRules"
        label-position="top"
        class="user-form"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email" type="email"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="intro">
          <el-input v-model="userForm.intro" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="所在城市" prop="city">
          <city-cascader
            v-model="userForm.city"
            :level="2"
            :show-all-levels="false"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AvatarCropper from '@/components/ImageCropper/AvatarCropper'
import CityCascader from '@/components/CityCascader'

export default {
  name: 'Personal',
  components: { AvatarCropper, CityCascader },
  data() {
    return {
      editing: true,
      userForm: {
        name: 'Admin',
        email: '123456@qq.com',
        intro: '一名前端工程师',
        city: ['440000', '440100']
      },
      userRules: {
        name: { required: true, message: '请填写昵称' },
        email: { required: true, message: '请填写邮箱' },
        intro: { required: true, message: '请填写个人介绍' },
        city: { required: true, message: '请选择所在城市', trigger: 'change' }
      }
    }
  },
  computed: {
    ...mapGetters(['avatar'])
  },
  methods: {
    uploadSuccess({ url }) {
      this.$store.commit('user/SET_AVATAR', url)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success('提交成功（结果仅为模拟）')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  ::v-deep .el-card__header {
    font-size: 18px;
  }
}
.el-cascader {
  display: block;
}
.user-form {
  max-width: 500px;
  margin: 0 auto;
}
.avatar {
  display: flex;
  justify-content: center;
}
</style>
