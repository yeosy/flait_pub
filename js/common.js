/*! common.js - 2018-10-18 === yeosoyeong */
//layer popup
$(document).ready(function () {
    // data="layerNm(해당 레이어 팝업 id값)
    $('.layerOpen').click(function () {
        var layerNm = $(this).attr('id');
        $('#'+layerNm+'Layer').fadeIn();
    })
    $('.layer .close, .overlay').click(function () {
        $('.layer').fadeOut();
    })
})

//layer_over
$(document).ready(function () {
    // data="layerNm(해당 레이어 팝업 id값)
    $('.layer_over').mouseover(function(){
        var layerNm = $(this).attr('id');
        $('#'+layerNm+'Layer').fadeIn();
    }).mouseleave(function(){
        setTimeout(function(){
            $('.layerOver').fadeOut()
        }, 300)
    });
})

//주소록 tab_menu
$(document).ready(function(){
    $('.bylist_name li:first-child').click(function(){
        $('.bylist_name li').removeClass('active');
        $('.bylist > div').removeClass('visible');
        $(this).addClass('active');
        $('.byname_list').addClass('visible');
    });
    $('.bylist_name li:nth-child(2)').click(function(){
        $('.bylist_name li').removeClass('active');
        $('.bylist > div').removeClass('visible');
        $(this).addClass('active');
        $('.bygroup_list').addClass('visible');
    });
})

//그룹별
$(document).ready(function(){
    $('.group_list > li').each(function(index){
        $(this).attr('data-index', index);
    }).click(function(){
        var i = $(this).attr('data-index');
        $('.group_list >li').removeClass('active');
        $(this).addClass('active');
        $('.groups_list').removeClass('visible');
        $('.groups_list').eq(i).addClass('visible');
    });
})

//주소록 선택
$(document).ready(function(){
    $('.scroll_y > li').click(function(){
        $(this).toggleClass('selected');
    });
})

//전체 선택
$(document).ready(function(){
    $('.btn_allchk').click(function(){
        $('.address_list .scroll_y > li').addClass('selected');
    });
    $('.btn_allchkN').click(function(){
        $('.address_list .scroll_y > li').removeClass('selected');
    });
})

/* jquery ui */
$(function(){
    //select menu
    $('.ship_select, .select').selectmenu(); 

    //datepicker
    $( "#datepicker" ).datepicker(); 

    //sortable(SMS 주소록)
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
});