/*! common.js - 2018-10-18 === yeosoyeong */

// window popup(header-login history)
function loginList() {
    window.open(
        '/application/popup/views/loginHistory.html',
        'loginList',
        'width=500, height=500, top=100, left=540, scrollbars=yes'
    );
}

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