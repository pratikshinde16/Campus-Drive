
function submit_form(event) {
    event.preventDefault()
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email=document.getElementById("validationEmail").value;
    var date=document.getElementById("date").value;
    var phone=document.getElementById("phone").value;
    var address=document.getElementById("validationTextarea").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;

    
    
    // var gender=document.getElementsByClassName("form-check-inline").value
   



    const btn = document.querySelector('#btn');        
    const radioButtons = document.querySelectorAll('input[name="exampleRadios"]');

    btn.addEventListener("click", () => {
        let selectedRadios;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedRadios = radioButton.value;
                break;
            }
        }
        // show the output:
            console.log(selectedRadios)
    });
    



     
    if (!firstname && !lastname ) // Calling validation function
    {
        alert("Please Enter First Name or Last Name !!!")
    // document.getElementById("form_id").submit_form(); //form submission
    // alert(" FirstName : " + firstname + " n LastName : " + lastname + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    
    else if(!date)
    {
        alert("Please Enter Date of Birth !!!")
    }

    else if(exampleRadios1.checked==false && exampleRadios2.checked==false )
    {
         alert("You must Select Male or Female !!!");
         return false;
    }   
    
    else if(!email)
    {
        alert("Please Enter Email Id !!!")
    }

    else if(!phone)
    {
        alert("Please Enter Contact Details !!!")
    }

     
    else if(!address)
    {
        alert("Please Enter Address !!!")
    }

     
    else if(!state)
    {
        alert("Please Enter Your State !!!")
    }

    else if(!country || country==="country")
    {
        alert("Please Enter Your Valid Country !!!")
    }

    else 
     {
        alert("Form Submitted Successfully !!!")
        console.log(firstname,lastname,date,email,phone,address,state,country)
        document.getElementById("form_id").reset();
    }

   
}

    // var form_id=document.getElementById("form_id")
    // var checkboxes=form_id.querySelectorAll('input[type="checkbox"]')

    // document.getElementById('btn').addEventListener('click',getData);

    // let error = true;

    // function getData(){
    //     checkboxes.forEach(lang => {
    //         if(lang.checked){
    //             error = false;
    //         }
    //     });

    //     if(error){
    //         alert("Minimum One Language you have to Pick !!!")
    //     }
    //     else{
    //         alert("Successfully submitted..")
    //     }
    // }


   



   
















   