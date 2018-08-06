<template>
  	<div class="table">
	    <div class="crumbs">
	        <el-breadcrumb separator="/">
	            <el-breadcrumb-item><i class="el-icon-tickets"></i> 商品列表</el-breadcrumb-item>
	        </el-breadcrumb>
	    </div>  	
	    <div class="container">
	    	<!-- 批量操作和搜索 -->
            <div class="box-op clear">
            	<el-button-group class="fl">
	                <el-button type="primary" icon="el-icon-plus">添加</el-button>
	                <el-button type="danger" icon="el-icon-delete" @click="delAll">删除</el-button>
	            </el-button-group>
	            <el-form :inline="true" class="fr">
	            	 <el-form-item>
		                <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
		                    <el-option key="1" label="广东省" value="广东省"></el-option>
		                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
		                </el-select>
		             </el-form-item>
		             <el-form-item>
	                	<el-input v-model="select_word" placeholder="筛选关键词"></el-input>
	                </el-form-item>
	            </el-form>
            </div>

            <!-- 表格 -->
	        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
	        		<el-table-column type="index" width="20"></el-table-column>
	            <el-table-column type="selection" width="55"></el-table-column>
	            <el-table-column prop="date" label="日期" sortable width="150">
	            </el-table-column>
	            <el-table-column prop="name" label="姓名" width="120">
	            </el-table-column>
	            <el-table-column prop="address" label="地址">
	            </el-table-column>
	            <el-table-column label="操作" width="180">
	                <template slot-scope="scope">
	                    <el-button size="small" icon="el-icon-edit-outline" @click="handleEdit(scope.$index, scope.row)"></el-button>
	                    <el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></el-button>
	                </template>
	            </el-table-column>
	        </el-table>    	

	        <!-- 分页 -->
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="100" background>
                </el-pagination>
            </div>
	    </div>
		<font color="" style="font-size: 12px;"></font>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="500px">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div>删除不可恢复，是否确定删除？</div>
            <span slot="footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
	        "date": "1997-11-11",
	        "name": "林丽",
	        "address": "吉林省 辽源市 龙山区"
	    }, {
	        "date": "1987-09-24",
	        "name": "文敏",
	        "address": "江西省 萍乡市 芦溪县"
	    }, {
	        "date": "1996-08-08",
	        "name": "杨秀兰",
	        "address": "黑龙江省 黑河市 五大连池市"
	    }, {
	        "date": "1978-06-18",
	        "name": "魏强",
	        "address": "广东省 韶关市 始兴县"
	    }, {
	        "date": "1977-07-09",
	        "name": "石秀兰",
	        "address": "江苏省 宿迁市 宿豫区"
	    }, {
	        "date": "1994-09-20",
	        "name": "朱洋",
	        "address": "海外 海外 -"
	    }, {
	        "date": "1980-01-22",
	        "name": "傅敏",
	        "address": "海外 海外 -"
	    }, {
	        "date": "1985-10-10",
	        "name": "毛明",
	        "address": "内蒙古自治区 包头市 九原区"
	    }, {
	        "date": "1975-09-08",
	        "name": "何静",
	        "address": "西藏自治区 阿里地区 普兰县"
	    }, {
	        "date": "1970-06-07",
	        "name": "郭秀英",
	        "address": "四川省 巴中市 恩阳区"
	    }],
	    multipleSelection: [], //选中行
	    editVisible: false, //编辑框
	    delVisible: false, //删除框
      form: { //编辑中的数据
          name: '',
          date: '',
          address: ''
      },
      idx: -1, //选中行的索引
      select_cate: '', //筛选省份
      select_word: '', //搜索关键字
      page: 1, //当前第几页
      del_list: [] //删除列表
    }
  },
  computed: {
		data() {
      return this.tableData.filter((d) => {
        let is_del = false;
        for (let i = 0; i < this.del_list.length; i++) {
            if (d.name === this.del_list[i].name) {
                is_del = true;
                break;
            }
        }    
        if (!is_del && d.address.indexOf(this.select_cate) > -1 &&
            (d.name.indexOf(this.select_word) > -1 || d.address.indexOf(this.select_word) > -1)
        ) {
            return d;
        }
      });			
		}
  },
	created() {
	    this.getData();
	},  
  methods: {
    handleEdit(index, row) {
    	this.idx = index;
      this.form = {
          name: row.name,
          date: row.date,
          address: row.address
      }
      this.editVisible = true;
    },
    handleDelete(index, row) {
        this.idx = index;
        this.delVisible = true;
    },    
    // 保存编辑
    saveEdit() {
        this.$set(this.tableData, this.idx, this.form);
        this.editVisible = false;
        this.$message.success(`修改第 ${this.idx+1} 行成功`);
    },
    // 确定删除
    deleteRow(){
        this.tableData.splice(this.idx, 1);
        this.$message.success('删除成功');
        this.delVisible = false;
    },
    // 分页导航
    handleCurrentChange(val) {
			this.page = val;
			this.getData();
    },
    //获取数据
    getData() {
    	console.log(this.page);
    },
  	//选中项
		handleSelectionChange(val) {
        this.multipleSelection = val;
    },    
    // 批量删除
    delAll() {
      const length = this.multipleSelection.length;
      let str = '';
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
          str += this.multipleSelection[i].name + ' ';
      }
      this.$message.error('删除了' + str);
      this.multipleSelection = [];
    }
  }
}
</script>
<style scoped>
	.box-op {
		margin-bottom: 20px;
	}

	.pagination {
		margin-top: 30px;
		text-align: center;
	}
</style>

