<template>
  <div class="app-container">
    <!-- <div style="fontSize:3rem;">asdf</div> -->
    <el-table :data="tableData3" style="width: 100%">
      <el-table-column prop="date" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column label="地址">
        <el-table-column prop="province" label="省份"></el-table-column>
        <el-table-column prop="city" label="市区"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="zip" label="邮编"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {},
  data() {
    return {
      tableData3: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>
<style>
.el-table thead.is-group th {
  background: #fff;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:before {
  content: '日期';
  text-align: center;
  /* position: absolute; */
  width: 152px;
  height: 1px;
  bottom: 30px;
  right: 0;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:after {
  content: '配送新增';
  text-align: center;
  position: absolute;
  width: 152px;
  top: 10px;
  left: 0;
}

.el-table thead.is-group tr:first-of-type th:first-of-type .cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 152rem;
  height: 1rem;
  background-color: #ebeef5;
  display: block;
  text-align: center;
  transform: rotate(38deg);
  transform-origin: top left;
  -ms-transform: rotate(38deg);
  -ms-transform-origin: top left;
  -webkit-transform: rotate(38deg);
  -webkit-transform-origin: top left;
}
</style>
