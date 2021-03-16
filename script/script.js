$(function () {
    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul.subMenu").stop().fadeIn(3000);
        });


    $("#mainMenu>li").mouseout(function () {
        $(this).children("ul.subMenu").stop().fadeOut(3000);
    });

    /*헤더 gnb메뉴 끝*/

    /*슬라이드영역*/


    setInterval(fnslide, 3000);

    function fnslide() {
      /*  $("#shuttleFrame").animate({
            "marginLeft": "-1200px"
        }, 3000, function () {
            $("#shuttleFrame").css({
                "marginLeft": "0"
            });

            $("#shuttleFrame>a:first-child").insertAfter("#shuttleFrame>a:last-child")

        })

*/
        $("#shuttleFrame a").fadeOut(500);
        $("#shuttleFrame a:nth-child(2)").fadeIn(1000,
        function(){
            $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");

                                            });

    };

        /*슬라이드영역 끝*/



//    $("#multiTab>button:first-child").click(function () {
//        $("button").css({
//            "border": "none",
//            "top": "0px"
//        });
//
//        $(this).css({
//            "border": "1px solid #aaa",
//            "borderBottom": "none",
//            "top": "1px"
//        });
//
//        $("#multiTab").css({
//            "display": "block"
//        });
//        $("#gallery").css({
//            "display": "none"
//        });
//
//    });
//
//    $("#multiTab>button:nth-child(2)").click(function () {
//        $("button").css({
//            "border": "none",
//            "top": "0px"
//        });
//
//        $(this).css({
//            "border": "1px solid #aaa",
//            "borderBottom": "none",
//            "top": "1px"
//        });
//
//
//
//
//        $("#gallery").css({
//            "display": "block"
//        });
//
//        $("#multiTab").css({
//            "display": "none"
//        });
//
//
//
//
//    });

    /*멀티탭 버튼 영역 */


    $("#aside #btn1").click(function(){
       $("button").css({"border":"none",
                       "top":"25px"});
        $(this).css({"border":"1px solid #aaa",
                    "border-bottom":"none",
                    "top":"26px"});

        $("div#multiTab").css({"display":"block"});
        $("div#gallery").css({"display":"none"});

    });

    $("#aside #btn2").click(function(){
       $("button").css({"border":"none",
                       "top":"25px"});
        $(this).css({"border":"1px solid #aaa",
                    "border-bottom":"none",
                    "top":"26px"});

        $("div#multiTab").css({"display":"none"});
        $("div#gallery").css({"display":"block"});

    });




        /*멀티탭 버튼 영역 끝*/

    /*레이어팝업 영역*/





    $("#aside span#Popup").click(function(){
       $("#modalArea").css({"display":"block"});

    });

    $("#closebtn>button").click(function(){
       $("#modalArea").css({"display":"none"});
    });

        /*레이어팝업 영역 끝*/


});





