/**
 * Created by 福祯 on 2015/8/13 0013.
 */
function LeftNav() {
    var LeftNav = document.getElementById("LeftNav");
    //鼠标移入
    LeftNav.onmouseover = function () {
        LeftNav.style.backgroundColor = '#1D354D';
    }
    //鼠标移出
    LeftNav.onmouseout = function () {
        LeftNav.style.backgroundColor = '#424A5D';
    }
}
