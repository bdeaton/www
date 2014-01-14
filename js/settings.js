var onlineForLife = window.onlineForLife || {}; onlineForLife.Settings = onlineForLife.Settings || {};
onlineForLife.Settings = {
	version: 1,

	init: function(){
		onlineForLife.Settings.setupHandlers();
	},
	
	setupHandlers: function(){
		$(".checkbox-push input[type='checkbox']").bind( "change", function(event, ui) {
			var $this = $(this);
			var val = $this.val();
			
			//console.log(val, $('#checkbox-push-none').prop('checked'));
			if(val=='push-none' && $('#checkbox-push-none').prop('checked')){
				$('#checkbox-push-daily, #checkbox-push-special, #checkbox-push-life').attr("checked",false).checkboxradio("refresh");
			}
			//console.log('daily: ' + $('#checkbox-push-daily').prop('checked'));
			//console.log('life: ' + $('#checkbox-push-life').prop('checked'));
			//console.log('special: ' + $('#checkbox-push-special').prop('checked'));
			//console.log('none: ' + $('#checkbox-push-none').prop('checked'));
			
			if($('#checkbox-push-daily').prop('checked') || $('#checkbox-push-life').prop('checked') || $('#checkbox-push-special').prop('checked')){
				$('#checkbox-push-none').attr("checked",false).checkboxradio("refresh");
			}
		});
		
		$('.link-settings-ofl').on('click',function(){
			var url = onlineForLife.Data.Links.settings.ofl;
			myURL = encodeURI(url);
			window.open(url, '_blank', 'location=yes'); 
		});
		$('.link-settings-privacy').on('click',function(){
			var url = onlineForLife.Data.Links.settings.privacy;
			myURL = encodeURI(url);
			window.open(url, '_blank', 'location=yes'); 
			
		});
		
		$('.link-settings-terms').on('click',function(){
			var url = onlineForLife.Data.Links.settings.terms;
			myURL = encodeURI(url);
			window.open(url, '_blank', 'location=yes'); 
			
		});

		$('.link-settings-contact').on('click',function(){
			var url = onlineForLife.Data.Links.settings.contact;
			myURL = encodeURI(url);
			window.open(url, '_blank', 'location=yes'); 
			
		});
	},
};
$(function() {
	
});


