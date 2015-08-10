/**
 * Created by 福祯 on 15/8/10.
 */


$(document).ready(function () {

    //点击 输入框 进行输入
    $(".LEDNum").click(function () {
        $(".LEDNum_Detail").slideDown("slow");
    });

    //点击完成/编辑按钮之后 隐藏
    $(".LEDEdit").click(function () {
        $(".LEDNum_Detail").slideUp("slow");
    });
});
