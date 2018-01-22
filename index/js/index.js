 

window.onload = function(){
	//回到顶部
	var oPosition = document.getElementById("position");
	oPosition.onclick = function(){
		if(document.body.scrollTop == 0){
			document.documentElement.scroll = 0;
		}else{
			document.body.scrollTop = 0;
		}
	}
	window.onscroll = function(){
		var scroll = document.body.scrollTop || document.documentElement.scrollTop || 0;
		//console.log(scroll)
		if(scroll == 0){
			oPosition.style.display = "none"
		}else{
			oPosition.style.display = "block"
		}
	}
	//右侧定位
	var oKuang = document.getElementById("kuang");
	var oKuang2 = oKuang.children;
	oKuang2[2].onclick = function(event){//点击x消失
		var evt = event || window.event;
		//console.log(2)
		oKuang.style.display = "none"
		if(evt.preventDefault){
			evt.preventDefault();
		}else{
			evt.returnValue = false;
		}
	}
	oKuang2[1].onmouseover = function(event){//鼠标滑过显示二维码
		var evt = event || window.event;
		//console.log(1)
		oKuang2[0].style.display = "block";
	}
	oKuang2[0].style.display = "none"
	oKuang2[1].onmouseout = function(event){
		var evt = event || window.event;
		//console.log(1)
		oKuang2[0].style.display = "none";
	}
	oKuang2[0].onmouseover = function(event){
		var evt = event || window.event;
		//console.log(1)
		oKuang2[0].style.display = "block";
	}
	oKuang2[0].onmouseout = function(event){
		var evt = event || window.event;
		//console.log(1)
		oKuang2[0].style.display = "none";
	}
	
	
	//消失
	var oVanish = document.getElementById("vanish");
	var oLs1 = document.getElementById("ls1");
	var oLs2 = document.getElementById("ls2");
	oVanish.onclick = function(){
		oLs1.style.display = "none";
		oLs2.style.display = "none";
	}

	// App二维码
	var oApp = document.getElementById("App");
	var oApps = document.getElementById("app");
	oApp.onmouseover = function(){
		oApps.style.display = "block";

	}
	oApp.onmouseout = function(){
		oApps.style.display = "none";
		
	}

	//二维码
	var oErweibtn = document.getElementById("erweibtn");
	var oErwei = document.getElementById("erwei");
	oErweibtn.onmouseover = function(){
		oErwei.style.display = "block";
	}
	oErweibtn.onmouseout = function(){
		oErwei.style.display = "none";
	}
	//多选框
	oLeft = document.getElementById("left");
	oDuo = document.getElementById("duo");
	oDuo1 = document.getElementById("duo1")
	aLi = oDuo1.children;
	for(var i = 0 ; i < aLi.length;i++){
		aLi[i].onmouseover = function(){
			this.style.color = "#ffba00"
		}
		aLi[i].onmouseout = function(){
			this.style.color = "#fff";
		}
	}
	oLeft.onmouseover = function(){
		oDuo.style.display = "block";
	}
	oLeft.onmouseout = function(){
		oDuo.style.display = "none";
	}



	// 轮播图
	var oBanner = document.getElementById("banner").children;
	var oBanner2 =document.getElementById("banner")
	var oArrow1 = document.getElementById("arrow-1");
	var oArrow2 = document.getElementById("arrow-2");
	var i = 0;
	
	oArrow1.onclick = function(){

		
		if(i >= oBanner.length-1){
			oBanner[i].className = "";
			i = 0;
			oBanner[i].className = "active";
		}else{oBanner[i].className = "";
		i++;
		oBanner[i].className = "active";}
	}
	oArrow2.onclick = function(){
		if(i <= 0){
		oBanner[i].className = "";
		i = oBanner.length-1;
		oBanner[i].className = "active";
	}else{
		oBanner[i].className = "";
		i--;
		oBanner[i].className = "active";
		}

	}
	//自动播放
	var a = 0;
	var timer = setInterval(function(){
		// console.log(1)
		//clearInterval(timer)
		
		if(a >= oBanner.length-1){
			oBanner[a].className = "";
			a = 0;
			oBanner[a].className = "active";

		}
		else{
			oBanner[a].className = "";
			a++;
			oBanner[a].className = "active"
			
		}
			oBanner2.onmouseover = function(event){
			evt = event || window.event;
			console.log(1)
			clearInterval(timer)
		}
	},3000)
		oBanner2.onmouseout = function(event){
			evt = event || window.event;
			console.log(2)
			 timer = setInterval(function(){
				// console.log(1)
				
				
				if(a >= oBanner.length-1){
					oBanner[a].className = "";
					a = 0;
					oBanner[a].className = "active";

				}
				else{
					oBanner[a].className = "";
					a++;
					oBanner[a].className = "active"
					
				}
			
			},3000)
		}
	


	//文字滚动
// oUp.onclick = function(){
// 			//alert(1)测试事件有效
// 			if(j>oList.length){
// 				oLi.style.opacity = 1;				
// 				j = 0;
// 				top= 70
// 				oLi.style.top = top +"px";				
// 			}else{
				
// 				top = top-47;
// 				oLi.style.top = top +"px";
// 				j++;
// 				if(j>oList.length){
// 					oLi.style.opacity = 0;
// 					top = 117
// 					oLi.style.top = top +"px";
					
// 				}
// 			}
// 		}







	// 下拉框
	var oBottom = document.getElementById("bottom-1-1");
	var oDown = document.getElementById("down");
	var aLi = oDown.children;
	oBottom.onmouseover = function(){
		oDown.style.display = "block";
	}
	oBottom.onmouseout = function(){
		oDown.style.display = "none";
	}
	for(var j = 0; j < aLi.length; j ++){
		aLi[j].onmouseover = function(){
			this.style.background = "#ffba00";
			this.style.color = "#2d2d2d";
		}
		aLi[j].onmouseout = function(){
			this.style.background = "#fff";
			this.style.color = "#666666";
		}
	}







	// 滑动
	var	oA1 = document.getElementById("a-1");
	var	oA2 = document.getElementById("a-2")
	var	oLeft2 = document.getElementById("left-2")
	var oLeft3 = document.getElementById("left-3")
	oA1.onmouseover = function(){
		oLeft2.style.display = "block";
		oLeft3.style.display = "none";
		oA2.className = "a-2"
		oA1.className = "a-1"

	}
	oA2.onmouseover = function(){
		oLeft3.style.display = "block";
		oA2.className = "a-2-2"
		oLeft2.style.display = "none";
		oA1.className = "a-1-1"
	}

}


