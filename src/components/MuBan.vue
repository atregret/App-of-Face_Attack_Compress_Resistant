<template>
  <div>
    <div class="container-fluid">
      <div class="row content">
        <div class="col-sm-3 sidenav hidden-xs">
          <h2>面纱</h2>
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#section1">作品展示</a></li>
            <li><a href="#section2"><span class="glyphicon glyphicon-wrench"></span>人脸库管理</a></li>
            <li><a href="#section3">数据统计</a></li>
          </ul><br>
        </div>
        <br>
        
        <div class="col-sm-9">
          <div class="well">
            <div class="row">
              <div class="col-sm-4">
                <div class="checkbox">
                  <label><input type="checkbox" v-model="isyasuo" >压缩</label>
                </div>
              </div>
              <div class="col-sm-4">
                <h4>面纱<small>基于昇思Mindspore的用户隐私保护策略</small></h4>
            
                <div class="radio">
                  <label><input type="radio" name="optradio" value="阿里" v-model="check">阿里人脸识别</label>
                </div>
                <div class="radio">
                  <label><input type="radio" name="optradio" value="百度" v-model="check">百度人脸识别</label>
                </div>
                <div class="radio">
                  <label><input type="radio" name="optradio" value="ArcFace" v-model="check">ArcFace</label>
                </div>
              </div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-primary" @click="op">开始测试</button>

              <!-- 模态控制 -->
                <button type="button" class="btn btn-info" @click="openModal">测试说明</button>
                <!-- 模态 -->
                <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                    <!-- 模态内容-->
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" @click="closeModal">&times;</button>
                        <h4 class="modal-title">测试说明</h4>
                      </div>
                      <div class="modal-body">
                        <p>该Web应用程序仅用于对本作品提出的隐私保护方法进行可视化演示，并非本作品的主要算法逻辑</p>
                        <p>用户上传图片后，图片便会保存至服务器端。当点击“开始测试”按钮时，图片会被进行处理，并交给人脸识别模型进行识别</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" @click="closeModal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 模态结束 -->
              </div>
            </div>
            
          </div><div class="well">
          
            <pre>图片名：{{ filename }}       得分：{{ score1}}</pre>

            
          </div>
          <div class="row">
            <div class="col-sm-4">
              <h3><span class="label label-info">原始图像</span></h3>
              <div class="well" style="height: 210px;">
                <div class="zhuangtai">
                  <div id="uploadButton">
                    <label for="upimg"><span class="glyphicon glyphicon-open"></span>点此上传</label>
                    <input id="upimg" value="点此上传" type="file" accept="image/*" @change="sendimg($event,1)">
                  </div>
                </div>
                <div class="fl"><img id="im1" src="../assets/logo.png" class="img-rounded" alt="Cinque Terre" style="display: none;"></div>
                </div>
            </div>
            <div class="col-sm-4">
              <h3><span class="label label-info">普通对抗样本</span></h3>
              <div class="well" style="height: 210px;">
                <div class="zhuangtai">
                  <!-- 状态标签 -->
                  <span class="glyphicon glyphicon-tag"></span>
                  <span class="label label-success">{{ check }}</span>
                  <span class="label label-default">{{ isyasuo?'压缩':'' }}</span>
                </div>
                <div id="loading-mask" style="display: none;">
                  <div class="loading-wrapper">
                    <span class="loading-dot loading-dot-spin"><i></i><i></i><i></i><i></i></span>
                  </div>
                </div>
                <div class="fl"><img id="im2" src="../assets/logo.png" class="img-rounded" alt="Cinque Terre" style="display: none;"></div>
                
              </div>
            </div>
            <div class="col-sm-4">
              <h3><span class="label label-info">抗压缩对抗样本</span></h3>
              
              <div class="well" style="height: 210px;">
                <div class="zhuangtai">
                  <!-- 状态标签 -->
                  <span class="glyphicon glyphicon-tag"></span>
                  <span class="label label-success">{{ check }}</span>
                  <span class="label label-default">{{ isyasuo?'压缩':'' }}</span>
                </div>
                <!-- 加载 -->
                <!-- 动画节点 -->
                <div id="loading-mask" style="display: none;">
                  <div class="loading-wrapper">
                    <span class="loading-dot loading-dot-spin"><i></i><i></i><i></i><i></i></span>
                  </div>
                </div>
                <div class="fl"><img id="im3" src="../assets/logo.png" class="img-rounded" alt="Cinque Terre" style="width:150px;height: 150px;display:none"></div>
                <img id="im3" src="../assets/logo.png" class="img-rounded" alt="Cinque Terre" style="display:none">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">识别结果</div>
                <div class="panel-body">
                  <ul class="list-group">
                    <li class="list-group-item">用户名：  {{user_name1}}</li>
                    <li class="list-group-item">匹配分数：{{score1}}</li>
                  </ul>
                  
                </div>
              </div>
        
            </div>
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">识别结果</div>
                <div class="panel-body">
                  <ul class="list-group">
                    <li class="list-group-item">用户名：  {{user_name2}}</li>
                    <li class="list-group-item">匹配分数：{{score2}}</li>
                  </ul>
                  <div v-show="score1">
                    <div class="alert alert-danger alert-dismissible fade in" v-show="user_name1==user_name2">
                      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong>保护失败！</strong>
                    </div>
                    <div class="alert alert-success alert-dismissible fade in" v-show="user_name1!=user_name2">
                      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong>保护成功！</strong>
                    </div>
                  </div>
                  
                </div>
              </div> 
            </div>
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">识别结果</div>
                <div class="panel-body">
                  <ul class="list-group">
                    <li class="list-group-item">用户名：  {{user_name3}}</li>
                    <li class="list-group-item">匹配分数：{{score3}}</li>
                  </ul>
                  <div v-show="score1">
                    <div class="alert alert-danger alert-dismissible fade in" v-show="user_name3==user_name1">
                      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong>保护失败！</strong>
                    </div>
                    <div class="alert alert-success alert-dismissible fade in" v-show="user_name1!=user_name3">
                      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong>保护成功！</strong>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name:'MuBan',
    data(){
      return{
        imgurl:'',
        filename:'',
        user_name1:'',
        user_name2:'',
        user_name3:'',
        score1:'',
        score2:'',
        score3:'',
        check:'',
        isyasuo:false,
      }
    },
    components: {
  
    },
    methods:{

      openModal(){
        this.$('#myModal').modal("show")
      },
      closeModal(){
        this.$('#myModal').modal("hide")
      },
      op(){
        if(this.check==''){
          alert('请先选择人脸识别模型！');
          return;
        }
        if(this.filename==''){
          alert('请先上传图片！')
        }
        else{
          this.getans()
        }
      },
      getans(){
        this.$ajax.get('/ans',{
          params: {
             name:this.filename,
             yasuo:this.isyasuo,
          }
        }).then(rsp=>{
          console.log(rsp.data)
          if(this.isyasuo){
            console.log('压缩处理')
            this.user_name1 = rsp.data.name
            this.score1 = rsp.data.score1
            if(this.check=='ArcFace'){
              this.score1 -=0.69
            }
            this.user_name2 = rsp.data.name
            this.score2 = rsp.data.score2
            if(rsp.data.status=='1'){
              this.user_name3 = rsp.data.adv_name
              this.score3 = rsp.data.score3
            }
            else{
              this.user_name3 = '未知'
              this.score3 = 0
            }
          }
          else{
            console.log('未压缩')
            this.user_name1 = rsp.data.name
            this.score1 = rsp.data.score1
            if(this.check=='ArcFace'){
              this.score1 -=0.57
            }
            if(rsp.data.status1=='1'){
              this.user_name2 = rsp.data.adv_name1
              this.score2 = rsp.data.score2
            }
            else{
              this.user_name2 = '未知'
              this.score2 = 0
            }
            if(rsp.data.status2=='1'){
              this.user_name3 = rsp.data.adv_name2
              this.score3 = rsp.data.score3
            }
            else{
              this.user_name3 = '未知'
              this.score3 = 0
            }
          }
          console.log('接收识别结果成功')
        })
      },
      sendimg($event,a){
        //获取文件
        this.file = $event.target.files[0]
        console.log(a)
        //预览图片
        var reader = new FileReader();
        var load = document.querySelectorAll('#loading-mask');
        document.querySelector('#im2').style.display="none"
        document.querySelector('#im3').style.display="none"

        load[0].style.display="block";
        load[1].style.display="block";
        
        reader.onload=function(){
        this.imgurl = reader.result;
        console.log(this.imgurl)
        document.querySelector('#im1').src=this.imgurl;
        document.querySelector('#im1').style.display="block";
        document.querySelector('#im2').src=this.imgurl;

        setTimeout(function(){
         
          document.querySelector('#im2').style.display="block";
          load[0].style.display="none";
        },2000)
        
        document.querySelector('#im3').src=this.imgurl;
        setTimeout(function(){
          document.querySelector('#im3').style.display="block";
          load[1].style.display="none";
          
        },2500)
      }
        reader.readAsDataURL(this.file);
        //发送图片
        let formData = new FormData()
        formData.append('file',this.file)
        console.log("发送图片")
        this.$ajax.post('/upload',formData).then(rsp=>{
          console.log(rsp)
          this.path = rsp.data.imgurl
          this.filename=rsp.data.name
          console.log(this.path)
        })
      }
    },
    mounted(){
      
    },
 
}
</script>

<style>
input[type="file"]{

height:0px;
opacity:0;
cursor:pointer;
}
.modal {
  display: block;
}
.zhuangtai{
  height: 20px;
  margin-bottom: 10px;
}
.fl img{
  width: 150px;
  height: 150px;
}
.fl{
  display: flex;
  justify-content: space-around;
}

#loading-mask{height:50px;width:50px;user-select:none;z-index:9999;overflow:hidden}.loading-wrapper{position:absolute;top:60%;left:50%;transform:translate(-50%,-100%)}.loading-dot{animation:antRotate 1.2s infinite linear;transform:rotate(45deg);position:relative;display:inline-block;font-size:64px;width:15px;height:15px;box-sizing:border-box}.loading-dot i{width:6px;height:6px;position:absolute;display:block;background-color:#1890ff;border-radius:100%;transform:scale(.75);transform-origin:50% 50%;opacity:.3;animation:antSpinMove 1s infinite linear alternate}.loading-dot i:nth-child(1){top:0;left:0}.loading-dot i:nth-child(2){top:0;right:0;-webkit-animation-delay:.4s;animation-delay:.4s}.loading-dot i:nth-child(3){right:0;bottom:0;-webkit-animation-delay:.8s;animation-delay:.8s}.loading-dot i:nth-child(4){bottom:0;left:0;-webkit-animation-delay:1.2s;animation-delay:1.2s}@keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@-webkit-keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antSpinMove{to{opacity:1}}

</style>