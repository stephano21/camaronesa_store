import {card,carrousel,card_simple,validar} from './partials.js';
//import {carrousel} from './custom.js';
"use strict";
$(document).ready(function () {
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            deleteAllCookies();
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
        load_predict_products();
        load_products();
        console.log("loaded..")
    });
    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    function load_predict_products(){
        $.ajax({
            url:'/loader_products',
            type: 'GET',
            success: function(response){
                let item = JSON.parse(response);
                let render = card(item);
                $('#place_carrousel').html(render);
                carrousel()
            }
        });
    }
    function load_products(){
        $.ajax({
            url:'/loader_products',
            type: 'GET',
            success: function(response){
                let item = JSON.parse(response);
                let render = card_simple(item);
                $('#simple_product_list').html(render);
            }
        });
    }
});
/*

*/
