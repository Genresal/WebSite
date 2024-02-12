document.querySelectorAll('.expander__button').forEach((button) => {
	button.addEventListener('click', function(){
		if(button.parentNode.parentNode.classList.contains('expander_active')){
			button.parentNode.parentNode.classList.remove('expander_active');
		}
		else{
			try{
				document.querySelector('.expander_active').classList.remove('expander_active');
			}
			catch (e){

			}
			button.parentNode.parentNode.classList.add('expander_active');
		}
	});
});