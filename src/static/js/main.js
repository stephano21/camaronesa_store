$(document).ready(function () {
    console.log('running...')
    $('#create_account').submit((e) => {
        $.ajax({
            url: '/create_account',
            type: 'POST',
            data: $('#create_account').serialize(),
            success: function (response) {
                let data = JSON.parse(response);
                render_alert(data);
                $("#create_account")[0].reset();
            }
        });
        e.preventDefault();
    });
    $('#verify').keyup((e) => {
        let password = $('#password').val()
        let verify = $('#verify').val()
        console.log(password == verify)
        if (password == verify) {
            console.log('active button')
            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', true);
        }
    });
    function render_alert(data) {
        let alert = `
                <div class="alert alert-${data.class} alert-dismissible" role="alert" id="message">
                    <strong>${data.message}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
        $("#message").html(alert);
    }
});

/* $.ajax({
    url:'add_item.php',
    type: 'POST',
    data:{id_insumo},
    success: function(response){
        let item = JSON.parse(response);
        console.table(item[0].precio);
        $("#precio").val(item[0].precio); 
    }
}); */