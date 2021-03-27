$(document).ready(function () {

    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function () {
            scroll_top = $(this).scrollTop();
            if (scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                $(".header_logo").css("visibility", "visible");
                $('.navbar-collapse').collapse('hide');
            } else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                $(".header_logo").css("visibility", "visible");
                $('.navbar-collapse').collapse('hide'); //to collapse the nav menu on mobile
            }
            last_scroll_top = scroll_top;
        });
    }


    $('#proj1').show();
    $('.scrollmenu').on('click', 'a', function () {
        $('.scrollmenu li a').removeClass('selected');
        $(this).addClass('selected');
        var proj_container_id = $(this).attr("id");

        $(".hidden1").hide()
        $(".hidden2").hide()
        $('.proj_container').hide();
        $(proj_container_id).show();
        $(body).scrollTop(100);


        $(window).scrollTop($('#project_banner').offset().top);
    });



    $(".link_hidden1").click(function(){
        if($(".hidden1").is(":visible")){
            $(".hidden1").hide()
        } else{
            $(".hidden1").show()
        }
        return false
    });

    $(".link_hidden2").click(function(){
        if($(".hidden2").is(":visible")){
            $(".hidden2").hide()
        } else{
            $(".hidden2").show()
        }
        return false
    });

    $(".link_hidden3").click(function(){
        parent = $(this).parent()
        if(parent.find("span.hidden3").is(":visible")){
            parent.find("span.hidden3").hide()
        } else{
            parent.find("span.hidden3").show()
        }
        return false
    });

    $(".showmore").click(function(){
        if($(".showless").is(":visible")){
            $(".showless").hide()
            $(".showmore").text("Show more")
            $(".elipses").show()
        } else{
            $(".showless").show()
            $(".showmore").text("Show less")
            $(".elipses").hide()
        }
        return false

    })



});