$(document).ready(function() {
	"use strict";

	// ===========Hover Nav============	
		$('.navbar-nav li.dropdown').on('mouseenter', function(){ $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500); })
		$('.navbar-nav li.dropdown').on('mouseleave', function(){ $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500); });
	
	// ===========Select2============	
		$(document).ready(function() {
			$('.select2').select2();
		});
	var imported = document.createElement('script');imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX';document.head.appendChild(imported);window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-XXXXXXX-1');
});