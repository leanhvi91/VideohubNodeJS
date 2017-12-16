document.addEventListener("DOMContentLoaded",function () {
	var nutbar = document.querySelector('#videoshow');
	var b = document.querySelector('.menulon');
	var anh = document.getElementsByClassName('_anh');
	var url1 = 'cience/cience.html';
	console.log(anh);
	for (var i = 0; i < anh.length; i++) {
		anh[i].addEventListener('mouseover', function () {
		console.log(this.getAttribute('data-anh'));
		this.classList.add("anhphongto");

		this.addEventListener('click', function () {
			console.log(this.getAttribute('data-duongdan'));
			window.location = this.getAttribute('data-duongdan');
		});
		this.addEventListener('mouseout',function () {
			this.classList.remove('anhphongto');
		
		});
	});
	};




	//xu ly phan clich vao cac menu hoac cac chu tren menu
	
}, false);