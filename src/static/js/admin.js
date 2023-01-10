import { create_model, validar} from './partials.js';
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
    $('#add_product').submit((e) => {
        validar();
        /* console.log($('#add_product').serialize());
        let img =$("#inputGroupFile04").prop("files")[0]
        let name =$("#name").val();
        let detail =$("#detail").val();
        let price =$("#price").val();
        let json = {
            name:name,
            detail:detail,
            price:price,
            photho:img,
        }
        console.log(json)
        $.ajax({
            url: '/create_product',
            type: 'POST',
            data: json,
            success: function (response) {
                console.log(response)
            }
        }); */
        e.preventDefault();
    });
    $("#inputGroupFile04").change(function(){
        let img = $("#inputGroupFile04").prop("files")[0];
        console.log('change........')
        validar();
    });
    function previe_image() {
        $("#inputGroupFileAddon04").click(function () {
            let img = $("#inputGroupFile04").prop("files")[0];
            if (img != undefined) {
                let url = URL.createObjectURL(img);
                let render = create_model(url);
                $('#img_modal').html(render);
                console.log(url);
            }
            if(img==undefined){
                let render = "";
                $('#img_modal').html(render);
            }
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

