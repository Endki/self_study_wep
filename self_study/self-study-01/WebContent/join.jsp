<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입</title>
<style type="text/css">
label{
		width:160px;
		display: inline-block;
		float: left;
	 }
#button{
		text-align: center;
}
</style>
<script type="text/javascript">

	function check_ok(){
		if(document.reg_frm.username.value.length == 0){
			alert("이름을 써주세요.");
			reg_frm.username.focus();
			return false;
		}
		if(document.reg.frm.uniqenum.value.length==6){
			alert("주민번호는 6자여야 합니다.");
			reg_frm.uniqenum.focus();
			return false;
		}
		if(document.reg.frm.uniqenum2.value.length==7){
			alert("주민번호는 7자여야 합니다.");
			reg_frm.uniqenum2.focus();
			return false;
		}
		if (document.reg_frm.userid.value.length == 0) {
			alert("아이디를 써주세요");
			reg_frm.userid.focus();
			return false;
		}
		
		if (document.reg_frm.userid.value.length < 4) {
			alert("아이디는 4글자이상이어야 합니다.");
			reg_frm.userid.focus();
			return false;
		}
		
		if (document.reg_frm.passward.value == "") {
			alert("패스워드는 반드시 입력해야 합니다.");
			reg_frm.pwd.focus();
			return false;
		}
		//비밀번호 확인결과가 같은지 체크 
		if (document.reg_frm.passward.value != document.passward2.value) {
			alert("패스워드가 일치하지 않습니다.");
			reg_frm.passward2.focus();
			return false;
		}

		return true;

	}


</script>
</head>

<body>
<form method="get" action="JoinServlet">
<span style="float: left;margin-right: 50px">
	<label for="username"> 이름  </label>
	<input type="text" name="username" id="username"><br>
	
	<label for="uniqenum"> 주민등록번호  </label>
	<input type="text" name="uniqenum" id="uniqenum"> -
	<input type="password" name="uniqenum2" id="uniqenum2"><br>
	
	<label for="userid"> 아이디 </label>
	<input type="text" name="id" id="userid"><br>
	
	<label for="passward"> 비밀번호 </label>
	<input type="password" name="passward" id="passward"><br>
	
	<label for="passward2"> 비밀번호 확인</label>
	<input type="passward" name="passward2" id="passward2"><br>
	
	<label for="email"> 이메일  </label>
	<input type="text" name="email" id="email"> @
	<input type="mailaddr" name="mailaddr" id="mailaddr">
	<select id="mailaddr" name="mailaddr" size="1">
		<option value="">선택하세요</option>
		<option value="nate.com">nate.com</option>
		<option value="naver.com">naver.com</option>
	</select>
	<br>
	
	<label for="addr"> 우편번호  </label>
	<input type="text" name="addr" id="addr"><br>
	
	<label for="addrtext"> 주소  </label>
	<input type="text" name="addrtext" id="addrtext">
	<input type="text" name="addrtext2" id="addrtext2"><br>
	
	<label for="phone"> 핸드폰번호 </label>
	<input type="text" name="phone" id="phone"><br>
	
	<label for="char"> 직업  </label>
	<select id="char" name="char" size="4">
		<option value="학생">학생</option>
		<option value="컴퓨터/인터넷">컴퓨터/인터넷</option>
		<option value="언론">언론</option>
		<option value="공무원">공무원</option>
	</select><br>
	
	<label for="chk_mail"> 메일/SMS 정보 수신</label>
	<input type="radio" id="chk_mail" name="chk_mail" value="yes" checked> 수신
	<input type="radio" id="chk_mail" name="chk_mail" value="no">거부 <br>
	
	<label for="hobby"> 관심 분야  </label>
	<input type="checkbox" name="hobby" value="생두"> 생두
	<input type="checkbox" name="hobby" value="원두"> 원두
	<input type="checkbox" name="hobby" value="로스팅"> 로스팅
	<input type="checkbox" name="hobby" value="핸드드립"> 핸드드립
	<input type="checkbox" name="hobby" value="에스프레소"> 에스프레소
	<input type="checkbox" name="hobby" value="창업"> 창업	<br>
	
	<div id="button">
		<input type="submit" value="회원가입" onclick="return check_ok()">
		<input type="reset" value="취소">
	</div>


</form>

</body>
</html>