//form validation
function formvalidate(){
    //username validation
    let result=[];
    var userName=document.getElementById('username').value;
    if (userName.length == 0){
        document.getElementById('username').style="border: 1px solid red;";
        alert('Username is Required');
        document.getElementById('userNameError').innerHTML='Username is Required';
        document.getElementById('userNameError').style="display:inline; color:red; font-weight:bold;";  
    }else {
        document.getElementById('username').style="border: 1px solid green;";
        document.getElementById('userNameError').innerHTML='Username is Valid';
        document.getElementById('userNameError').style="display:inline; color:green; font-weight:bold;";
        result.push('pass');

    }
    //Mail id  validation
    var emailId=document.getElementById('mailid').value;
    if (emailId.length == 0){
        document.getElementById('mailid').style="border: 1px solid red;";
        alert('Email Id is Required');
        document.getElementById('mailIdError').innerHTML='Email is Required';
        document.getElementById('mailIdError').style="display:inline; color:red; font-weight:bold;";  
    }else {
        if ((emailId.includes('@'))&&(emailId.endsWith('.com'))) {
            document.getElementById('mailid').style="border: 1px solid green;";
            document.getElementById('mailIdError').innerHTML='Email is Valid';
            document.getElementById('mailIdError').style="display:inline; color:green; font-weight:bold;";
            result.push('pass');
        }
        else {
            document.getElementById('mailid').style="border: 1px solid red;";
            alert('Enter Valid Email Id');
            document.getElementById('mailIdError').innerHTML='Enter valid Email Id';
            document.getElementById('mailIdError').style="display:inline; color:red; font-weight:bold;";  
        }     

    }
    //Mobile no  validation
    var mobileNo=document.getElementById('mobile').value;
    if (mobileNo.length == 0){
        document.getElementById('mobile').style="border: 1px solid red;";
        alert('Mobile Number is Required');
        document.getElementById('mobileNoError').innerHTML='Mobile Number is Required';
        document.getElementById('mobileNoError').style="display:inline; color:red; font-weight:bold;";  
    }else {
        if (mobileNo.length == 10){
            document.getElementById('mobile').style="border: 1px solid green;";
            document.getElementById('mobileNoError').innerHTML='Mobile Number is valid';
            document.getElementById('mobileNoError').style="display:inline; color:green; font-weight:bold;";
            result.push('pass');
        }
        else {
            document.getElementById('mobile').style="border: 1px solid red;";
            alert('Enter valid Mobile No');
            document.getElementById('mobileNoError').innerHTML='Invalid Mobile Number';
            document.getElementById('mobileNoError').style="display:inline; color:red; font-weight:bold;";

        } 
    }
    //Message validation
    var message=document.getElementById('message').value;
    if (message.length == 0){
        document.getElementById('message').style="border: 1px solid red;";
        alert('Atleast One Line of Your Message is Required');
        document.getElementById('messageError').innerHTML='Message is Required';
        document.getElementById('messageError').style="display:inline; color:red; font-weight:bold;";  
    }else {
        document.getElementById('message').style="border: 1px solid green;";
        document.getElementById('messageError').innerHTML='Message is valid';
        document.getElementById('messageError').style="display:inline; color:green; font-weight:bold;";
        result.push('pass');
    }
   if (result.length==4){
    let check=result.every(myFunction);
    function myFunction(value) {
        return value=='pass';
    }
    if (check) {
        alert('Thank You for Giving the Valid Information,Successfully Completed');
        document.getElementById('finish').style="border:inline;";
    }
   }
}