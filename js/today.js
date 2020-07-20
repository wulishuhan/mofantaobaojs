function today_postion(){
//	window.onscroll=function(){
	var doc_height=document.body.scrollHeight;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var height=document.body.clientHeight;
	var main_top=document.getElementById('today_main_top')
	var main_top2=document.getElementById('today_main_top2')
	if(doc_height-scrollTop-height<=1100){
		
		main_top.style.position='fixed';
		main_top.style.top=0+'px';
		main_top.style.background='#FFFFFF'
		main_top.style.zIndex=800;
		
		main_top2.style.position='fixed';
		main_top2.style.top=40+'px';
		main_top2.style.border='none';
		main_top2.style.zIndex=800;
	}
	else{
		main_top.style.background='';
		main_top.style.position='';
		main_top.style.top='';
		main_top2.style.background='';
		main_top2.style.position='';
		main_top2.style.top='';
		main_top2.style.zIndex=0;
		main_top.style.zIndex=0;
	}
		
//	}

}