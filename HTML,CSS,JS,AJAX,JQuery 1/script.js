

// isveda dabartine oru prognoze Vilniuje

            
    
	        $(document).ready(function () {
			
			$('#ajaxBtn').show(function(){
			
				$.get('http://api.openweathermap.org/data/2.5/weather?q=Vilnius,uk&APPID=e14f135ff04a40d618f3ce5fb6ddc3fb', function (data, textStatus, jqXHR) {
						console.log(data); //išvedame visą serverio atsakymą objektą, kad matytume, kokias savybes turi
						
						$("#result").html(data.main.temp-273.15+"&degC");
            $("#resultCity").html(data.name);
						// arba taip:
						// temp=data.main.temp-273.15;
						// $("#result").html(temp);
					});
			});
    	});
   

   //paslepti forma

   $(document).ready(function(){
    $('#formHide').click(function(){
        $("form").hide();
    });
});


    //paslepti forma

   $(document).ready(function(){
    $('#formShow').click(function(){
        $("form").show();
    });
});


 

//    $(function() {

//   // Initialize form validation on the registration form.
//   // It has the name attribute "registration"
//   $("form").validate({
//     // Specify validation rules
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//       // on the right side
//       firstname: "required",
//       lastname: "required",
//       email: {
//         required: true,
//         // Specify that email should be validated
//         // by the built-in "email" rule
//         email: true
//       },
//       password: {
//         required: true,
//         minlength: 5
//       }
//     },
//     // Specify validation error messages
//     messages: {
//       firstname: "Please enter your firstname",
//       lastname: "Please enter your lastname",
//       password: {
//         required: "Please provide a password",
//         minlength: "Your password must be at least 5 characters long"
//       },
//       email: "Please enter a valid email address"
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
// });

 $(function(){
      $ ('#form2').validate({
rules:{
info: "required",
name: {required: true},
email:{
  required:true,
  email: true
}
},
messages:{
  name: "Please enter your name",
  info: "30 characters long only.",
  email: "Enter a valid email adres. "
},


submitHandler:function(form){
  form.submit();
}
      });
   });





// (5-12 val.); good afernoon , John(12-17
// val.); good evening, John(17-24 val.)

   //pasisveikinimas
  var person =prompt("Koks Jūsų vardas");
  if (person != null) {
    document.getElementById("hello").innerHTML =
    "Hello, " + person;
  }

     // isveda dabartine data

var d = new Date();
var h=d.getHours()+1;
   

    if (h>=5 && h<12){document.getElementById("val").innerHTML =", good morning"
  }else{ if (h>=12 && h<17){document.getElementById("val").innerHTML =", good afternoon"
}else{if (h>=17 && h<24){document.getElementById("val").innerHTML =", good evening"
}else {document.getElementById("val").innerHTML =", good evening" }}}

    