//console.log('in common.js');
//console.log($);

$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    //console.log('in submitForm');
    ev.preventDefault();

    //console.log(ev);

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action');

      
    var request = $.ajax({
        type: 'POST',
        url: url,
        dataType: 'JSON',
        data: data
    });

    request.done(function(msg){
        var mes = msg.mes,
            status = msg.status;
            //
        

        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
            
        } else{
            form.append('<p class="error">' + mes + '</p>');
            
        }   
     });

    request.fail(function(jqXHR, textStatus){
       alert("Request failed: " + textStatus);


    })
}