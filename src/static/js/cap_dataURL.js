document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "interactive") { 
        let params = new URLSearchParams(location.search);
        let id=String(params.get('data'));
        console.log(id);
        //params.getAll('data');
        $(document).ready(function() {
            //console.log(id)
            let token=$("#token").val();
            console.log(token)
            $.ajax({
                url:'/loader_item',
                type: 'POST',
                data:id,token,
                success: function(response){
                    let item = JSON.parse(response);
                    console.log(item)
                    //let render = card_simple(item);
                    //$('#simple_product_list').html(render);
                }
            });
        })
    }
    //The page end load
    if (event.target.readyState === "complete") {
        $(document).ready(function() {
            //console.log(id)
            console.log("...")
        })
    }
});