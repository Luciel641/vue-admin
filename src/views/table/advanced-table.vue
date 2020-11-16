<template>
  <div>
    <div class="page-header">
      <div class="title">高级表格</div>
      <div class="content">
        复杂的高级表格展示(多级表头、固定表头和列、排序、多选、操作数据)
      </div>
    </div>
    <div class="page-card">
      <el-table
        ref="advTable"
        :data="tableData"
        border
        stripe
        max-height="400"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange"
      >
        <el-table-column type="selection" width="40" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column label="地址信息" align="center">
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template v-slot="{ $index, row }">
            <el-button type="text" size="small" @click="handleClick(row)">
              查看
            </el-button>
            <el-button
              type="text"
              size="small"
              @click="handleDelete($index, row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="mg-t-20">
        <el-button type="primary" @click="deleteSelection">删除选中</el-button>
        <el-button @click="toggleSelection">切换选中</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          id: 4,
          date: '2016-05-09',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1515 弄',
          zip: 200333
        },
        {
          id: 5,
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1520 弄',
          zip: 200333
        },
        {
          id: 6,
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1514 弄',
          zip: 200333
        },
        {
          id: 7,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    // 查看
    handleClick(row) {
      let { date, name, province, city, address, zip } = row
      let msg = `地址：${date}，姓名：${name}，省份：${province}，市区：${city}，地址：${address}，邮编：${zip}`
      this.$alert(msg).catch(err => err)
    },
    // 删除
    handleDelete(index, row) {
      this.tableData.some((item, idx) => {
        if (item.id == row.id) {
          this.tableData.splice(idx, 1)
          return true
        }
      })
      // this.tableData.splice(index, 1)
    },
    // 获取选中项
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 删除选中
    deleteSelection() {
      let selectIds = this.multipleSelection.map(item => {
        return item.id
      })
      console.log('selectIds: ', selectIds)
      this.tableData = this.tableData.filter(item => {
        return !selectIds.includes(item.id)
      })
    },
    // 切换选中
    toggleSelection() {
      this.tableData.forEach(row => {
        this.$refs.advTable.toggleRowSelection(row)
      })
    },
    // 排序改变
    handleSortChange({ column, prop, order }) {}
  }
}
</script>

<style lang="scss" scoped></style>
