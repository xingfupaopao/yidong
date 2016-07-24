window.onload=function(){
	//获取对象
	var  xxc=$("#xxc");
	var  as=$(".as");
	var len=as.length;
	var lis=$(".lis");
	var btn=$(".btn-zy")[0];
	var btnz=$(".btn-z")[0];
	var btny=$(".btn-y")[0];
	var login=$(".head-in-right3")[0];
	var login2=$(".head-in-right-tc")[0];
	var tc1=$(".tc-shang")[0];
	var tc2=$(".tc-xia")[0];
	var tca1=$("a",tc1)[0];
	var tca2=$("a",tc2)[0];
	var num=0;
	var flag=true;

	









	//添加效果


	//轮播-------------------------------------------------------

	for (var i = 0; i < len; i++) {
		if(i==0){
			lis[i].style.background="#E20D68"
			as[i].style.opacity=1;
			continue;
		}

		lis[i].style.background="#666"
		as[i].style.opacity=0;
	};


	xxc.onmouseover=function(){
		animate(btnz,{opacity:0.8})
		animate(btny,{opacity:0.8})
		clearInterval(t)
	}

	xxc.onmouseout=function(){
		animate(btnz,{opacity:0})
		animate(btny,{opacity:0})
		t=setInterval(moveR,2500)
	}

	btny.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		};

		
		// for (var i = 0; i < len; i++) {
		// 	lis[i].style.background="#666"
		// 	as[i].style.opacity=0;
		// };

		// num++
		// if(num==len){
		// 	num=0;
		// }
		// lis[num].style.background="#e20d68"
		// animate(as[num],{opacity:1})
	}


	btnz.onclick=function(){


		if (flag) {
			flag=false;
			moveL();
		};
		// for (var i = 0; i < len; i++) {
		// 	lis[i].style.background="#666"
		// 	as[i].style.opacity=0;
		// };

		// num--;
		// if(num<0){
		// 	num=len-1;
		// }
		// lis[num].style.background="#e20d68"
		// animate(as[num],{opacity:1})
	}



	for (var i = 0; i < len; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
			num=this.index;
			for (var j = 0; j < len; j++) {
				lis[j].style.background="#666";
				as[j].style.opacity=0;
			};

			lis[this.index].style.background="#e20d68"
			animate(as[this.index],{opacity:1},function(){
				flag=true;
			})

		}
	};

	//轮播动效

	var t=setInterval(moveR,2500)



	//函数

	function moveR(){
		num++;
		if (num==len) {
			num=0;
		};
		for (var i = 0; i < len; i++) {
			lis[i].style.background="#666"
			as[i].style.opacity=0;		
		};
		lis[num].style.background="#E20D68"
		animate(as[num],{opacity:1},function(){
				flag=true;
			})
	}


	function moveL(){
		num--;
		if (num<0) {
			num=len-1;
		};
		for (var i = 0; i < len; i++) {
			lis[i].style.background="#666"
			as[i].style.opacity=0;		
		};
		lis[num].style.background="#E20D68"
		animate(as[num],{opacity:1},function(){
				flag=true;
			})
	}

	//轮播结束-----------------------------------------------------------------------------------------------

//第一栏---------------------------------------------------------------------
	login.onmouseover=function(){
		login.style.background="#fff";
		login.style.color="#0085d0"
		login2.style.display="block"
	}
	login.onmouseout=function(){
		login.style.background="#f6f6f6";
		login.style.color="#e20d68"
		login2.style.display="none"
	}

	tc1.onmouseover=function(){
		tc1.style.background="#0085d0";
		tca1.style.color="#fff";
		tc1.style.border="1px solid #fff"
	}
	tc1.onmouseout=function(){
		tc1.style.background="#fff";
		tca1.style.color="#0085d0";
		tc1.style.border="1px solid #ccc"
	}

	tc2.onmouseover=function(){
		tc2.style.background="#0085d0";
		tca2.style.color="#fff";
		tc2.style.border="1px solid #fff"
	}

	tc2.onmouseout=function(){
		tc2.style.background="#fff";
		tca2.style.color="#0085d0";
		tc2.style.border="1px solid #ccc"
	}


	//二维码
	var yyt=$(".head-in-right2")[0];
	var ewm=$(".pos-2")[0];

	yyt.onmouseover=function(){
		yyt.style.background="#fff"
		ewm.style.display="block"
	}

	yyt.onmouseout=function(){
		yyt.style.background="#f6f6f6"
		ewm.style.display="none"
	}


	//太原

	var taiyu=$(".taiyuan")[0];
	var pos3=$(".pos-3")[0];

	taiyu.onmouseover=function(){
		pos3.style.display="block"
	}

	taiyu.onmouseout=function(){
		pos3.style.display="none"
	}


	//第一栏结束--------------------------------------------------------------------------




	//导航栏------------------------------------------------------------------------------
	var dhl=$(".dhl")[0];
	var dhl2=$(".dhl2");

	var dhl3=$(".dhl3")[0];
	var pos41=$(".pos-4-1")[0];
	var pos42=$(".pos-4-2")[0];
	var pos43=$(".pos-4-3")[0];
	var pos44=$(".pos-4-4")[0];
	var poa1=$(".dhl7");

	dhl2[0].onmouseover=function(){
		pos41.style.display="block"
		dhl2[0].style.background="#f6f6f6"
		poa1[1].style.color="#0085d0"
	}

	dhl2[0].onmouseout=function(){
		pos41.style.display="none"
		dhl2[0].style.background="#E4e4e4"
		poa1[1].style.color="#666"
	}




	dhl2[1].onmouseover=function(){
		pos42.style.display="block"
		dhl2[1].style.background="#f6f6f6"
		poa1[2].style.color="#0085d0"
	}

	dhl2[1].onmouseout=function(){
		pos42.style.display="none"
		dhl2[1].style.background="#E4e4e4"
		poa1[2].style.color="#666"
	}


	dhl2[2].onmouseover=function(){
		pos43.style.display="block"
		dhl2[2].style.background="#f6f6f6"
		poa1[3].style.color="#0085d0"
	}

	dhl2[2].onmouseout=function(){
		pos43.style.display="none"
		dhl2[2].style.background="#E4e4e4"
		poa1[3].style.color="#666"
	}

	dhl3.onmouseover=function(){
		pos44.style.display="block"
		dhl3.style.background="#f6f6f6"
		poa1[4].style.color="#0085d0"
	}

	dhl3.onmouseout=function(){
		pos44.style.display="none"
		dhl3.style.background="#E4e4e4"
		poa1[4].style.color="#666"
	}


	//导航栏结束



	//联系我们固定------------------------------------------------------------------------------------------

	var zxzx=$(".zxzx")[0];
	var tsjy=$(".tsjy")[0];
	var cjwt=$(".cjwt")[0];


	zxzx.onmouseover=function(){
		animate(zxzx,{right:38})
	}
	tsjy.onmouseover=function(){
		animate(tsjy,{right:38})
	}
	cjwt.onmouseover=function(){
		animate(cjwt,{right:38})
	}



	zxzx.onmouseout=function(){
			animate(zxzx,{right:-25})
		
	}
	tsjy.onmouseout=function(){
		
			animate(tsjy,{right:-25})
		
	}
	cjwt.onmouseout=function(){
		
			animate(cjwt,{right:-25})
	
	}


	//节点轮播

	var win2=$(".window")[0];
	var wimg=$(".wimg")[0];
	var as2=$("a",win2);
	var btn=$(".btn")[0];
	var btn1=$(".btn1")[0];
	var btn2=$(".btn2")[0];


	function nodeLB(obj,box,as,btn,btnL,btnR,num){
		

		var aw=parseInt(getStyles(as[0],"width"));
		var t;
		var flag=true;

		t=setInterval(moveL,3000);

		obj.onmouseover=function(){
			animate(btn,{opacity:1});
			clearInterval(t);
		}
		obj.onmouseout=function(){
			animate(btn,{opacity:0});
			t=setInterval(moveL,3000);
		}

		btnL.onclick=function(){
			if(flag){
				moveL();
				flag=false;
			}
			
		}
		btnR.onclick=function(){
			if(flag){
				moveR();
				flag=false;
			}
			
		}


		function moveL(){
			animate(box,{left:-num*aw},function(){
				for(var i=0;i<num;i++){
					var first=firstChild(box);
					box.appendChild(first);
				}				
					box.style.left=0;
					flag=true;
			})
		}

		function moveR(){
			for(var i=0;i<num;i++){
				var first=firstChild(box);
				var last=lastChild(box);
				box.insertBefore(last,first);
			}			
				box.style.left=-num*aw+"px";
				animate(box,{left:0},function(){
				flag=true;
			}); 
		}
	}


	nodeLB(win2,wimg,as2,btn,btn1,btn2,2)
	





}