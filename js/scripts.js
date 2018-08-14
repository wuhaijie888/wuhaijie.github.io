$(document).ready(function() {
    $('body').show();
    $('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
        $('.fade').removeClass('out')
    }, 1000);
    (function () {
        $('img').attr('draggable', 'false');
        $('a').attr('draggable', 'false')
    })();
    $("#email").on("mouseover", function () {
        $("#email").html("wuhaijie888@163.com");
              setTimeout(function(){
       $("#email").html("我的邮箱");
   },2000);});
    $("#warning").on("click", function () {
           $("body").addClass("hinge");
           setTimeout(function(){
            $("body").removeClass("hinge");
        },2000);
    });
    setTimeout(checkCookie,2000);
    function setCookie(cname,cvalue,exdays){
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d. toUTCString();
        document.cookie = cname+"="+cvalue+"; "+expires;
    }
    function getCookie(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)===0) { return c.substring(name.length,c.length); }
        }
        return "";
    }

    function checkCookie(){

        var user=getCookie("user");
        if (user!==""){
            alert("欢迎 " + user + " 的到来");
        }
        else {
            user = prompt("初次到访，请问怎么称呼？","");
            if (user!=="" && user!=null){
                setCookie("user",user,30);
            }
        }
    }


    $("#computer").on("mouseover", function () {
        $("#computer").html("Github page");
        setTimeout(function(){
            $("#computer").html("我的服务器");
        },2000);});



    $.fn.navSmartFloat = function () {
        var position = function (element) {
            var top = element.position().top,
                pos = element.css("position");
            $(window).scroll(function () {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {
                    $('.header-topbar').fadeOut(0);
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        }).addClass("shadow")
                    } else {
                        element.css({
                            top: scrolls
                        })
                    }
                } else {
                    $('.header-topbar').fadeIn(500);
                    element.css({
                        position: pos,
                        top: top
                    }).removeClass("shadow")
                }
            })
        };
        return $(this).each(function () {
            position($(this))
        })
    };
    $("#game").on("click",function (){
       window.open('tcs.html','game','width=500,height=500');
    });
    $("#navbar").navSmartFloat();
    $("#gotop").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#gotop").fadeIn()
        } else {
            $("#gotop").fadeOut()
        }
    });
    $("#gotop").click(function () {
        $('html,body').animate({
            'scrollTop': 0
        }, 500)
    });
    $("img.thumb").lazyload({
        placeholder: "../images/occupying.png",
        effect: "fadeIn"
    });
    $(".single .content img").lazyload({
        placeholder: "../images/occupying.png",
        effect: "fadeIn"
    });
    $('[data-toggle="tooltip"]').tooltip();
    jQuery.ias({
        history: false,
        container: '.content',
        item: '.excerpt',
        pagination: '.pagination',
        next: '.next-page a',
        trigger: '查看更多',
        loader: '<div class="pagination-loading"><img src="images/loading.gif" /></div>',
        triggerPageThreshold: 5,
        onRenderComplete: function () {
            $('.excerpt .thumb').lazyload({
                placeholder: '../images/occupying.png',
                threshold: 400
            });
            $('.excerpt img').attr('draggable', 'false');
            $('.excerpt a').attr('draggable', 'false')
        }
    });
    $(window).scroll(function () {
        var sidebar = $('.sidebar');
        var sidebarHeight = sidebar.height();
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop > sidebarHeight - 60 && sidebar.length) {
            $('.fixed').css({
                'position': 'fixed',
                'top': '70px',
                'width': '360px'
            })
        } else {
            $('.fixed').removeAttr("style")
        }
    });
    (function () {
        var oMenu = document.getElementById("rightClickMenu");
        var aLi = oMenu.getElementsByTagName("li");
        for (i = 0; i < aLi.length; i++) {
            aLi[i].onmouseover = function () {
                $(this).addClass('rightClickMenuActive');
            };
            aLi[i].onmouseout = function () {
                $(this).removeClass('rightClickMenuActive');
            }
        }
        document.oncontextmenu = function (event) {
            $(oMenu).fadeOut(0);
            var event = event || window.event;
            var style = oMenu.style;
            $(oMenu).fadeIn(300);
            style.top = event.clientY + "px";
            style.left = event.clientX + "px";
            return false
        };
        document.onclick = function () {
            $(oMenu).fadeOut(100);
        }
    })();
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 13) return true;
        if ((e.keyCode === 123) || (e.ctrlKey) || (e.ctrlKey) && (e.keyCode === 85)) {
            return false
        }
    };


    function SiteSearch(send_url, divTgs) {
        var str = $.trim($(divTgs).val());
        if (str.length > 0 && str != "请输入关键字") {
            str = str.replace(/\s+/g, "");
            str = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\，|\。|\：|\；|\·|\~|\！|\、|\《|\》|\‘|\“|\”|\【|\】|\?{|\}|\-|\=|\——|\+|\’|\—|\？]/g, "");
            str = str.replace(/<[^>]*>|/g, "");
            window.location.href = send_url + "?keyword=" + encodeURI(str)
        }
        return false
    }
});