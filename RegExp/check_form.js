window.onload=function(){
	var aInput=document.getElementsByTagName('input');
	var oName=aInput[0];
	var pwd=aInput[1];
	var pwd2=aInput[2];
	
	var aP=document.getElementsByTagName('p');
	var name_msg=aP[0];
	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];

	var count=document.getElementById('count');
	var aEm=document.getElementsByTagName('em');

	var mame_length=0; 
	// 1、数字，字母。汉字，下划线
	// 2、5-25个字符，推荐中文会员名
	// a-z A-Z ==\w
	// unicode  \u4e00-\u9fa5 ==中文
	// 用户名动作
	oName.onfocus=function(){
		name_msg.style.display='block';
		name_msg.innerHTML='<i class="ati"></i> 5-25个字符，一个汉字为两个字符，推荐使用中文会员名'
	}
	oName.onkeyup=function(){
		count.style.visibility='visible';
		name_length=getLength(this.value);
		count.innerHTML=name_length+"个字符";
		if(name_length==0){
			count.style.visibility='hidden';
		}
	}
	oName.onblur=function(){
		// 含有非法字符
		// 不能为空
		// 长度超过25个字符
		// 长度少于6个字符
		// OK
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			name_msg.innerHTML='<i class="err"></i>含有非法字符!'
		}else if(this.value==""){
			name_msg.innerHTML='<i class="err"></i>不能为空!'
		}else if(name_length>25){
			name_msg.innerHTML='<i class="err"></i>长度超过25个字符!'
		}else if(name_length<6){
			name_msg.innerHTML='<i class="err"></i>长度少于6个字符!'
		}else{
			name_msg.innerHTML='<i class="ok"></i>OK!'
		}
	}

// 密码
	pwd.onfocus=function(){
		pwd_msg.style.display='block';
		pwd_msg.innerHTML='<i class="ati"></i> 6-16个字符，请使用字母加数字或符号组合。不能单独使用数字或字母';
	}
	pwd.onkeyup=function(){
		//大于5个字符，中，大于10个字符。强
		if(this.value.length>5){
			aEm[1].className="active";
			pwd2.removeAttribute('disabled');
			pwd2_msg.style.display='block';
		}else{
			aEm[1].className="";
			pwd2.setAttribute('disabled','disabled');
			pwd2_msg.style.display='none';
		}
		// 大于10
		if(this.value.length>10){
			aEm[2].className="active";
		}else{
			aEm[2].className="";
		}
	}
	pwd.onblur=function(){
		// 不能全为数字或字母
		// 不能为空
		// 长度超过16个字符
		// 长度少于6个字符
		// OK

		// 不能用相同字符
		var m=findStr(pwd.value,pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-Z]/g;
		if(this.value==""){
			pwd_msg.innerHTML='<i class="err"></i>不能为空';
		}else if(m==this.value.length){
			pwd_msg.innerHTML='<i class="err"></i>不能使用相同的字符';
		}else if(this.value.length<6||this.value.length>16){
			pwd_msg.innerHTML='<i class="err"></i>长度应为6-16个字符';
		}else if(!re_n.test(this.value)){
			pwd_msg.innerHTML='<i class="err"></i>不能全为数字';
		}else if(!re_t.test(this.value)){
			pwd_msg.innerHTML='<i class="err"></i>不能全为字母';
		}else{
			pwd_msg.innerHTML='<i class="ok"></i>OK!'
		}
	}

// 确认密码

	pwd2.onblur=function(){
		// 含有非法字符
		// 不能为空
		// 长度超过25个字符
		// 长度少于6个字符
		// OK
		if(this.value!=pwd.value){
			pwd2_msg.innerHTML='<i class="err"></i>两次输入的密码不一致';	
		}else{
			pwd2_msg.innerHTML='<i class="ok"></i>OK!'
		}
}
}

function getLength(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}

function findStr(str,n){
	var tmp=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)==n){
			tmp++;
		}
	}
	return tmp;
}




