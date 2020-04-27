<template>
  <div class="app-container">
    <el-table border :data="tableData3" :style="headCla">
      <!-- <el-table border :header-cell-class-name="goodsInfo" :data="tableData3" style="width: 100%"> -->
      <el-table-column prop="date"></el-table-column>
      <!-- <el-table-column width="120" prop="date"></el-table-column> -->
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>

      <el-table-column :render-header="renderHeader" width="120" prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区" width="120"></el-table-column>
      <!-- <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column> -->

    </el-table>
  </div>
</template>

<script>
export default {
  filters: {},
  data() {
    return {
      headCla: {
        width: '100%',
        background: 'pink'
      },
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
          name: '王小虎2',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  created() {
    console.log(66)
  },
  mounted() {
    const that = this
    window.onresize = () => {
      console.log(document.body.clientWidth)
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  methods: {
    // render 事件
    renderHeader(h, { column }) {
      console.log(this)
      // h即为cerateElement的简写，具体可看vue官方文档
      return h(
        'div',
        {
          // class: this.headCla,
          style: {
            color: 'green',
            position: 'relative',
            overflow: 'none',
            'padding-left': '0px',
            'padding-right': '0px',
            width: '100%'
            // height: '100px'
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // width: '152px',
            // height: '1px'
            // display: 'block'
            // 'background-color': 'blue',
            // 'text-align': 'center',
            // transform: 'rotate(38deg)',
            // 'transform-origin': 'top left'
          }
          // class: 'headCla'
        },
        [
          h(
            'div',
            {
              style: {
                background: 'yellow'
              }
            },
            '文'
          ),
          h(
            'div',
            {
              style: {
                background: 'pink'
              }
            },
            '龙'
          ),
          h('div', {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '95px',
              height: '4px',
              transform: 'rotate(38deg)',
              'transform-origin': 'top left',
              background: 'red'
            }
          })
        ]
      )
    }
    // goodsInfo(row, column) {
    //   console.log(66, column)
    //   if (row.columnIndex === 0) {
    //     return 'goodsInfo' // 给第2个td里面添加goodsInfo的类名
    //   }
    // },
    // handlemyclass(row, column, rowIndex, columnIndex) {
    //   // console.log(row, column, rowIndex, columnIndex)
    //   // 第八列添加 red 类
    //   if (row.columnIndex === 0 && rowIndex === 0) {
    //     return 'test'
    //   }
    //   // 某一行其中的一个变量applies值如果大于0，并且在第六列，即确定一个具体的单元格需要确定行和列
    //   // if (parseFloat(row.applies) > 0 && columnIndex === 3) {
    //   //   return 'red'
    //   // }
    // }
    // 添加监听的方式
    // https://blog.csdn.net/csl125/article/details/89245267?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1
  }
}
</script>

<style scoped>
.el-table thead.is-group th {
  /* background: pink; */
  color: greenyellow;
  position: relative;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:before {
  content: '日期1';
  text-align: center;
  position: absolute;
  width: 152px;
  height: 1px;
  bottom: 30px;
  right: 0;
  background: red;
}

.el-table thead.is-group tr:first-of-type th:first-of-type:after {
  content: '配送新增2';
  text-align: center;
  position: absolute;
  width: 152px;
  top: 10px;
  left: 0;
  background: yellow;
}

.el-table thead.is-group tr:first-of-type th:first-of-type .cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 152px;
  height: 1px;
  background-color: blue;
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

<style>
.headCla {
  background: pink;
  height: 100%;
  width: 100%;
  padding: 0 !important;
}
.el-icon-location {
  background: red;
}
/* .test {
  background: yellow;
  color: red !important;
}
.goodsInfo {
  background: red;
} */
/*
.el-table_1_column_1.is_leaf {
  background: pink !important;
} */
</style>
