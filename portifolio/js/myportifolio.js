function navo(a) {  
  if(document.getElementById('hidden').style.display!="inline-block"){
    document.getElementById('hidden').style.display="inline-block";
    a.style.color="yellow";
    document.getElementById('homert').style.width="80%";
    if (document.getElementById('about').style.display!="none") {
      document.getElementById('about').style.width="80%"; 

    }
    else{
      document.getElementById('about').style.width="84%"; 

    }
    
  }
  else{
    document.getElementById('hidden').style.display="none";
    a.style.color="white";
    document.getElementById('homert').style.width="84%";
    if (document.getElementById('about').style.display!="none"){
        document.getElementById('about').style.width="84%"; 
      }
  }
  
}

function about(a) {
  if (document.getElementById('about').style.visibility!="hidden"){
    document.getElementById('about').style.visibility="visible";
    document.getElementById('about').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('services').style.visibility="hidden";
    document.getElementById('contact').style.visibility="hidden";
    a.style.color="red";

  }
  else{
    document.getElementById('about').style.visibility="visible";
    document.getElementById('about').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('services').style.visibility="hidden";
    document.getElementById('contact').style.visibility="hidden";

  }
  function myFunction(x) {
      if (x.matches) { // If media query matches
        a.style.color="red";
      }
      else {
        document.getElementById('about').style="margin-top:-45%;";
        a.style.color="yellow";
      }
    }
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
  
}
function servicess(a) {
   if (document.getElementById('services').style.visibility!="hidden") {
    document.getElementById('services').style.background="none";
    document.getElementById('services').style.visibility="visible";
    document.getElementById('services').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('about').style.visibility="hidden";
    document.getElementById('contact').style.visibility="hidden"
    document.getElementById('offers').style.display="inline-block";
    a.style.color="red";
    document.getElementById('double').innerHTML="";
    document.getElementById('body').style.height="10em";
  }
  else{
    document.getElementById('services').style.background="none";
    document.getElementById('services').style.visibility="visible";
    document.getElementById('services').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('about').style.visibility="hidden";
    document.getElementById('contact').style.visibility="hidden";
    document.getElementById('offers').style.display="inline-block";
    a.style.color="red";
    document.getElementById('double').innerHTML="";
  }
  
  
}
function contact(a) {
  if (document.getElementById('contact').style.visibility!="hidden"){
    document.getElementById('contact').style.visibility="visible";
    document.getElementById('contact').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('services').style.visibility="hidden";
    document.getElementById('about').style.visibility="hidden";
    a.style.color="red";

  }
  else{
    document.getElementById('contact').style.visibility="visible";
    document.getElementById('contact').style.position="absolute";
    document.getElementById('homert').style.visibility="hidden";
    document.getElementById('services').style.visibility="hidden";
    document.getElementById('about').style.visibility="hidden";
    a.style.color="red";
  }
  
}


function navo1(a) {
  if(document.getElementById('dropdownbox1').style.visibility!="visible"){
    document.getElementById('dropdownbox1').style.visibility="visible";
    a.style.color="green";
  }
  else{
    document.getElementById('dropdownbox1').style.visibility="hidden";
    a.style.color="white";
  }
}
function services(a) {
  if (document.getElementById('offers').style.display!="inline-block") {
    document.getElementById('offers').style.display="inline-block";
    a.style="background:white;color:black";
    a.style.color="red";
    document.getElementById('double').innerHTML="";
    function myFunction(x) {
        if (x.matches) { // If media query matches
        document.getElementById('services').style="height:44em;";
        document.getElementById('double').innerHTML="";


        }
        else {
        document.getElementById('services').style="height:22.5em;";
        document.getElementById('double').innerHTML="";
        }
      }
      var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  }
  else{
    document.getElementById('offers').style.display="none";
    a.style="background:black;color:white";
    document.getElementById('services').style="height:21.43em;";
    function myFunction(x) {
        if (x.matches) { // If media query matches
        document.getElementById('services').style="height:29.5em;";
        }
        else {
        document.getElementById('services').style="height:17.5em;";
        }
      }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
  }
}
function phone() {
  alert("hey!!9344015965");
}
function submitt() {
  alert("the form was successfully submited.");
  location.reload();
}
function mail() {
  alert("this is my official Mail id siva010928@gmail.com");
}


