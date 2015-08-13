/**
 * Created by 宋福祯 on 15/8/13.
 */
function Login() {
    var UserName = document.getElementById("Username").value;
    var PassWord = document.getElementById("Password").value;
    var FailLogin = document.getElementById("FailLogin");
    var CheckPassword = document.getElementById("CheckPassword");
    var CheckUserName = document.getElementById("CheckUsername");
    var Fail = document.getElementById("Fail");

    if (UserName == "") {
        CheckUserName.innerHTML = "用户名不能为空";
        setTimeout("CheckUserName.style.display='none' ", 2000);
    } else if (PassWord == "") {
        CheckPassword.innerHTML = "密码不能为空";
        setTimeout("CheckPassword.style.display='none' ", 2000);
    } else if (UserName == "admin" && PassWord == "1") {
        FailLogin.style.display = "block";
        Fail.innerHTML = "登录成功";
        //延时1秒进入
        setTimeout("window.location.href = 'Main.html'", 1000);
    } else {
        FailLogin.style.display = "block";
        Fail.innerHTML = "用户名或密码错误";
        setTimeout("FailLogin.style.display='none'", 2000);
    }
}