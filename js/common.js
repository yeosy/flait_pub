/*! common.js - 2018-10-18 === yeosoyeong */
//layer popup
$(document).ready(function () {
    // data="layerNm(해당 레이어 팝업 id값)
    $('.layerOpen').click(function () {
        var layerNm = $(this).attr('id');
        $('.layer').hide();
        $('#'+layerNm+'Layer').fadeIn();
    })
    $('.layer .close, .overlay').click(function () {
        $(this).closest($('.layer')).fadeOut();
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