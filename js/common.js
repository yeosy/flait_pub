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
        var layerNm = $(this).attr('data');
        $('#' + layerNm).fadeIn();
    })
    $('.layer .close, .overlay').click(function () {
        $('.layer').fadeOut();
    })
})

/* jquery ui */
$(function(){
    //select menu
    $('select').selectmenu(); 

    //datepicker
    $( "#datepicker" ).datepicker(); 

    //sortable(SMS 주소록)
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
});