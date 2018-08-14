$(document).ready(function(){
//    nav-li hover e
    var i=15;

    function change60(){
        if(i<400){
      $("#png60").css("left",i+"px").css("top",i+"px");
        i+=5;
    }else i=15;
    }
    setInterval(change60,200);

 $(".button1").on("click",function(){
     document.getElementById("changeimg").setAttribute("src","logo-12.jpg");
 });
    $(".button2").on("click",function(){
        document.getElementById("changeimg").setAttribute("src","logo-13.jpg");
    });
    var num;
    $('.nav-main>li[id]').hover(function(){
       /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3);
        $('#box-'+num).slideDown(100);
    },function(){
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-'+num).hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        /*保持图标向上*/
        $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
    },function(){
        $(this).slideUp(200);
        $('#li-'+num).children().removeClass().addClass('hover-down');
    });
    $(".tip,span").on("click",function(){
        alert("你被骗啦！");
    });
});
