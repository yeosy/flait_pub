/*! common.js - 2018-10-18 === yeosoyeong */

$(document).ready(function () {
    //layer popup
    // data="layerNm(해당 레이어 팝업 id값)
    $('.layerOpen').click(function () {
        var layerNm = $(this).attr('id');
        $('.layer').hide();
        $('#'+layerNm+'Layer').fadeIn();
    })
    $('.layer .close, .overlay').click(function () {
        $(this).closest($('.layer')).fadeOut();
    });

    //layer_over
    // data="layerNm(해당 레이어 팝업 id값)
    $('.layer_over').mouseover(function(){
        var layerNm = $(this).attr('id');
        $('#'+layerNm+'Layer').show();
    }).mouseleave(function(){
        $('.layerOver').hide();
    });

    
    //active클래스 추가 제거 기능
    $('.onChg .btn').click(function(){
        $('.onChg .btn').removeClass('on');
        $(this).addClass('on');
    });
});

/* jquery ui */
$(function(){
    //select menu
    $('.ship_select, .select').selectmenu(); 

    //datepicker
    $( ".datepicker" ).datepicker(); 

    //sortable(SMS 주소록)
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
});