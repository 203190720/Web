function validateform(){  
var name=document.myform.name.value;  

  
if (name==null || name==""){  
alert("identity can't be blank");  
return false;  
}  
else if (name==2){
alert("Plase look this page.");  
return false;  
}
else if (name==1){
alert("This is Course Page");  
  return true;  
}
else {
alert("Please enter the truth value");
return false; 
}
}