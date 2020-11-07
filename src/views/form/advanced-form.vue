<template>
  <div>
    <div class="page-header">
      <div class="title">高级表单</div>
      <div class="content">
        当一次性提交大量数据时，可使用高级表单。
      </div>
    </div>
    <el-form ref="advForm" label-width="100px">
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
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="出发时间" prop="goTime">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="返程时间" prop="backTime">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="交通类型" prop="trafficType">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :xs="24">
            <el-form-item label="航班到达城市" prop="toCity">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="mg-t-15">
        <div slot="header">同行人员</div>
        <el-table :data="advForm.persons">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="number" label="工号"></el-table-column>
          <el-table-column prop="department" label="所属部门"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="el-row--flex is-justify-end mg-t-15">
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </div>
      </el-card>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AdvancedForm',
  data() {
    return {
      approveList: [
        { label: '审批人1', value: '1' },
        { label: '审批人2', value: '2' },
        { label: '审批人3', value: '3' },
        { label: '审批人4', value: '4' }
      ],
      advForm: {
        tripReason: '',
        contractId: '',
        tripTime: '',
        approve: '',
        emergencyType: '1',
        fromCity: '',
        goTime: '',
        backTime: '',
        trafficType: '',
        toCity: '',
        persons: [
          { name: '员工1', number: '001', department: '研发部' },
          { name: '员工2', number: '002', department: '设计部' },
          { name: '员工3', number: '003', department: '产品部' }
        ]
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-range-editor.el-input__inner {
  width: 100%;
}
</style>
