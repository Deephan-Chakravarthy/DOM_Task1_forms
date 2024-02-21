
    
function create_label(attrvalue,content){
  var label= document.createElement("label");
  label.setAttribute("for",attrvalue);
  label.innerHTML=content;
  return label;
 }

 function break_1(){
    var br = document.createElement("br");
    return br;
 }

 function create_input(tagname,attr1name,attr1value,attr2name,attr2value){
    var input = document.createElement(tagname);
    input.setAttribute(attr1name,attr1value);
    input.setAttribute(attr2name,attr2value);
    return input;
 }

 function button(tagname,attrname,attrvalue,attr1name,attr1value,content){
    var button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    button.setAttribute(attr1name,attr1value);
    button.innerHTML=content;
    return button;
 }

 var fn = create_label("firstname","FirstName :");
 var fn_break = break_1();
 var input_fn = create_input("input","type","text","id","firstname");
 var fn_break1 = break_1();

 var mn = create_label("middlename","MiddleName :");
 var mn_break = break_1();
 var input_mn = create_input("input","type","text","id","middlename");
 var mn_break1 = break_1();

 var ln = create_label("lastname","LastName :");
 var ln_break = break_1();
 var input_ln = create_input("input","type","text","id","lastname");
var ln_break1 = break_1();

 var email = create_label("email","Email :");
 var email_break = break_1();
 var input_email = create_input("input","type","text","id","email");
 var email_break1 = break_1();

 var pass = create_label("pass","Password :");
 var pass_break = break_1();
 var input_pass= create_input("input","type","text","id","pass");
var pass_break1 = break_1();

 var but = button("input","type","submit","onclick","foo()");
 
document.body.append(fn,fn_break,input_fn,fn_break1,mn,mn_break,input_mn,mn_break1,ln,ln_break,input_ln,ln_break1,email,email_break,input_email,email_break1,pass,pass_break,input_pass,pass_break1,but);

function foo(){
    var fn = document.getElementById("firstname").value;
    console.log(`First Name:${fn}`);
    
    var mn = document.getElementById("middlename").value;
    console.log(`Middle Name:${mn}`);
    
    var ln = document.getElementById("lastname").value;
    console.log(`Last Name:${ln}`);
    
    var emai = document.getElementById("email").value;
    console.log(`E-mail:${emai}`);

    var pass = document.getElementById("pass").value;
    console.log(`Password:${pass}`);
    
    }