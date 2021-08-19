jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );
var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          //username is the name of the textbox
          username: {
              required: true,
              //alphanumeric is the custom method, we defined in the above
              alphanumeric: true
          },
          email: {
              required: true,
              customEmail: true
          },
          password: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          },
          fname: {
              required: true,
              noSpace: true
          },
          lname: {
              required: true,
              noSpace: true
          },
          gender: {
              required: true
          },
          hobbies: {
              required: true
          },
          country: {
              required: true
          },
          address: {
              required: true
          }
      },
      messages:{
          username: {
              //error message for the required field
              required: 'Por favor ingrese nombre de usuario!',
              alphanumeric: 'Solo letras y números por favor'
              
          },
          email: {
              required: 'Por favor ingrese correo!',
              //error message for the email field
              email: 'Correo inválido!'
          },
          password: {
              required: 'Por favor ingrese password!'
          },
          confirm: {
              required: 'Por favor confirme password!',
              equalTo: 'Por favor ingrese misma password'
              
          },
          fname: {
              required: 'Por favor ingrese su nombre!'
          },
          lname: {
              required: 'Por favor ingrese su apellido!'
          },
          country: {
              required: 'Por favor ingrese su país!'
          },
          address: {
              required: 'Por favor ingrese su dirección!'
          }
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.gender'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.hobbies'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
  });
}

function hizoClick() {
    var usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var confirmar = document.getElementById("confirmar").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var pais = document.getElementById("pais").value;
    var direccion = document.getElementById("direccion").value;
    if (usuario == "" || correo == "" || password == "" || confirmar == "" || 
    nombre == "" || apellido == "" || pais == "" || direccion == "") {
        alert("Debes completar todos campos"); 
    } else {
    alert("¡Registro exitoso!");
    document.location.href=pagina.html;
    }
  }
