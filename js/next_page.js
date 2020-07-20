function next_page(){
	
var next=document.getElementById('first_page');
var next_btn=document.getElementById('top_next_left');
var next_btn_color=document.getElementById('#top2_next_main');
var i=1;
var page_next=document.getElementById('page_next');
var page_up=document.getElementById('page_up');
next_btn.onclick=function(){
	next.innerHTML=i;
	i++;
	if(i>7)
	{
		i=7;
		next_btn_color.style.background='#CCC';
	}
}
	var page_first=document.getElementById('page_first');
	var page_2=document.getElementsByClassName('page_number')[0];
	var page_7=document.getElementsByClassName('page_number')[1];
	page_first.onclick=function(){
		page_2.style.border='none';
		page_first.style.border='solid 1px red';
		page_7.style.border='none'
		i=1;
		next.innerHTML=i;
	}
	page_2.onclick=function(){
		page_2.style.border='solid 1px red';
		page_first.style.border='none';
		page_7.style.border='none'
		i=2;
		next.innerHTML=i;
	}
	page_7.onclick=function(){
		page_7.style.border='solid 1px red';
		page_2.style.border='none';
		page_first.style.border='none';
		i=7;
		next_btn_color.style.background='#CCC';
		next.innerHTML=i;
	}
	page_next.onclick=function(){
		if (i==1) {
			page_2.style.border='solid 1px red';
			page_first.style.border='none';
			page_7.style.border='none'
			i=2;
			next.innerHTML=i;
		}
		else if(i==2){
			page_2.style.border='none';
			page_first.style.border='none';
			page_7.style.border='solid 1px red';
			i=7;
			next.innerHTML=i;
		}
		else if(i==7){
		page_7.style.border='solid 1px red';
		page_2.style.border='none';
		page_first.style.border='none';
		next_btn_color.style.background='#CCC';
		next.innerHTML=i;
		}
	}
	page_up.onclick=function(){
		if (i==1) {
			
			i=1;
		}
		else if(i==2){
			page_2.style.border='none';
			page_first.style.border='solid 1px red';
			page_7.style.border='none';
			i=1;
		}
		else if(i==7){
		page_2.style.border='solid 1px red';
		page_first.style.border='none';
		page_7.style.border='none'
		i=2;
		}
	}
}
//function next_page1(){
//	
//	var page_first=document.getElementById('page_first');
//	var page_2=document.getElementsByClassName('page_number')[0];
//	var page_7=document.getElementsByClassName('page_number')[1];
//	page_first.onclick=function(){
//		page_2.style.border='none';
//		page_first.style.border='solid 1px red';
//		page_7.style.border='none'
//	}
//	page_2.onclick=function(){
//		page_2.style.border='solid 1px red';
//		page_first.style.border='none';
//		page_7.style.border='none'
//	}
//	page_7.onclick=function(){
//		page_7.style.border='solid 1px red';
//		page_2.style.border='none';
//		page_first.style.border='none';
//	}
//	
//	
//	
//	
//}
