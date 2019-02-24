<template>
  <div class="all-receiver-container">
    <template>
      <el-table
        :data="tableData3"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="id"
          width="100"
        >
        </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column
            prop="receiver_name"
            label="姓名"
            width="120"
          >
          </el-table-column>
          <el-table-column label="地址">
            <el-table-column
              prop="province"
              label="省份"
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="city"
              label="市"
              width="100"
            >
            </el-table-column>
             <el-table-column
              prop="area"
              label="区"
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="电话号码"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="detailed_address"
              label="地址"
              width="300"
            >
            </el-table-column>
            <el-table-column
              prop="postcode"
              label="邮编"
              width="120"
            >
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </template>

    </div>
</template>
<script>

export default {
  data() {
    return {
      tableData3:[]
    };
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      let token=localStorage.getItem('token')
      if(token){
        this.$axios.get('/users/getReceiverAddress')
        .then(res=>{
          if(res.status===200){
            this.tableData3=res.data
          }
        })
      }
    }
  }
};
</script>