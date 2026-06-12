let count = 0;
function processform(){
 let name=document.getElementById("nameInput").value; 
 let email=document.getElementById("emailInput").value; 
 let department=document.getElementById("departmentInput").value;

 document.getElementById("paragraph").innerText="Welcome, "+name;
 count++;
 document.getElementById("count").innerText=count + " people have registered till NOW";
}
function hideemail(){
  document.getElementById("emailInput").type="password";
  document.getElementById("emailInput").style.display="none";
}