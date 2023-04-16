<template>
  <div class="modal fade" id="submitModal" tabindex="-1" role="dialog">
		  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">标题内容</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        </button>
		      </div>
		      <div class="modal-body">
		      	<p><b>主体内容 </b></p>
		      	<hr>
		      	<p>按下<a href="#" role="button" class="btn btn-dark  btn-sm">ESC</a> 来快捷解散该窗口。</p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" data-dismiss="modal">我已知晓</button>
		      </div>
		    </div>
		  </div>
		</div>
</template>

<script>
export default {
    name: 'BootModal',
    data() {
	  return {
	 
    }
	},
    methods : {
		show(){
			this.$('#submitModal').modal('show')
		}
	}
}
</script>

<style>
.modal {
  display: block;
}
</style>