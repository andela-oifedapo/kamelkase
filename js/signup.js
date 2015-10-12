$(
    toastr.options.onHidden = function() {
        window.location = '/'
    }
    $('#form').submit(function(e) {
            e.preventDefault();
            var formData = JSON.stringify({
                data: $("#form").serializeArray()
            });
            $.ajax({
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: formData,
                url: 'https://ifedapoolarewaju.cloudant.com/schools/',
                success: function(){
                    toastr.success('Your Entry Has been saved')
                }
            })
        }

    )
);
