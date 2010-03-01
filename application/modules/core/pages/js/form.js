(function($) {
	$(function(){

		form = $('form.crud');
		
		$('input[name="title"]', form).keyup(function(){
		
			slug = $('input[name="slug"]', form);
			
			if(slug.val() == 'home' || slug.val() == '404')
			{
				return;
			}
			
			$.post(BASE_URL + 'ajax/url_title', { title : $(this).val() }, function(new_slug){
				slug.val( new_slug );
			});
		});
		
	});
})(jQuery);