(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e618b6c4"],{b312:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"page-card"},[a("el-table",{ref:"advTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:"","max-height":"400","default-sort":{prop:"date",order:"descending"}},on:{"selection-change":e.handleSelectionChange,"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{type:"selection",width:"40",align:"center"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{label:"地址信息",align:"center"}},[a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.$index,l=t.row;return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleClick(l)}}},[e._v(" 查看 ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleDelete(n,l)}}},[e._v(" 删除 ")])]}}])})],1),a("div",{staticClass:"mg-t-20"},[a("el-button",{attrs:{type:"primary"},on:{click:e.deleteSelection}},[e._v("删除选中")]),a("el-button",{on:{click:e.toggleSelection}},[e._v("切换选中")])],1)],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"title"},[e._v("高级表格")]),a("div",{staticClass:"content"},[e._v(" 复杂的高级表格展示(多级表头、固定表头和列、排序、多选、操作数据) ")])])}],i=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("45fc"),a("a434"),a("b0c0"),a("2532"),a("159b"),{name:"Table",data:function(){return{tableData:[{id:1,date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{id:2,date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{id:3,date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{id:4,date:"2016-05-09",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1515 弄",zip:200333},{id:5,date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1520 弄",zip:200333},{id:6,date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1514 弄",zip:200333},{id:7,date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],multipleSelection:[]}},methods:{handleClick:function(e){var t=e.date,a=e.name,n=e.province,l=e.city,i=e.address,c=e.zip,r="地址：".concat(t,"，姓名：").concat(a,"，省份：").concat(n,"，市区：").concat(l,"，地址：").concat(i,"，邮编：").concat(c);this.$alert(r).catch((function(e){return e}))},handleDelete:function(e,t){var a=this;this.tableData.some((function(e,n){if(e.id==t.id)return a.tableData.splice(n,1),!0}))},handleSelectionChange:function(e){this.multipleSelection=e},deleteSelection:function(){var e=this.multipleSelection.map((function(e){return e.id}));console.log("selectIds: ",e),this.tableData=this.tableData.filter((function(t){return!e.includes(t.id)}))},toggleSelection:function(){var e=this;this.tableData.forEach((function(t){e.$refs.advTable.toggleRowSelection(t)}))},handleSortChange:function(e){e.column,e.prop,e.order}}}),c=i,r=a("2877"),o=Object(r["a"])(c,n,l,!1,null,"2a08ab94",null);t["default"]=o.exports},d81d:function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").map,i=a("1dde"),c=a("ae40"),r=i("map"),o=c("map");n({target:"Array",proto:!0,forced:!r||!o},{map:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);