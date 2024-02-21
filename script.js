

document.body.append(label1,break1,firstname,break2,label2,break3,middlename,break4,label3,break5,lastname,break6,label4,break7,email,break8,button);

function foo(){
    var first = document.getElementById("firstname").value;
    console.log(`First Name: ${first}`);
    var middle = document.getElementById("middlename").value;
    console.log(`Middle Name: ${middle}`);
    var last = document.getElementById("lastname").value;
    console.log(`Last Name: ${last}`);
    var mail = document.getElementById("email").value;
    console.log(`Email: ${mail}`);
}

function label_create(tagname,attrname,attrvalue,content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function break_create(){
    var ele = document.createAttribute(br);
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attr2name,attr2value);
    return element;
}

var email = label_create("label","for","email","Email");
var email_break = break_creat();
var email_input = input_create("input","type","email","id","email")





