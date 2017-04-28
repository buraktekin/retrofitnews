<template>
	<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content theme">
	      <div class="modal-header">
	        <h5 class="modal-title" id="ModalLabel">{{ modalTitle }}</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        {{ modalBody }}
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-md btn-danger" data-dismiss="modal">Cancel</button>
	        <button type="button" id="modalEvent" class="btn btn-md btn-success" @click="modalEventHandle">{{ modalButton }}</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
	import authHelper from '../Authentication/AuthHelper.js'
	export default {
		name: 'Modal',
		props: [ 'modalTitle', 'modalBody', 'modalButton', 'modalEvent' ],
		methods: {
			modalEventHandle() {
				this.modalEvent();
			}
		}
	}
</script>

<style type="text/css">
	div.modal-content {
		background-color: rgba(113, 87, 169, 0.9);
	}
	div.modal-header, div.modal-footer {
		border-color: rgba(255, 255, 255, .1);
	}
</style>