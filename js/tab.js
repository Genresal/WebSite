document.querySelectorAll('.tab').forEach((item, idx) => {
	item.addEventListener('click', function(){
		document.querySelector('.tab-content_active').classList.remove('tab-content_active');
		document.querySelectorAll('.tab-content')[idx].classList.add('tab-content_active');
		document.querySelector('.tab__title_active').classList.remove('tab__title_active');
		item.querySelector('.tab__title').classList.add('tab__title_active');
	});
});