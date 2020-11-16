<template>
  <div>
    <div class="page-header">
      <div class="title">高级表单</div>
      <div class="content">
        当一次性提交大量数据时，可使用高级表单。
      </div>
    </div>
    <el-form
      ref="advForm"
      :model="advForm"
      :rules="advFormRules"
      label-width="120px"
    >
      <el-card shadow="never">
        <div slot="header">出差信息</div>
        <el-row>
          <el-col :span="12" :xs="24">
            <el-form-item label="出差事由" prop="tripReason">
              <el-input v-model="advForm.tripReason"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="合同编号" prop="contractId">
              <el-input v-model="advForm.contractId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="出差时间" prop="tripTime">
              <el-date-picker
                v-model="advForm.tripTime"
                type="daterange"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-form-item label="审批人" prop="approve">
              <el-select v-model="advForm.approve">
                <el-option
                  v-for="item in approveList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="紧急程度" prop="emergencyType">
              <el-radio v-model="advForm.emergencyType" label="1">
                <el-tag type="success" size="small">一般</el-tag>
              </el-radio>
              <el-radio v-model="advForm.emergencyType" label="2">
                <el-tag type="warning" size="small">急</el-tag>
              </el-radio>
              <el-radio v-model="advForm.emergencyType" label="3">
                <el-tag type="danger" size="small">紧急</el-tag>
              </el-radio>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="mg-t-15">
        <div slot="header">
          行程信息
        </div>
        <el-row>
          <el-col :span="8" :xs="24">
            <el-form-item label="出发城市" prop="fromCity">
              <city-cascader
                v-model="advForm.fromCity"
                :level="2"
                :show-all-levels="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="出发时间" prop="goTime">
              <el-date-picker
                v-model="advForm.goTime"
                type="datetime"
                value-format="yyyy-MM-dd hh:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="返程时间" prop="backTime">
              <el-date-picker
                v-model="advForm.backTime"
                type="datetime"
                value-format="yyyy-MM-dd hh:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="交通类型" prop="trafficType">
              <el-select v-model="advForm.trafficType">
                <el-option label="火车" value="1"></el-option>
                <el-option label="飞机" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col v-if="advForm.trafficType == 2" :span="8" :xs="24">
            <el-form-item label="航班到达城市" prop="toCity">
              <city-cascader
                v-model="advForm.toCity"
                :level="2"
                :show-all-levels="false"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="mg-t-15">
        <div slot="header">同行人员</div>
        <div>
          <el-table :data="personsTable">
            <el-table-column prop="name" label="姓名">
              <template v-slot="{ $index, row }">
                <el-input
                  v-if="tableEditIndex == $index"
                  v-model="tableEditData.name"
                ></el-input>
                <span v-else>{{ row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="number" label="工号">
              <template v-slot="{ $index, row }">
                <el-input
                  v-if="tableEditIndex == $index"
                  v-model="tableEditData.number"
                ></el-input>
                <span v-else>{{ row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="department" label="所属部门">
              <template v-slot="{ $index, row }">
                <el-select
                  v-if="tableEditIndex == $index"
                  v-model="tableEditData.department"
                >
                  <el-option
                    v-for="item in department"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <span v-else>{{ departmentText(row.department) }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template v-slot="{ $index, row }">
                <el-button
                  v-if="tableEditIndex == $index"
                  :type="tableEditIndex == $index ? 'success' : false"
                  size="mini"
                  @click="handleSave($index, row)"
                >
                  <span>保存</span>
                </el-button>
                <el-button
                  v-else
                  size="mini"
                  :disabled="tableEditIndex != null"
                  @click="handleEdit($index, row)"
                  >编辑</el-button
                >
                <el-button
                  v-if="!(tableEditIndex == $index)"
                  size="mini"
                  type="danger"
                  :disabled="tableEditIndex != null && tableEditIndex != $index"
                  @click="handleDelete($index, row)"
                  >删除</el-button
                >
                <el-button v-else size="mini" @click="handleCancel"
                  >取消</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="add-person mg-t-15">
            <el-button :disabled="isAdding" class="block" @click="addPerson">
              <i class="el-icon-plus"></i> 新增成员
            </el-button>
          </div>
        </div>
        <div class="el-row--flex is-justify-end mg-t-15">
          <el-button type="primary" @click="submitForm('advForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('advForm')">重置</el-button>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import cityCascader from '@/components/CityCascader'
import _ from 'lodash'

export default {
  name: 'AdvancedForm',
  components: { cityCascader },
  data() {
    return {
      advForm: {
        tripReason: '',
        contractId: '',
        tripTime: '',
        approve: '',
        emergencyType: '1',
        fromCity: [],
        goTime: '',
        backTime: '',
        trafficType: '',
        toCity: [],
        persons: [
          { name: '员工1', number: '001', department: '1' },
          { name: '员工2', number: '002', department: '2' },
          { name: '员工3', number: '003', department: '3' }
        ]
      },
      advFormRules: {
        tripReason: [{ required: true, message: '请填写出差事由' }],
        contractId: [{ required: true, message: '请填写合同编号' }],
        tripTime: [
          { required: true, message: '请选择出差时间', trigger: 'change' }
        ],
        approve: [
          { required: true, message: '请选择审批人', trigger: 'change' }
        ],
        fromCity: [
          { required: true, message: '请选择出发城市', trigger: 'change' }
        ],
        goTime: [
          { required: true, message: '请选择出发时间', trigger: 'change' }
        ],
        backTime: [
          { required: true, message: '请选择返程时间', trigger: 'change' }
        ],
        trafficType: [
          { required: true, message: '请选择交通类型', trigger: 'change' }
        ],
        toCity: [
          { required: true, message: '请选择到达城市', trigger: 'change' }
        ]
      },
      // 审批人
      approveList: [
        { label: '审批人1', value: '1' },
        { label: '审批人2', value: '2' },
        { label: '审批人3', value: '3' },
        { label: '审批人4', value: '4' }
      ],
      // 部门
      department: [
        { label: '研发部', value: '1' },
        { label: '设计部', value: '2' },
        { label: '产品部', value: '3' }
      ],
      tableEditData: {},
      tableEditIndex: null
    }
  },
  computed: {
    personsTable() {
      console.log('table computed ')
      let table = this.advForm.persons
      if (this.isAdding) {
        table = [...table, ...[this.tableEditData]]
      }
      return table
    },
    isAdding() {
      return this.tableEditIndex >= this.advForm.persons.length
    },
    departmentText() {
      return function(val) {
        return this.department.filter(item => {
          return item.value == val
        })[0].label
      }
    }
  },
  watch: {
    tableEditIndex: {
      handler: function(index) {
        console.log('index change ', index)
        const persons = _.cloneDeep(this.advForm.persons) // 这里要深拷贝，否则编辑时就会直接改变原数据，取消后无法还原
        let data = {}
        if (index != null && index < persons.length) {
          data = persons[index]
        } else {
          Object.keys(persons[0]).forEach(key => (data[key] = ''))
        }
        console.log('data: ', data)
        this.tableEditData = data
      },
      immediate: true
    }
  },
  methods: {
    // 保存
    handleSave(index, row) {
      const data = this.tableEditData
      const values = Object.values(data).filter(val => !_.isEmpty(val.trim()))
      console.log('values ', values)
      if (!values.length || values.length < Object.keys(data).length) {
        this.$message.error('请填写完整信息')
        return
      }
      this.advForm.persons[index] = _.cloneDeep(data) // 这里需要深拷贝，否则新增的数据都会共享
      this.tableEditIndex = null
    },
    // 编辑
    handleEdit(index, row) {
      this.tableEditIndex = index
      console.log(index, row)
    },
    // 删除
    handleDelete(index, row) {
      if (this.isAdding) {
        this.tableEditIndex = null
      } else {
        this.advForm.persons.splice(index, 1)
      }
    },
    // 取消
    handleCancel(index, row) {
      this.tableEditIndex = null
    },
    // 添加人员
    addPerson() {
      this.tableEditIndex = this.advForm.persons.length
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success('提交成功')
        } else {
          return false
        }
      })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-range-editor.el-input__inner {
  // width: 100%;
}
</style>
