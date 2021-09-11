$(document).ready(function(){
  $("form#user").submit(function(event) {
    event.preventDefault();

    var userName=$("#name").val();
    var email=$("#email").val();
    var comment=$("#comment").val();
    if(userName&&email&&comment){
      alert("Hi "+userName +". We have received your message. Thank you for reaching out to us.");
    
    }
    else{
      alert("All fields required");
    }
  });
});
