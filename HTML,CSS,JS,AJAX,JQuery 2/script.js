// isveda dabartine data

var d = new Date();
var days = ["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"];



if ((d.getMonth()+1)<10 & d.getDate()<10) 
    {document.getElementById("data").innerHTML = 
      d.getFullYear()+"-0"+(d.getMonth()+1)+"-0"+d.getDate()+", "+days[d.getDay()]

      }else{if ((d.getMonth()+1)<10) {document.getElementById("data").innerHTML = 
        d.getFullYear()+"-0"+(d.getMonth()+1)+"-"+d.getDate()+", "+days[d.getDay()]

          }else { if (d.getDate()<10) {document.getElementById("data").innerHTML =
           d.getFullYear()+"-"+(d.getMonth()+1)+"-0"+d.getDate()+", "+days[d.getDay()]

            } else {document.getElementById("data").innerHTML = 
            d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+", "+days[d.getDay()]};
            }
            }


// isveda dabartine oru prognoze Vilniuje

            
    
	        $(document).ready(function () {
			
			$('#ajaxBtn').show(function(){
			
				$.get('http://api.openweathermap.org/data/2.5/weather?q=Vilnius,uk&APPID=e14f135ff04a40d618f3ce5fb6ddc3fb', function (data, textStatus, jqXHR) {
						console.log(data); //išvedame visą serverio atsakymą objektą, kad matytume, kokias savybes turi
						
						$("#result").html(data.main.temp-273.15+"&degC");
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
firstname: "required",
lastname: {required: true},
email:{
  required:true,
  minlength:3,
  email: true
}
},
messages:{
  firstname: "Please enter your name",
  lastname: "You must learn code",
  email: "Enter a valid email adres. At least 3 characters long"
},


submitHandler:function(form){
  form.submit();
}
      });
   });