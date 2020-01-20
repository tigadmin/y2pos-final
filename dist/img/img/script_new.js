function go_to(target) {
    var scrollTop = $(target).offset().top;

    var isMobile = $("html").hasClass("mobile");

    if (target == "#form") {
        scrollTop = $(target).offset().top - $('header').height();
    }

    if (target == "#partners" && isMobile) {
        scrollTop = $(target).offset().top - $('header').height();
    }

    $('html, body').animate({scrollTop: scrollTop}, 500);
}


/* modals */
var modal_offset = 0;

function showModal(data_modal) {
    if ($(data_modal).length) {
        modal_offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        $("section").hide();
        $("header").hide();
        $(data_modal).show();
        $('html, body').scrollTop(0);
    } else {
        console.log('showModal: Invalid selector "' + data_modal + '"');
    }
}

function hideModal(data_modal) {
    if ($(data_modal).length) {
        $(data_modal).hide();
        $("section").show();
        $("header").show();
        $('html, body').scrollTop(modal_offset);
    } else {
        console.log('hideModal: Invalid selector "' + data_modal + '"');
    }
}

function isWindowActive()
{
    return window.isActive;
}

$(document).ready(function () {

    window.isActive = true;
    $(window).focus(function() { this.isActive = true; });
    $(window).blur(function() { this.isActive = false; });
    $(window).mousemove(function() { this.isActive = true; });


    // check element is within viewport
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };




    var checkOrientation = function () {
        return ($("html").hasClass("mobile") && $("html").hasClass("portrait"));
    };
    var checkDevice = function () {
        return ($("html").hasClass("mobile") || $("html").hasClass("tablet"));
    };
    $("#loader").hide();

	//TODO[Dmitry Teplov] rewrite header functionality.
    //for header background
    var changeHeader = function(){
        var bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//for diff browsers
        var startHeight = $("#start").height();
        var height = ($("body").height()-startHeight)/10;
        var header = $("header");
        var headY = header.height();
        var menuItems = $(".menu a");
        var changeItem = function(n){
            if(!checkOrientation()){
                menuItems.css("color", "#fff");
                menuItems.eq(n).css("color", "#fabd03");
            }
        };
        if (
               (bodyScrollTop >= startHeight && bodyScrollTop < startHeight + height)
            || (bodyScrollTop >= startHeight + height && bodyScrollTop < startHeight + height * 2)
            || (bodyScrollTop >= startHeight + height * 3 && bodyScrollTop < startHeight + height * 4)
            || (bodyScrollTop >= startHeight + height * 5 && bodyScrollTop < startHeight + height * 6)
            || (bodyScrollTop >= startHeight + height * 7 && bodyScrollTop < startHeight + height * 9)
        ){
            header.css("background-color", "#393939");
        }
        else{
            header.css("background-color", "rgba(59, 59, 59, 0.3)");
        }

	    if (bodyScrollTop >= 0 && bodyScrollTop < startHeight - headY) {
		    changeItem(0);
	    }
	    else if (bodyScrollTop >= startHeight && bodyScrollTop < startHeight + 2 * height) {
		    changeItem(1);
	    }
	    else if (bodyScrollTop >= startHeight + height * 7 && bodyScrollTop < startHeight + 8 * height) {
		    changeItem(2);
	    }
	    else if (bodyScrollTop >= startHeight + height * 8 && bodyScrollTop < startHeight + 9 * height) {
		    changeItem(3);
	    }
	    else if (bodyScrollTop >= startHeight + height * 7) {
		    changeItem(4);
	    }
        
    };

    if ($("html").hasClass("mobile") == false) {
        changeHeader();
        $(window).scroll(changeHeader);
    }

    $('.go_to').click(function () {
        go_to($(this).attr('data-href'));
    });

    //for slider correct work
    if($(".animated_slider").length){
        var nextRightPos = $(".next_item").css("right").slice(0,-2) - 0;
        var prevRightPos = $(".previous_item").css("right").slice(0,-2) - 0;
        var currRightPos = $(".current_item").css("right").slice(0,-2) - 0;
        $(".animated_slider ul").each( function (index) {
            var slider = $(this).data("AnimatedSlider");
            var list = $(".flip ul").eq(index);
            $(this).children().each( function (i) {
                if(i == 0){
                    list.append("<li class='pin active'></li>");
                }
                else{
                    list.append("<li class='pin'></li>");
                }
            });
            list.children().click( function(e) {
                var pin = $(e.currentTarget);
                if(!pin.hasClass("active")){
                    list.children(".active").removeClass("active");
                    $(pin).addClass("active");
                    list.children().each( function(i, v) {
                        if($(v).hasClass("active")){
                            $(".animated_slider ul").eq(index).children().removeAttr("style");
                            $(".animated_slider p").removeClass('no-opacity');
                            if(i == list.children().length - 1){
                                slider.setItem(0);
                            }
                            else{
                                slider.setItem(i+1);
                            }
                            setTimeout("$('.current_item p').addClass('no-opacity')", 500);
                        }
                    });
                }
            });
            var slideLeft = function() {
                $(".animated_slider p").removeClass('no-opacity');
                var activeItem = list.children(".active");
                var item = list.children().index(activeItem);
                slider.setItem(item);
                setTimeout("$('.current_item p').addClass('no-opacity')", 500);
                if(activeItem.prev().length){
                    activeItem.prev().addClass("active");
                    activeItem.last().removeClass("active");
                }
                else{
                    list.children().last().addClass("active");
                    activeItem.first().removeClass("active");
                }
            };
            var slideRight = function() {
                $(".animated_slider p").removeClass('no-opacity');
                var activeItem = list.children(".active");
                var item = list.children().index(activeItem);
                if(item == list.children().length-1){
                    slider.setItem(1);
                }
                else if(item == list.children().length-2){
                    slider.setItem(0);
                }
                else{
                    slider.setItem(item+2);
                }
                setTimeout("$('.current_item p').addClass('no-opacity')", 500);
                if(activeItem.next().length){
                    activeItem.next().addClass("active");
                    activeItem.first().removeClass("active");
                }
                else{
                    list.children().first().addClass("active");
                    activeItem.last().removeClass("active");
                }
            };
            $(".slider-left").eq(index).click(slideLeft);
            $(".slider-right").eq(index).click(slideRight);

            //swipe
            $(".animated_slider ul").eq(index).swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
                    if(phase == "cancel"){
                        $(this).find(".current_item").animate({right: "5vw"}, 200);
                        $(this).find(".next_item").animate({right: "-95vw"}, 200);
                        $(this).find(".previous_item").animate({right: "105vw"}, 200);
                    }
                    if(direction == "left"){
                        $(this).find(".current_item").css("right", currRightPos + distance + "px");
                        $(this).find(".next_item").css("right", nextRightPos + distance + "px");
                    }
                    else if(direction == "right"){
                        $(this).find(".current_item").css("right", currRightPos - distance + "px");
                        $(this).find(".previous_item").css("right", prevRightPos - distance + "px");
                    }
                },
                swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
                    $(this).find(".current_item").animate({right: "105vw"}, 200, slideRight);
                    $(this).find(".next_item").animate({right: "5vw"}, 200);
                },
                swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
                    $(this).find(".current_item").animate({right: "-95vw"}, 200, slideLeft);
                    $(this).find(".previous_item").animate({right: "5vw"}, 200);
                },
                threshold: 100,
                allowPageScroll:"auto"
            });
        });
    }

    //for #app section
    var screenWidth = Math.round($(".empty-iphone").width()*13/15)+5;
    var leftPos = Math.round(-(screenWidth*3-$(".app-mob").width()-30)/2);
    var changeMobile = function () {
        screenWidth = Math.round($(".empty-iphone").width()*13/15)+5;
        leftPos = Math.round(-(screenWidth*3-$(".app-mob").width()-30)/2);
        $(".app-mob div").css({
            "width": screenWidth*3+"px",
            "border-left": screenWidth + "px" +" solid #fff",
            "border-right": screenWidth + "px" +" solid #fff",
            "left": leftPos+"px"
        });
    };
    changeMobile();

    $("#app li").click( function(){
        var item = $("#app ul").children().index($(this))+1;
        if(!$(this).hasClass("show-li")){
            $(".next-mob").removeClass("next-mob");
            $(".show-li").removeClass("show-li");
            $(this).addClass("show-li");
            $("#app img").eq(item).addClass("next-mob");
            $(".next-mob").css("left", screenWidth+"px");
            $(".show-mob").animate({left: -screenWidth+"px"}, 400, function () {
                $(".show-mob").removeAttr("style");
                $(".show-mob").removeClass("show-mob");
            });
            $(".next-mob").animate({left: "0"}, 400, function () {
                $("#app img").eq(item).toggleClass("next-mob show-mob");
            });
        }
    });

    //for hamburger menu
    var hamburger = $(".hamburger"),
        menu = $(".menu");

    var toggleMenu = function () {
        if( $(".hamburger img").css("display") == "inline" ) {
            $(".hamburger > div").css("display", "block");
            $(".hamburger img").css("display", "none");
            menu.css("display", "block");
            menu.children().css("display", "block");
            if(checkOrientation()){
                menu.children(".menu-mobile-hidden").slideUp(100);
                menu.slideUp(200);
            }
            else{
                menu.children(".menu-mobile-hidden").css("display", "none");
            }
            menu.children().not(".menu-mobile-hidden").slideUp(200);
            $("html, body").css("overflow", "auto");
        }
        else{
            $(".hamburger > div").css("display", "none");
            $(".hamburger img").css("display", "inline");
            menu.css("display", "block");
            menu.children().css("display", "none");
            if(checkOrientation()){
                menu.css("display", "none");
                menu.children(".menu-mobile-hidden").slideDown(100);
                menu.slideDown(200);
            }
            else{
                menu.children(".menu-mobile-hidden").css("display", "none");
            }
            menu.children().not(".menu-mobile-hidden").slideDown(200);
            if(checkOrientation()){
                $("html, body").css("overflow", "hidden");
            }
        }
        if(!$("html").hasClass("mobile")){
            hamburger.css("backgroundColor", "#616161");
        }
    };

    hamburger.hover(function () {
            if(!$("html").hasClass("mobile")){
                hamburger.css("backgroundColor", "#616161");
            }
        }, function () {
            if( menu.css("display") == "block" ){
                hamburger.css("backgroundColor", "#393939");
            }
            else{
                hamburger.css("backgroundColor", "initial");
            }
        });
    hamburger.click( function(){
        toggleMenu();
    });
    $(".menu li").click( function(){
        if (hamburger.css("display") == "block"){
            toggleMenu();
            hamburger.css("backgroundColor", "initial");
        }
    });

    $(window).resize(function(){
        if(!checkOrientation()){
            var menu = $(".menu");
            if($(".hamburger").css("display") == "none"){
                menu.css("display", "block");
                menu.children().not(".menu-mobile-hidden").css("display", "inline-block");
            }
            else{
                menu.css("display", "none");
                $(".hamburger > div").css("display", "block");
                $(".hamburger img").css("display", "none");
            }
        }
        changeMobile();
        changeFlip();
        findSelectWidth();
    });

    //for flip position
    var changeFlip = function(elementId){
        var elem = $("#" + elementId);

        var slider = elem.parent();
        var wrapper = slider.parent();

        if(!slider.length){
            return;
        }

        var indent = slider.css("top").slice(0,-2)-0;

        var currentItemImg = wrapper.find( ".current_item img" );
        var currentItemH3 = wrapper.find( ".current_item h3" );

        var flip =  wrapper.find( ".flip" );
        var sliderArrow = wrapper.find( ".slider-arrow" );

        var imgHeight = Math.round(currentItemImg.height());
        var top = indent + imgHeight + (currentItemH3.css("font-size").slice(0,-2)-0)*13/12 + 48;

        flip.css("top", top+"px");
        sliderArrow.css("top", indent + Math.round(imgHeight/2));
    };

    changeFlip('slider1');
    changeFlip('slider2');
    changeFlip('slider3');

    // clients slick slider
    $('.clients__banners').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //for terminal small page
    $(".term-select a").click( function(e){
        var item = $(e.currentTarget).parent().parent();
        var index = $(".term-select").children().index(item);
        if(!item.hasClass("choice")){
            $(".choice").removeClass("choice");
            item.toggleClass("choice");
            $(".chosen").removeClass("chosen");
            $(".term-info").children().eq(index).addClass("chosen");
        }
    });

    //for terminal modal
    var modalItem = null;
    var closeModal = function () {
        $(".modal-term").css("display", "none");
        $(".white-modal").css("display", "none");
        $(".modal-term .container").css({"opacity": 1,"display": "none"});
        $("html, body").css("overflow", "auto").scrollTop($("#terminal").offset().top);
    };
/*    $(".detail").parent().click(function(){
        /!* redirect to separate page*!/
        var pageId = $(".detailed").index($(this).parent());
        pageId += 1;
        var route = '/hardware-' + pageId;
        var isMobile = $("html").hasClass("mobile");
        if(!isMobile){
            window.open(route, '_blank');
            //window.location.href = route;
            return;
        }
        /!**!/

        $(".modal-term").css("display", "block");
        $(".white-modal").css("display", "block");
        $("html, body").css("overflow", "hidden");
        modalItem = $(".detailed").index($(this).parent());

        $(".modal-term .container").eq(modalItem).css("display", "block");
        if(checkDevice()){
            window.onhashchange = function () {
                if(window.location.hash == ""){
                    closeModal();
                }
                else{
                    $('html, body').scrollTop($("#terminal").offset().top);
                }
            };
            window.location.hash = "#terminals";
        }
    });*/
    $(".term-button").eq(2).click(function(){
        var isMobile = $("html").hasClass("mobile");
        if(!isMobile){
            //window.location.href = '/';
            window.close();
        }

        if(checkDevice()) {
            // history.back();
        }
        closeModal();
    });
    $(window).keydown(function (e) {
       if(e.keyCode == 27 || e.which == 27){
           if(checkDevice()) {
               // history.back();
           }
           closeModal();
       }
    });
    $(".term-button").eq(1).click(function () {
        var isMobile = $("html").hasClass("mobile");
        if(!isMobile){
            //window.location.href = '/';
            window.close();
        }

        $(".modal-term .container").eq(modalItem).animate({opacity: 0}, 200, function () {
            $(".modal-term").scrollTop(0);
            $(".modal-term .container").css("display", "none");
            modalItem = (modalItem == 3) ? 0: modalItem+1;
            var newModal = $(".modal-term .container").eq(modalItem);
            newModal.css({"display": "block", "opacity": 0});
            newModal.animate({opacity: 1}, 200);
        });
    });
    $(".term-button").eq(0).click(function () {
        var isMobile = $("html").hasClass("mobile");
        if(!isMobile){
            //window.location.href = '/';
            window.close();
        }

        $(".modal-term .container").eq(modalItem).animate({opacity: 0}, 200, function () {
            $(".modal-term").scrollTop(0);
            $(".modal-term .container").css("display", "none");
            modalItem = (modalItem == 0) ? 3: modalItem-1;
            var newModal = $(".modal-term .container").eq(modalItem);
            newModal.css({"display": "block", "opacity": 0});
            newModal.animate({opacity: 1}, 200);
        });
    });

    //for pseudo-select
    var findSelectWidth = function () {
        $(".pseudo-select").css("width", Math.round($(".head-select").outerWidth()) + "px");
    };
    $(".head-select").click( function () {
        var pseudoAll = $('.pseudo-select');
        pseudoAll.css("display", "none");

        var pseudo = $(this).siblings('.pseudo-select');
        if (pseudo.css("display") == "none"){
            pseudo.css("display", "block");
        }
        else{
            pseudo.css("display", "none");
        }
    });
    $(".select").focusout( function () {
        var element = $(this);
        setTimeout(function () {
            element.find(".pseudo-select").css("display", "none");
        }, 100);
    });
    $(".select input").click( function () {
        var element = $(this);

        var pseudo = element.closest(".pseudo-select");
        pseudo.css("display", "none");

        var head = pseudo.siblings('.head-select');
        var headSpan = head.find('span').eq(0);

        headSpan.text(element.parent().text())
    });
    findSelectWidth();

    //intro
    var introAnimate0, introAnimate1, introAnimate2, introAnimate3, introAnimate4;
    var skipIntro = function(duration){
        if($(".intro").css("display") != "none"){
            $("body").css("overflowY", "auto").scrollTop(0);
        }
        $(".intro").animate({opacity: 0}, duration, function () {
            $(".intro").css("display", "none");
        });
    };
    var closeIntro = function () {
        $(".intro-over").animate({backgroundColor: "#393939"}, 2000, function () {
            setTimeout(function () { skipIntro(2000) }, 300);
        });
        $(".intro-over").children().animate({opacity: 0}, 1500);
    };
    var changeIntro = function(index, delay){
        $(".show-text").animate({opacity: 0}, delay, "easeOutQuart", function(){
            $(".intro-text h3").removeClass("show-text").eq(index).addClass("show-text");
            $(".show-text").css("opacity", 0).animate({opacity: 1}, delay, "easeOutQuart");
        });
    };

    $(".skip-intro").click(function () { skipIntro(500); });

    //for swipers
    var changeSwipeDots = function (swiper, direction) {
        var swiperList = $(swiper + " li"),
            index = swiperList.index($(swiper + " .active")),
            length = swiperList.length,
            next;
        $(swiper + " .active").removeClass("active");
        if(direction == "left"){
            next = ( index == length-1) ? 0 : index+1;
        }
        else{
            next = ( index == 0) ? length-1 : index-1;
        }
        swiperList.eq(next).addClass("active");
    };

    //terminal swiper
    /*var nextRightTerm = $(".term-next").css("right").slice(0,-2) - 0;
    var prevRightTerm = $(".term-prev").css("right").slice(0,-2) - 0;
    $(".term-info .col-md-3").swipe({
        swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
            if(checkOrientation()){
                if(phase == "cancel"){
                    $(".chosen").animate({right: 0}, 200);
                    $(".term-next").animate({right: "-95vw"}, 200);
                    $(".term-prev").animate({right: "95vw"}, 200);
                }
                if(direction == "left"){
                    $(".chosen").css("right", distance + "px");
                    $(".term-next").css("right", nextRightTerm + distance + "px");
                }
                else if(direction == "right"){
                    $(".chosen").css("right", -distance + "px");
                    $(".term-prev").css("right", prevRightTerm - distance + "px");
                }
            }
        },
        swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
            if(checkOrientation()) {
                var termPrev = $(".term-prev");
                changeSwipeDots(".flip2", "left");
                $(".chosen").animate({right: "95vw"}, 200, function () {
                    termPrev.removeClass("term-prev");
                    $(".chosen").removeClass("chosen").addClass("term-prev");
                    $(".term-next").addClass("chosen").removeClass("term-next");
                    termPrev.addClass("term-next").css("right", 0);
                });
                $(".term-next").animate({right: 0}, 200);
            }
        },
        swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
            if(checkOrientation()) {
                var termNext = $(".term-next");
                changeSwipeDots(".flip2", "right");
                $(".chosen").animate({right: "-95vw"}, 200, function () {
                    termNext.removeClass("term-next");
                    $(".chosen").removeClass("chosen").addClass("term-next");
                    $(".term-prev").addClass("chosen").removeClass("term-prev");
                    termNext.addClass("term-prev").css("right", 0);
                });
                $(".term-prev").animate({right: 0}, 200);
            }
        },
        threshold: 100,
        allowPageScroll:"auto"
    });*/

    var mobScreenshot = $(".mob-screenshot");
    if(mobScreenshot.length){
        var nextRightMob = $(".next_mob").css("right").slice(0,-2) - 0,
            nextNextRightMob = $(".next_next_mob").css("right").slice(0,-2) - 0,
            prevRightMob = $(".prev_mob").css("right").slice(0,-2) - 0,
            prevPrevRightMob = $(".prev_prev_mob").css("right").slice(0,-2) - 0,
            currRightMob = $(".cur_mob").css("right").slice(0,-2) - 0,
            diffMob = prevRightMob-currRightMob,
            mobList = $(".mob-screenshot img");
        mobScreenshot.swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
                var cur = $(".cur_mob"),
                    next = $(".next_mob"),
                    prev = $(".prev_mob"),
                    next_next = $(".next_next_mob"),
                    prev_prev = $(".prev_prev_mob");
                if(phase == "cancel"){
                    cur.animate({right: "18vw", opacity: "1", transform: "scale(1)"}, 200);
                    next.animate({right: "-41vw", opacity: "0.5", transform: "scale(0.9)"}, 200);
                    prev.animate({right: "77vw", opacity: "0.5", transform: "scale(0.9)"}, 200);
                    next_next.animate({right: "-100vw", opacity: "0.5", transform: "scale(0.8)"}, 200);
                    prev_prev.animate({right: "136vw", opacity: "0.5", transform: "scale(0.8)"}, 200);
                }
                if(direction == "left"){
                    cur.css({ "right": currRightMob + distance + "px",
                        "opacity": 1 - distance/diffMob*0.5,
                        "transform": "scale(" + (1-distance/diffMob*0.1) + ")"});
                    next.css({ "right": nextRightMob + distance + "px",
                        "opacity": 0.5 + distance/diffMob*0.5,
                        "transform": "scale(" + (0.9+distance/diffMob*0.1) + ")"});
                    next_next.css({ "right": nextNextRightMob + distance + "px",
                        "transform": "scale(" + (0.8+distance/diffMob*0.1) + ")"});
                    prev.css("right", prevRightMob + distance + "px");
                }
                else if(direction == "right"){
                    cur.css({ "right": currRightMob - distance + "px",
                        "opacity": 1 - distance/diffMob*0.5,
                        "transform": "scale(" + (1-distance/diffMob*0.1) + ")"});
                    prev.css({ "right": prevRightMob - distance + "px",
                        "opacity": 0.5 + distance/diffMob*0.5,
                        "transform": "scale(" + (0.9+distance/diffMob*0.1) + ")"});
                    prev_prev.css({ "right": prevPrevRightMob - distance + "px",
                        "transform": "scale(" + (0.8+distance/diffMob*0.1) + ")"});
                    next.css("right", nextRightMob - distance + "px");
                }
            },
            swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
                var cur = $(".cur_mob"),
                    next = $(".next_mob"),
                    prev = $(".prev_mob"),
                    next_next = $(".next_next_mob"),
                    prev_prev = $(".prev_prev_mob"),
                    cur_sub = $(".cur_sub");
                cur.transition({right: "77vw", opacity: "0.5", transform: "scale(0.9)"}, 200, function () {
                    mobList.removeAttr("style");
                    prev_prev.removeClass("prev_prev_mob");
                    prev.removeClass("prev_mob").addClass("prev_prev_mob");
                    cur.removeClass("cur_mob").addClass("prev_mob");
                    next.addClass("cur_mob").removeClass("next_mob");
                    next_next.addClass("next_mob").removeClass("next_next_mob");
                    if(next_next.index() == 7){
                        mobList.eq(0).addClass("next_next_mob");
                    }
                    else{
                        next_next.next().addClass("next_next_mob");
                    }
                });
                next.transition({right: "18vw", opacity: "1", transform: "scale(1)"}, 200);
                next_next.transition({right: "-41vw", opacity: "0.5", transform: "scale(0.9)"}, 200);

                cur_sub.removeClass("cur_sub");
                if(cur_sub.index() == 7){
                    cur_sub.parent().children().eq(0).addClass("cur_sub");
                }
                else{
                    cur_sub.next().addClass("cur_sub");
                }
            },
            swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
                var cur = $(".cur_mob"),
                    next = $(".next_mob"),
                    prev = $(".prev_mob"),
                    next_next = $(".next_next_mob"),
                    prev_prev = $(".prev_prev_mob"),
                    cur_sub = $(".cur_sub");
                cur.transition({right: "-41vw", opacity: "0.5", transform: "scale(0.9)"}, 200, function () {
                    mobList.removeAttr("style");
                    next_next.removeClass("next_next_mob");
                    next.removeClass("next_mob").addClass("next_next_mob");
                    cur.removeClass("cur_mob").addClass("next_mob");
                    prev.addClass("cur_mob").removeClass("prev_mob");
                    prev_prev.addClass("prev_mob").removeClass("prev_prev_mob");
                    if(prev_prev.index() == 0){
                        mobList.eq(7).addClass("prev_prev_mob");
                    }
                    else{
                        prev_prev.prev().addClass("prev_prev_mob");
                    }
                });
                prev.transition({right: "18vw", opacity: "1", transform: "scale(1)"}, 200);
                prev_prev.transition({right: "77vw", opacity: "0.5", transform: "scale(0.9)"}, 200);

                cur_sub.removeClass("cur_sub");
                if(cur_sub.index() == 0){
                    cur_sub.parent().children().eq(7).addClass("cur_sub");
                }
                else{
                    cur_sub.prev().addClass("cur_sub");
                }
            },
            threshold: 100,
            allowPageScroll:"auto"
        });
    }



    function doOnOrientationChange() {
        nextRightPos = $(".next_item").css("right").slice(0,-2) - 0;
        prevRightPos = $(".previous_item").css("right").slice(0,-2) - 0;
        currRightPos = $(".current_item").css("right").slice(0,-2) - 0;
        nextRightTerm = $(".term-next").css("right").slice(0,-2) - 0;
        prevRightTerm = $(".term-prev").css("right").slice(0,-2) - 0;
        nextRightMob = $(".next_mob").css("right").slice(0,-2) - 0;
        nextNextRightMob = $(".next_next_mob").css("right").slice(0,-2) - 0;
        prevRightMob = $(".prev_mob").css("right").slice(0,-2) - 0;
        prevPrevRightMob = $(".prev_prev_mob").css("right").slice(0,-2) - 0;
        currRightMob = $(".cur_mob").css("right").slice(0,-2) - 0;
        diffMob = prevRightMob-currRightMob;

        if($(".mob-screenshot").length){
            mobList = $(".mob-screenshot img");
        }

        setTimeout(changeFlip, 600);
    }

    window.addEventListener('orientationchange', doOnOrientationChange);

    (function () {
        //var introEnabled = false;
        var introEnabled = isIntroEnabled();

        if(!($("html").hasClass("mobile") || $("html").hasClass("tablet")) && introEnabled) {
            introAnimate0 = setTimeout( function () {
                $(".show-text").css("opacity", 0).animate({opacity: 1}, 4000, "easeOutQuart");
                introAnimate1 = setTimeout(function () {
                    changeIntro(1, 800);
                    introAnimate2 = setTimeout(function () {
                        $(".show-text").animate({opacity: 0}, 800, "easeOutQuart", function () {
                            $(".intro-text h3").removeClass("show-text").eq(2).addClass("show-text");
                        });
                        introAnimate3 = setTimeout(function () {
                            var introLast = $(".intro-last").children();
                            introLast.eq(0).animate({opacity: 1}, 750, "easeOutQuart", function () {
                                introLast.eq(1).animate({opacity: 1}, 750, "easeOutQuart", function () {
                                    $(".intro-over").animate({backgroundColor: "rgba(0, 0, 0, 0.1)"}, 4000);
                                    introLast.eq(2).animate({opacity: 1}, 750, "easeOutQuart", function () {
                                        introLast.eq(3).animate({opacity: 1}, 750, "easeOutQuart", function () {
                                            introAnimate4 = setTimeout(closeIntro, 3500);
                                        });
                                    });
                                });
                            });
                        }, 800);
                    }, 4000);
                }, 4000);
            }, 2000);
            $(".intro-logo img").animate({opacity: 1}, 4000, "easeOutQuart");
            $(".skip-intro").animate({opacity: 0.7}, 4000, "easeOutQuart");

            setTimeout(function () {
                $(".intro-over").animate({backgroundColor: "rgba(0, 0, 0, 0.5)"}, 5000);
            }, 2500);
        }
        else{
            skipIntro(500);
        }
    })();

    $(".detailed").click(function () {

        var isMobile = $("html").hasClass("mobile");

        var modal = $(this).attr("data-modal");
        var route = modal.replace('#modal-','');
        route = '/' + route;

        console.log(route);

        if(isMobile){
            showModal(modal);
        }
        else{
            window.open(route,'_blank');
            //window.location.href = route;
        }
    });

    $(".pop-up-btn").click(function () {

        var isMobile = $("html").hasClass("mobile");

        var modal = $(this).attr("data-modal");
        var route = modal.replace('#modal-','');
        route = '/' + route;

        console.log(route);

        if(isMobile){
            console.log('mobile');
            showModal(modal);
        }
        else{
            console.log('not');
            window.open(route,'_blank');
            //window.location.href = route;
        }
    });

    $(".btn-close-modal").click(function () {
        console.log('hideModal');

        var isMobile = $("html").hasClass("mobile");

        console.log('hideModal');

        if(isMobile){
            hideModal($(this).attr("data-modal"));
        }
        else{
            window.location.href = '/';
        }
    });

  // TODO[Dmitry Teplov] separate iterator and fade iterator.
    var FadeIterator = {
        init: function(items, iterationInterval, fadeTime) {
            if (fadeTime*2 > iterationInterval) {
                iterationInterval = fadeTime*2;
            }

            var ObjectList = {
                elems: items,
                length: function() {
                    return this.elems.length;
                },
                index: 0,
                bump: function(){
                  if (this.index === (this.length() - 1)) {
                    this.index = 0;
                  } else {
                    this.index++;
                  }
                },
                currentItem: function(){
                  return this.elems.eq(this.index);
                },
                nextItem: function(){
                    this.bump();
                    return this.elems.eq(this.index);
                }
            };

            return setInterval(function(){
                if($('.business-type').isInViewport() && isWindowActive()){
                    ObjectList.currentItem()
                        .fadeOut(fadeTime, function(){
                            ObjectList.nextItem()
                                .fadeIn(fadeTime)
                        });
                }
            }, iterationInterval);;
        }
    };

    callToActionRotator = FadeIterator.init($('.js_call-to-action-rotator'), 5000, 500);
});
