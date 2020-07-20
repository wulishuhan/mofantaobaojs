function lunbo_body () {
	var oDiv = document.getElementsByClassName('ad_switch_button');
	var OImg = document.getElementById('mian-picture');
	var oBack = document.getElementById('center');
	var num=0;
	var mm;
/*移动到对应数字上方切换图片*/
	for (var i = 0; i < oDiv.length; i++) {
		(function(i){ 
			oDiv[i].onmouseenter=function () {
				clearInterval(mm);//清除掉原来的计时器，运行一遍切换函数，在生成新的定时器，防止刚切换又被原来的定时器切掉
				num=i;
				lunbo();
				mm=setInterval(lunbo,4500);
			}
		})(i);
	}
	/*移动到对应数字上方切换图片结束*/
	function lunbo () {
		if(num>3){
			num=0;
		};
		var colors = ["rgb(237, 55, 51)", "rgb(242, 69, 99)", "rgb(94, 23, 103)","rgb(255, 188, 73)"];
		OImg.src="./img/ad_big_"+num+".jpg";//大图片变换

		oBack.style.background=colors[num];//背景变化
	
		for (var i = 0; i < oDiv.length; i++) {
			oDiv[i].style.background='#4e4e4e';
		}
		if (oDiv[num].style.background='#4e4e4e') {
			oDiv[num].style.background='red'
		} else{
			
		}
		
		num++;
	}
	lunbo();
	mm=setInterval(lunbo,4500);
}