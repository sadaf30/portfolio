// console.log('works');
var topNavList=document.querySelector('#topnavlist');
var topNavToggle=document.querySelector('#topnavtoggle')
var navCollapse=true;

topNavToggle.addEventListener('click',function(){

		// console.log('works');
		if(navCollapse===true){
			topNavList.classList.remove('navlistcollapse');
			topNavToggle.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
			navCollapse=false;

		}
		else{
			topNavList.classList.add('navlistcollapse');
			topNavToggle.innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>';
			navCollapse=true;
		}
});