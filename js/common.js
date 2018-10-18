/*! common.js - 2018-10-18 === yeosoyeong */

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

//select menu (jquery ui)
$(function(){
    $('select').selectmenu();
});

//datepicker (jquery ui)