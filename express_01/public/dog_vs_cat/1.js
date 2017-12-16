document.addEventListener("DOMContentLoaded" ,function() {
	window.addEventListener('scroll',function () {
		var x = document.querySelector('.tongbar');
		if (window.pageYOffset > 100) {
				x.classList.add('hienlen');
		} else {
				x.classList.remove('hienlen');
		}
	})
	
	
},false)