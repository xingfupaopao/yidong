


/*函数库目录--------------------------------------------------*/

//--1.    getClass(className,range)                      获取指定的class的对象的集合
//--2.	  getContent(obj,val)                    获取或者设置对象的文本，obj 指定的对象   val 要设置的内容（可有可无）
//--3.    getStyles(obj,attr)                获取指定元素的样式  行内样式和外部样式的通用获取方法，
                                             // ie通过-对象.currentStyle.属性 ；
                                              // 火狐通过- getComputedStyle(对象,null).属性；

                                                //二者只能获取而不能修改*/
//--4.	  $(selecter,ranges)                 实现对相关类名，ID，标签的对象的引入                   /*<div> 创建一个div*/
//--5.    animate((obj,attr,dur,fn,callback)            动画函数     参数分别代表对象，操作属性，持续时间，动画方式，返回函数
//--6.	  getChilds(obj),                      获取对象obj的元素节点集合
//--7.    borderMove()和borderBack();                  银泰线框动效函数      
//--8.	  getNext(obj)                        obj获取当前对象的下一个节点
		  //insertAfter(newobj,obj,type)       将一个节点后面插入另一个节点（type为真则插在文本之前否则插在之后）

































//-------------------------------------------1-------------------------------------------------



/*getClass(className,range)获取指定的class的对象的集合     className  指定的类名*/


function getClass(className,range){

	var range=range?range:document;
	// 判断浏览器是否有这样的方法和属性
	if(range.getElementsByClassName){
		//w3c
		return range.getElementsByClassName(className);
	}else{
		//ie6-8
		//保存指定的className对象


		//1.获取页面所有的元素
		var all=range.getElementsByTagName("*");
		var arr=[];

		//2.挑选指定的元素

		for (var i = 0; i < all.length; i++) {
			if (checkClass(all[i].className,className)) {
				arr.push(all[i])
			};

			return arr;
		};
	}

}


function checkClass(obj,checkClass){
	var arr=obj.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==className) {
			return true;
		};
	};

	return false;

}













//-----------------------------------------------2--------------------------------------------------


















/*getContent(obj,val),获取或者设置对象的文本，obj 指定的对象   value  要设置的内容（可有可无）*/

function getContent(obj,val){
	if (obj.innerText) {        //此处的obj.innerText是属性，如果对象内没有内容，其隐式转换为false
		if (val==undefined) {
			return obj.innerText;
		}else{

			obj.innerText=val;
		};

	}else{

		if (val==undefined) {
			return obj.textContent;
		}else{

			obj.textContent=val;
		};


	};
}

























//----------------------------------------------3-------------------------------------------------------












/*getStyles(obj,attr)  获取指定元素的样式  行内样式和外部样式的通用获取方法，
              ie通过-对象.currentStyle.属性 ；
            火狐通过- getComputedStyle(对象,null).属性；

            二者只能获取而不能修改*/


function getStyles(obj,attr){

	if (obj.currentStyle) {

		return obj.currentStyle[attr];

	}else{

		return  getComputedStyle(obj,null)[attr];
	}

}






























//------------------------------------------------4------------------------------------------------











/*$()    实现对相关类名，ID，标签的对象的引入*/

/*<div> 创建一个div*/

function $(selecter,ranges){


	var ranges=ranges?ranges:document;

	if (selecter.charAt(0)==".") {
		return getClass(selecter.slice(1),ranges);

	}else if(selecter.charAt(0)=="#"){

		return document.getElementById(selecter.slice(1))

	}else if (/^[a-z][a-z1-6]{0,10}$/.test(selecter)) {

		return ranges.getElementsByTagName(selecter)

	}else if (/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)) {
		return document.createElement(selecter.slice(1,-1))
	};
}







































//-----------------------------------------------5----------------------------------------






/*
  函数 colorAnimate (obj,attr,val,dur,fn,callback)
  obj   要处理的对象
  attr  要处理的属性  background   color
  val   最终颜色 rbg    #
  fn    动画的方式
  callback  变化完成之后要处理的内容
*/


/*
   动画函数 animate (obj,attrObj,dur,fun,callback)
   obj   要动画的对象
   attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   持续时间
   fun   动画方式
   callback 变化完成之后要处理的内容
*/

//动画算法
/*
		 Linear：无缓动效果(匀速运动)；
			Quad：二次方的缓动；
			Cubic：三次方的缓动
			Quartic：四次方的缓动；
			Quintic：五次方的缓动；
			Sinusoidal：正弦曲线的缓动；
			Exponential：指数曲线的缓动；
			Circular：圆形曲线的缓动；
			Elastic：指数衰减的正弦曲线缓动；
			Back：超过范围的三次方缓动）；
			Bounce：指数衰减的反弹缓动。
			

			每个效果都分三个缓动方式（方法），分别是：
			easeIn：从0开始加速的运动；
			easeOut：减速到0的运动；
			easeInOut：前半段从0开始加速，后半段减速到0的运动。
			


			函数的四个参数分别代表：
				t--- current time（当前时间）；0 +=60   
				b--- beginning value（初始值）；100  
				c--- change in value（变化量）；500-100
				d---duration（持续时间）  5000
			Tween.Quad.easeInt()
	     	运算的结果就是当前的运动路程。
		   整理翻译:Code宝宝
		   翻译或解释不对的地方希望各位修正、批评。
		   50
    Tween.Linear     
	Tween.Quad.easeIn
*/
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d+b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }
 /*
   动画函数 animate (obj,attrObj,dur,fun,callback)
   obj   要动画的对象
   attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   持续时间
   fun   动画方式
   callback 回调函数 
   */
  
   function animate (obj,attrObj,dur,fun,callback) {
	 clearInterval(obj.t);
	if(arguments.length==2){
	  dur=500;
	  fun=Tween.Linear;
	  callback=null;
	}
	if(arguments.length==3){
	  if(typeof dur=="number"){
	  dur=dur;
	  fun=Tween.Linear;
	  callback=null;
	  }
	  if(typeof dur=="function"){
	    if(dur.length>=4){ 
			  fun=dur;
			  callback=null;
			  dur=500;
		}else{  
			  fun=Tween.Linear;
			  callback=dur;
			  dur=500;
		}
	  
	  }
	}
	if(arguments.length==4){
	   if(typeof dur=="number"){
	     dur=dur;
		 if(fun.length>=4){
			  fun=fun;
			  callback=null;
			  
		}else{
	     	  callback=fun;
			  fun=Tween.Linear;
		   
		}
		 
	   }else{	  
				  callback=fun;
				  fun=dur;
				  dur=500
				 
			
	  }
	}
    var time=0;
	var start={};var change={};
    for (var i in attrObj) {
	 start[i]=setCss(obj,i);
	 change[i]=attrObj[i]-start[i];
    }

	obj.t=setInterval(function(){
	  if(time>=dur){
	   clearInterval(obj.t);
	   for (var i in attrObj) {
		 setCss(obj,i,attrObj[i]);
	   }
	   if(callback){
	     callback.call(obj);
	   }
	  }else{
	  for (var i in attrObj) {
	   setCss(obj,i,fun(time,start[i],change[i],dur));
	  }
	  time+=60
	  }
	},60)
  }




 function setCss (obj,attr,val) {
   if(obj.nodeType!==1){
     return;
   }

   //初始化参数
  var attr=attr.replace(/^\s*|\s*$/g,"");
     //获取值
   if(arguments.length==2){
       //位置和尺寸
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
	var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
		if(!val){
		 var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());

		 val=obj[str];
		}
		return val;
	  }

	  
	   if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
	    var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));

	     return cc;
	   }
        //透明度
	  if(attr=="opacity"){
	    return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
	  }
	  //颜色
	  if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
		   var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
		   //获取对象
		
		   return getColor(colors);
         
		}
		if(attr=="scrollTop"){
		   return obj.scrollTop;
		}

	  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];


   }else if(arguments.length==3){
     switch (attr) {
     case "width":
	 case "height":
	 case "top":
	 case "left":
	 case "bottom":
	 case "right":
	 case "padding":
	 case "margin":
	 case "paddingLeft":
	 case "paddingRight":
	 obj.style[attr]=val+"px";
	 break;
     case "opacity":
	 obj.style[attr]=val;
	 obj.style.filter="alpha(opacity="+val*100+")"
	 break;
	 case "scrollTop":
	 obj.scrollTop=val;
	 break;
	 case 'color':
		case "background":
		case "backgroundColor":
		case 'borderBottomColor':
		case 'borderLeftColor':
		case 'borderRightColor':
		case 'borderTopColor':
		obj.style[attr]=val;
	 break;
	 default:
	 obj.style[attr]=val;
     }

   }
 }

 //颜色渐变动画
 //获得颜色
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 进制
    if(color.charAt(0)==="#"){
	  str=color.substring(1)
	  r=parseInt(str.substr(0,2),16);
	  g=parseInt(str.substr(2,2),16);
	  b=parseInt(str.substr(4,2),16);
	  arr=[r,g,b]
	  return arr;
	}else{
	  str=color.substring(4,color.length-1)
	  return str.split(",")
	}
  }
  if(color instanceof Array){
    return color;
  }
}

/*
  函数 colorAnimate (obj,attr,val,dur,fn,callback)
  obj   要处理的对象
  attr  要处理的属性  background   color
  val   最终颜色 rbg  #
  fn    动画的方式
  callback  变化完成之后要处理的内容
*/
function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
	 if(times>=dur){
	   clearInterval(obj.time)
       obj.time=null;
		   if(callback){
	        callback()
	      }
		  
	 }else{
     r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
     g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
	 b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur)	
		
	 setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
	   }
  },60)

}


































//-------------------------------------------------6----------------------------------------------------






/*getChilds(obj),        获取对象obj的元素节点*/

function getChilds(obj,type){
	
	var arr=obj.childNodes;
	var newarr=[];
	var type=type?type:false;
	if (type==undefined) {
		for (var i = 0; i < arr.length; i++) {
			//获取元素节点    有意义的文本
			if (arr[i].nodeType==1||(arr[i].nodeType==(3&&/^\s+$/.test(arr[i].nodeValue))) ){
				newarr.push(arr[i])
			};
		};
		
	}else if(type==false){
		for (var i = 0; i < arr.length; i++) {
			//只获取元素节点
			if (arr[i].nodeType==1) {
				newarr.push(arr[i])
			};
		};
	}
	

	return newarr;
}



//获取元素子节点

//第一个元素节点
function firstChild(obj){
	return getChilds(obj)[0];
}
//最后一个节点
function lastChild(obj){
	var length=getChilds(obj).length;
	return getChilds(obj)[length-1];
}
//第num-1个元素节点
function child(obj,num){
	var length=getChilds(obj).length;
	if(num>=length){
		return "error";
	}
	return getChilds(obj)[num];
}

















































//银泰线框动效-----------------------------------------7-----------------------------------------------------







/*包含borderMove和borderBack两个函数，前四个参数分别代表了框上下左右四个定位的线框，后两个代表了其变化的长度*/




function borderMove(top,right,bottom,left,num1,num2){
				animate(right,{height:num2},700);
				animate(top,{width:num1},700);
				animate(left,{height:num2},700);
				animate(bottom,{width:num1},700);

			}

function borderBack(top,right,bottom,left){
				animate(right,{height:0},700);
				animate(top,{width:0},700);
				animate(left,{height:0},700);
				animate(bottom,{width:0},700);

			}


function line(obj){ 
			          var dw=obj[0].offsetWidth;
			          var dh=obj[0].offsetHeight;
			          var top=[];
			          var bottom=[];
			          var left=[];
			          var right=[];
			          for(var i=0;i<obj.length;i++){
			           obj[i].index=i;
			            top.push($('.top',obj[i])[0]);
				        bottom.push($('.bottom',obj[i])[0]);
				        left.push($('.left',obj[i])[0]);
				        right.push($('.right',obj[i])[0]);
			           obj[i].onmouseover=function(){
			            animate(top[this.index],{width:dw});
			            animate(bottom[this.index],{width:dw});
			            animate(left[this.index],{height:dh});
			            animate(right[this.index],{height:dh});
			          }
			           obj[i].onmouseout=function(){
			            animate(top[this.index],{width:0});
			            animate(bottom[this.index],{width:0});
			            animate(left[this.index],{height:0});
			            animate(right[this.index],{height:0});
			          }
			         }
			}


























//获取元素下一个节点 getNext()--------------------------8------------------------------------------------------






/* getNext1(obj) obj获取当前对象的下一个节点*/

//获取下一个元素节点
function getNext1(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;

	}
	while(next.nodeType!=1){
		next=next.nextSibling;
		if(next==null){
		return false;

	}
		
	}
	return next;
}
function getNext2(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;

	}
	while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
		return false;

	}
		
	}
	return next;
}
function getNext(obj,type){
	var type=type?type:false;
	if (type==true) {
		return getNext2(obj);

	}
	if (type==false) {
		return getNext1(obj);

	}
}
//将一个节点后面插入另一个节点（type为真则插在文本之前否则插在之后）
function insertAfter(newobj,obj,type){
	var parent=obj.parentNode;
	var type=type?type:false;
	var pos=getNext(obj,type);
	if(!pos){
		parent.appendChild(newobj);
	}else{
		parent.insertBefore(newobj,pos);
	}


}
