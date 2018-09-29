 var imgs = document.querySelectorAll("img.lazy");            //设置滚动事件
    window.onscroll = lazyloadFn;            //屏幕的高度
    var sh = window.innerHeight;
    console.log(sh);            //刚进来需要先调用下
    lazyloadFn();            //图片懒加载的方法
    function lazyloadFn () {                //获取滚动的距离
        var st = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var sn = sh + st;                //循环所有的图片
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].offsetTop <= sn) {
                imgs[i].setAttribute("src",imgs[i].getAttribute("data-original"));
            }
        }
    }
    var flag=true;
    function shownav(){
        if(flag){
            $('img.height-web').hide();
            $("#collapsible").css("left","0");
            flag=!flag;
            console.log(flag);
        }
        else {
            $("#collapsible").css("left","151.53"+'px');
            $('img.height-web').show();
            flag=!flag;
            console.log(flag);
        }

    }
