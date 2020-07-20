function in_floor () {
	var oJU=document.getElementById('my_jv_collection');
	var oJU_login=document.getElementById('my_jv_login');
	var oLogin=document.getElementById('login_main');
	var oLogin_close=document.getElementById('login_window_close');
	var oLogin_close_a=document.getElementById('login_window_close_a');
	oLogin.style.top=(window.innerHeight-oLogin.offsetHeight)/4+'px';
	 oLogin.style.left=(window.innerWidth-oLogin.offsetLeft)/2.5+'px';
	 oJU.style.top=(window.innerHeight-oJU.offsetHeight)+'px';
	 window.onscroll=function() {
	 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	 var windowHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	 var sctop=document.body.clientHeight;
	 var counttop=scrollTop+window.innerHeight-oJU.offsetHeight;//计算我的聚收藏跟随移动的top值
	 var counttop2=counttop-68;//计算图片跟随移动的top值
	 var counttop3=scrollTop+(window.innerHeight-oLogin.offsetHeight)/2.5;//计算登录窗口移动的top值
	 if(counttop<windowHeight){
	  oJU.style.top=counttop+'px';
	  oJU_login.style.top=counttop+'px';
	  oLogin.style.top=counttop3+'px';
	 }
	  oJU_login.style.top=counttop2+'px';
	  today_postion();
	 }
	/*我的聚收藏的动态效果*/
	oJU.onmouseenter=function  () {
		oJU_login.style.height='100px';
	}
	oJU_login.onmouseout=function  () {
		oJU_login.style.height='0px';
	}
	/*动态效果结束*/
	oJU.onclick=oJU_login.onclick=function  () {
		oLogin.style.display='block'
	}
	oLogin_close_a.onmouseenter=oLogin_close.onmouseenter=function  () {
		oLogin_close.style.background='#FFFFFF';
		oLogin_close_a.style.color='#F40';
	}
	oLogin_close_a.onmouseout=oLogin_close.onmouseout=function  () {
		oLogin_close.style.background='#F40';
		oLogin_close_a.style.color='#FFFFFF';
	}
	oLogin_close_a.onclick=oLogin_close.onclick=function  () {
		oLogin.style.display='none'
	}
	var oPg1Switch = document.getElementById('page1_switch');
	var oPg2Switch = document.getElementById('page2_switch');
	var oPg1=document.getElementById('login_page1');
	var oPg2=document.getElementById('login_page2');
	var aTopg2=document.getElementById('to_page2');
	aTopg2.onclick=oPg1Switch.onclick=function  () {
		oPg1.style.display='none';
		oPg2.style.display='block';
		show();
	}
	oPg2Switch.onclick=function  () {
		oPg2.style.display='none';
		oPg1.style.display='block';
	}
}