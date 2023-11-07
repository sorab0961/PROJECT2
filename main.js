function Register(){
    let name=document.getElementById("Name").value;
    let email=document.getElementById("Email").value;
    let date=document.getElementById("date").value;
    // let male = document.querySelector('input[id="Male"]:checked').checked;
    // let female = document.querySelector('input[id="Female"]:checked').checked;
    let password=document.getElementById("password").value;
    let cpassword = document.getElementById("confirm_password").value;
    let city = document.querySelector("#CITY").value;
    let checkbox = document.getElementById("check_box").value;
    


    if (document.getElementById('Male').checked) {
        console.log("Selected value: Male");
       
    } else if (document.getElementById('Female').checked) {
        console.log("Selected value: Female");
    } else {
        console.log("No option selected");
    }
    
    


    if(name == "")
    {
        console.log("name should not be empty please enter a name")
    }
    if( email == "")
    {
        console.log("email should not be empty please enter a email")
    }
    if( date == "")
    {
        console.log("date should not be empty select date")
    }
    if( password == "")
    {
        console.log("password should not be empty please enter a password")
    }
    if( cpassword == "")
    {
        console.log("confirm password should not be empty please enter a samepassword")
    }
    if( city == "none")
    {
        console.log("select acity")
    }
    
    if( checkbox.checked !== true)
    {
        console.log("name should not be empty please enter a name")
    }
    else{
        console.log("registration successfull")
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(cpassword);
        console.log(date);
        console.log(city);
    }


}   
function sign_in(){
    let email = document.getElementById("user_name").value;
    let password = document.getElementById("Password").value;

    if(email == ""){
        console.log("pls enter email")
    }
    if(password == "")
    {
        console.log("pls enter pass")
    }
    else{
        console.log(email)
        console.log(password)
        console.log("log in sexxesfully")
    }
}