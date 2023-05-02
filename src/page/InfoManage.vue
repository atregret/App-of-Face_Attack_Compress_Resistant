<template>
  <div>
    <div class="page-header">
        <h1>人脸库管理</h1>
    </div>
    <button type="button" class="btn btn-primary disabled" data-toggle="tooltip" title="无权限!">添加</button>
    <button type="button" class="btn btn-primary disabled" data-toggle="tooltip" title="无权限!">查询</button>
    <table class="table table-hover">
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in user_name" :key="item">
        <td>{{ index }}</td>
        <td>{{item}}</td>
        <td><button type="button" class="btn btn-danger disabled" data-toggle="tooltip" title="无权限!" @click="popitem(item)">删除</button></td>
      </tr>
     
    </tbody>
  </table>
  <ul class="pagination">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
</ul>
  </div>
</template>

<script>
export default {
name: 'InfoManage',
    data () {
        return {
          user_name:['a','b','vvv','ddd']
        }
    },
    methods:{
      popitem(item){
        console.log(item)
        this.$ajax.get('/deuser',{
          params:{
              name:item
          }
        }).then(res=>{
          console.log(res.data.state)
        })
      }
    },
    mounted(){
      //提示框初始化
      this.$('[data-toggle="tooltip"]').tooltip();
    } 
}
</script>

<style>

</style>