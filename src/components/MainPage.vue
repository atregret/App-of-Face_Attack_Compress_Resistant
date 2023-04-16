<template>
  <div>
    <div class="test1">
      <label>
        <input type="radio" name="color" value="red" v-model="selectedColor"> facenet
      </label>
      <label>
        <input type="radio" name="color" value="green" v-model="selectedColor"> 阿里人脸识别
      </label>
      <label>
        <input type="radio" name="color" value="blue" v-model="selectedColor"> 百度人脸识别
      </label>
    </div>

    <div>
      <div class="test2">
        <input type="file" accept="image/*" @change="sendimg($event,1)">
        <img id="im1" src="" alt=""> 
      </div>
      <div class="test3">
        <input type="file" accept="image/*" @change="sendimg($event,2)">
        <img id="im2" src="" alt="">
      </div>
      <div class="test4">
        <input type="file" accept="image/*" @change="sendimg($event,3)">
        <img id="im3" src="" alt="">
      </div>
    </div>
   

    
  </div>
</template>

<script>
export default {
name:'MainPage',
methods:{
    
        sendimg($event,a){
        //获取文件
        this.file = $event.target.files[0]
        console.log(a)
        //预览图片
        var reader = new FileReader();
        
        reader.onload=function(){
            this.imgurl = reader.result;
        //  document.querySelector('img').src=reader.result
            if(a==1){
            document.querySelector('#im1').src=this.imgurl
            document.querySelector('#im1').style.display="block"
            document.querySelector('#im2').src=this.imgurl
            document.querySelector('#im2').style.display="block"
            document.querySelector('#im3').src=this.imgurl
            document.querySelector('#im3').style.display="block"
        }
        else if(a==2){
            document.querySelector('#im2').src=this.imgurl
            document.querySelector('#im2').style.display="block"
        }
        else if(a==3){
            document.querySelector('#im3').src=this.imgurl
            document.querySelector('#im3').style.display="block"
        }
            console.log(this.imgurl)
        
        }
        reader.readAsDataURL(this.file);
        //发送图片
        let formData = new FormData()
        formData.append('file',this.file)
        console.log("发送图片")
        this.$ajax.post('/upload',formData).then(rsp=>{
            console.log(rsp)
            this.path = rsp.data.imgurl
        
            console.log(this.path)
        })
        }
    },
   
}
</script>

<style>

img{
  /* 矩形 1 */
position: absolute;
width: 162px;
height: 156px;
left: 50px;
top: 10px;
display: none;
background: rgb(196, 196, 196);
}
.test1 {
  background-color: red;
  border: 1px solid black;
  /* 画板 4 */
position: absolute;
width: 638px;
height: 149px;
left: 222px;
right: 164px;
top: 57px;
bottom: 818px;


}
.test2 {
  background-color: blue;
  border: 1px solid black;
  /* 画板 1 */
position: absolute;
width: 808px;
height: 219px;
left: 184px;
right: 32px;
top: 225px;
bottom: 580px;
}
.test3 {
  background-color: blue;
  border: 1px solid black;
  /* 画板 2 */
position: absolute;
width: 808px;
height: 219px;
left: 184px;
right: 32px;
top: 458px;
bottom: 333px;


}
.test4 {
  background-color: blue;
  border: 1px solid black;
 /* 画板 3 */
  position: absolute;
  width: 808px;
  height: 219px;
  left: 184px;
  right: 32px;
  top: 691px;
  bottom: 114px;


}
</style>