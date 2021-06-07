
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#contact_form_submit',function(e){
            
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();
            

            if (!name) {
                 $('#name').removeClass('error');
                 $('#name').addClass('error').attr('placeholder','Nombre*');
             }else{
                 $('#name').removeClass('error');
             }
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder','Email*')
             }else{
                 $('#email').removeClass('error');
             }
             if (!mensaje) {
                 $('#mensaje').removeClass('error');
                 $('#mensaje').addClass('error').attr('placeholder','Mensaje*')
             }else{
                 $('#phone').removeClass('error');
             }
        
             
            
            if ( name && email && mensaje ) {
             	$.ajax({
	                 type: "POST",
	                 url:'contacto.php',
	                 data:{
                         'name': name,
                         'email': email,
                         'phone': mensaje,
                         
	                 },
	                 success:function(data){
                         $('#contact_form_submit').children('.email-success').remove();
                         $('#contact_form_submit').prepend('<span class="alert alert-success email-success">'+data+'</span>');
                         $('#name').val('');
                         $('#email').val('');
                         $('#mensaje').val('');
                         $('.email-success').fadeOut(3000);
	                 }
	             });
             }else{
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<span class="alert alert-danger email-success">somenthing is wrong</span>');
                $('.email-success').fadeOut(3000);
             }

            
            
        });
    })

}(jQuery));	
