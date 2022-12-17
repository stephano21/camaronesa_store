import { card, } from './partials.js';
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
        previe_image()
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
    function previe_image() {
        $("#inputGroupFileAddon04").click(function () {
            alert("Handler for .click() called.");
            let img = $("#inputGroupFile04").prop("files")[0];
            console.log(img);
            let folder = 'products';
            /*$.ajax({
                url: "xd.php",
                type: 'POST',
                data: { img, folder },
                success: function (response) {
                    console.log(response);
                }
            });*/
        });

        /*$.ajax({
            url:'/loader_products',
            type: 'GET',
            success: function(response){
                let item = JSON.parse(response);
                let render = card(item);
                $('#items').html(render);
            }
        });*/
    }
});

