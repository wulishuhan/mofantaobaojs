
function list_hidden(){
		var list=document.getElementById('my_taobao_list');
		var my_taobao=document.getElementById('my_taobao');
		var tri=document.getElementById('trianger');
		var mtbc=document.getElementById('mtbc')
	my_taobao.onmouseover=function(){
		list.style.display='block';
		my_taobao.style.borderLeft='1px solid #dcdcdc';
		my_taobao.style.borderRight='1px solid #dcdcdc';
		my_taobao.style.background='#FFFFFF';
		mtbc.style.color='red';
			tri.style.border='4px solid transparent';
			tri.style.borderTop='none';
			tri.style.borderBottomColor='red';
			tri.style.borderLeftColor='transparent';
			tri.style.borderRightColor='transparent';
	}
	my_taobao.onmouseout=function(){
		list.style.display='none';
		my_taobao.style.border='';
		my_taobao.style.background='#f5f5f5';
		mtbc.style.color='black';
			tri.style.border='4px solid transparent';
			tri.style.borderTopColor='black';
			tri.style.borderBottom='none';
			tri.style.borderLeftColor='transparent';
			tri.style.borderRightColor='transparent';
			
	}
	list.onmouseover=function(){
		list.style.display='block';
		my_taobao.style.background='#FFFFFF';
		my_taobao.style.borderLeft='1px solid #dcdcdc';
		my_taobao.style.borderRight='1px solid #dcdcdc';
			tri.style.border='4px solid transparent';
			tri.style.borderTop='none';
			tri.style.borderBottomColor='black';
			tri.style.borderLeftColor='transparent';
			tri.style.borderRightColor='transparent';
			
	}
	list.onmouseout=function(){
		list.style.display='none';
		my_taobao.style.background='#f5f5f5';
		my_taobao.style.border='';
			tri.style.border='4px solid transparent';
			tri.style.borderTopColor='black';
			tri.style.borderBottom='none';
			tri.style.borderLeftColor='transparent';
			tri.style.borderRightColor='transparent';
			
	}
	
	

	
}



