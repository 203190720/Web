function  validateform(){  
var name1=document.myform.name1.value; 
var name2=document.myform.name2.value;
var name3=document.myform.name3.value;
var Phone=document.myform.Phone.value;  
 
if (name1==null || name1==""){  
  alert(" First Name can't be blank");  
  return false;
}if (name2==null || name2==""){  
  alert(" Last Name can't be blank");  
  return false; 
}if (name3==null || name3==""){  
  alert(" E-mail can't be blank");  
  return false; 
}else if(Phone.length<6){  
  alert("Phone must be at least 6 characters long.");  
  return false;  
  }  
}  