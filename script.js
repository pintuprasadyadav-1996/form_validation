//start firstname validation
function fname(){
    let input = document.getElementById("finput").value;
    let val = document.getElementById("finput");
    let check = document.getElementById("tick");
    let warn = document.getElementById("warn");
    input == "" ? val.setAttribute("value","Required field") : check.style.display="inline";
    input == "" ? val.style.border="1px solid red" : check.style.display="inline";
    input == "" ? val.style.color="red" : check.style.display="inline";
    
}
function fname_close(){
    let input = document.getElementById("finput").value;
    let val = document.getElementById("finput");
    let check = document.getElementById("tick");
    let warn = document.getElementById("warn");
    input == "Required field" ? val.setAttribute("value","") : check.style.display="inline";
    input == "Required field" ? val.style.border="1px solid #ccc" : check.style.display="inline";
    input == "Required field" ? val.style.color="black" : check.style.display="inline";
}
//end firstname validation

//start lastname validation
function lname(){
    let input = document.getElementById("lastname").value;
    let val = document.getElementById("lastname");
    let check = document.getElementById("ltick");
    let warn = document.getElementById("warn1");
    input == "" ? val.setAttribute("value","Required field") : check.style.display="inline";
    input == "" ? val.style.border="1px solid red" : check.style.display="inline";
    input == "" ? val.style.color="red" : check.style.display="inline";
    
}
function lname_close(){
    let input = document.getElementById("lastname").value;
    let val = document.getElementById("lastname");
    let check = document.getElementById("ltick");
    
    input == "Required field" ? val.setAttribute("value","") : check.style.display="inline";
    input == "Required field" ? val.style.border="1px solid #ccc" : check.style.display="inline";
    input == "Required field" ? val.style.color="black" : check.style.display="inline";
}
//end lastname validation

//start mobile validation
function mobile_val(){
    let mobile = document.getElementById("mobile").value;
    let input = document.getElementById("mobile");
    let check = document.getElementById("mtick");
    // let check_digit =mobile == "" ? input.setAttribute("value","Required Field"):mobile;
    // let check_digit_len = check_digit.length == 10 ? check_digit : input.setAttribute("value","enter only 10 digit mobile number");
    //  check_digit_len.charAt(0) ==9 || check_digit_len.charAt(0) ==8 || check_digit_len.charAt(0) ==7 ||
    //  check_digit_len.charAt(0) ==6 ? check.style.display="inline": input.setAttribute("value","Enter only IND no");
    mobile =="" ? input.setAttribute("value","Required field") : check.style.display="inline";
    mobile ==  "" ? input.style.color="red" : check.style.display="inline";
     mobile == "" ? input.style.border="1px solid red " : check.style.display="inline";
}
function mobile_val_close(){
    let mobile = document.getElementById("mobile").value;
    let input = document.getElementById("mobile");
    let check = document.getElementById("mtick");
    // let check_digit =mobile == "" ? input.setAttribute("value","Required Field"):mobile;
    // let check_digit_len = check_digit.length == 10 ? check_digit : input.setAttribute("value","enter only 10 digit mobile number");
    //  check_digit_len.charAt(0) ==9 || check_digit_len.charAt(0) ==8 || check_digit_len.charAt(0) ==7 ||
    //  check_digit_len.charAt(0) ==6 ? check.style.display="inline": input.setAttribute("value","Enter only IND no");
    mobile =="Required field" ? input.setAttribute("value","") : check.style.display="inline";
    mobile ==  "Required field" ? input.style.color="black" : check.style.display="inline";
     mobile == "Required field" ? input.style.border="1px solid #ccc " : check.style.display="inline";
}
//end mobile validation

//start address validation
function address_val(){
    let input = document.getElementById("address").value;
    let val = document.getElementById("address");
    let check = document.getElementById("addtick");
    input == "" ? val.setAttribute("value","Required field") : check.style.display="inline";
    input == "" ? val.style.border="1px solid red" : check.style.display="inline";
    input == "" ? val.style.color="red" : check.style.display="inline";
    
}
function address_close(){
    let input = document.getElementById("address").value;
    let val = document.getElementById("address");
    let check = document.getElementById("addtick");
    
    input == "Required field" ? val.setAttribute("value","") : check.style.display="inline";
    input == "Required field" ? val.style.border="1px solid #ccc" : check.style.display="inline";
    input == "Required field" ? val.style.color="black" : check.style.display="inline";
}
//end address validation


// start password validation

function password(){
    var pass = document.getElementById("pass").value;
    var input = document.getElementById("pass");
    var check = document.getElementById("ptick");
    pass == "" ? input.setAttribute("value","Required Field") : check.style.disabled="inline";
    pass == "" ? input.setAttribute("type","text") : check.style.disabled="inline";
    pass == "" ? input.style.border="1px solid red" : check.style.disabled="inline";
    pass == "" ? input.style.color="red": check.style.disabled="inline";

}
function password_close(){
    var pass = document.getElementById("pass").value;
    var input = document.getElementById("pass");
    var check = document.getElementById("ptick");
    pass == "Required Field" ? input.setAttribute("value","") : check.style.disabled="inline";
    pass == "Required Field" ? input.style.border="1px solid #ccc" : check.style.disabled="inline";
    pass == "Required Field" ? input.style.color="black": check.style.disabled="inline";

}
//end password validation

// start confirm password validation
function con_pass(){
    var pass = document.getElementById("pass").value;
    var pass1 = document.getElementById("repass").value;
    var input = document.getElementById("repass");
    var check = document.getElementById("contick");
    pass !== pass1 ? input.setAttribute("value","Password must be same"):check.style.disabled="inline";
    pass !== pass1 ? input.setAttribute("type","text"):check.style.disabled="inline";
    pass !== pass1 ? input.style.border="1px solid red":check.style.disabled="inline";
    pass !== pass1 ? input.style.color="red":check.style.disabled="inline";

}
// end confirm password validation

//start email validation
function email_val(){
    var pass = document.getElementById("email").value;
    var input = document.getElementById("email");
    var check = document.getElementById("etick");
    pass == "" ? input.setAttribute("value","Required Field") : check.style.disabled="inline";
    pass == "" ? input.setAttribute("type","text") : check.style.disabled="inline";
    pass == "" ? input.style.border="1px solid red" : check.style.disabled="inline";
    pass == "" ? input.style.color="red": check.style.disabled="inline";

}
function email_val_close(){
    var pass = document.getElementById("email").value;
    var input = document.getElementById("email");
    var check = document.getElementById("etick");
    pass == "Required Field" ? input.setAttribute("value","") : check.style.disabled="inline";
    pass == "Required Field" ? input.style.border="1px solid #ccc" : check.style.disabled="inline";
    pass == "Required Field" ? input.style.color="black": check.style.disabled="inline";

}
//end email validation


// start submit validation
function demo(){
var fname = document.getElementById("finput").value;
var lname= document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var mob = number(document.getElementById("mobile")).value;
var male = document.getElementById("male").value;
var female = document.getElementById("female").value;
var address = document.getElementById("address").value;
var pass = document.getElementById("pass").value;
var repass = document.getElementById("repass").value;
var tag = document.getElementById("tag").value;
var btn = document.getElementById("btn");
//fname,lname,email,mob,male,address,pass,repass,tag == "" ? 
//btn.disabled = true: btn.disabled=false;
//fname,lname,email,mob,male,address,pass,repass,tag == "" ? 
//btn.disabled = true: btn.cursor="pointer";
//fname,lname,email,mob,male,address,pass,repass,tag == "" ? 
//btn.disabled = true: btn.style.backgroundColor="blue";

    console.log("fname"+" "+"lname"+""+"email"+" "+mob+" "+
    "address");
    return false;
}


// end submit validation
