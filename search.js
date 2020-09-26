$(document).ready(function(){
	if($('.search-block').length > 1){
		$('.search-block').siteSearch();
	}
	if($('.search-nav-mobile').length > 1){
		$('.search-nav-mobile').siteSearch();
	}
	
	// Maintaining the proper tab for pagination
	$('.pagination a').on("click", function(e) {
		var hash = window.location.hash;
		var pageLink = $(this).attr('href').split('#')[0];
		$(this).attr('href', pageLink + hash);
	});
});

$('a').filter(function() {
   return this.hostname && this.hostname !== location.hostname;
}).attr('target', '_blank');