<template>
  <div id="mu">
    <div class="container">
      <div class="jumbotron">
        <h1>Bootstrap Tutorial Veil</h1>
        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
        responsive, mobile-first projects on the web.</p>
      </div>
      <div class="row content">
        <div class="col-sm-3 sidenav hidden-xs">
          <h2>面纱</h2>
          <ul class="nav nav-pills nav-stacked">
            <!-- 此处可以优化：https://blog.csdn.net/ddx2019/article/details/105988813 -->
            <!-- F5刷新后,data中的数据会丢失.需要设法解决 -->
            <li :class="{'active':flag===1}" @click="flag=1"><router-link to="/">作品展示</router-link></li>
            <li :class="{'active':flag===2}" @click="flag=2"><router-link to="/info"><span class="glyphicon glyphicon-wrench"></span>人脸库管理</router-link></li>
            <li :class="{'active':flag===3}" @click="flag=3"><router-link to="/data">数据统计</router-link></li>
          </ul>
          <br>
        </div>
        <br>
        
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name:'MuBan',
    data () {
        return {
          flag:1,
        }
    },
}
</script>

<style>
</style>