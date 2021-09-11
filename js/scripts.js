$(document).ready(function(){
  $(".design").click(function(){
    $(".design").slideUp("slow");
    $("#hide1").slideToggle("slow");
  });
  $("#hide1").click(function(){
    $("#hide1").fadeOut("slow");
    $(".design").fadeIn("slow");
    });
  
    $(".development").click(function(){
      $(".development").slideUp("slow");
      $("#hide2").slideToggle("slow");
    });
    $("#hide2").click(function(){
      $("#hide2").fadeOut("slow");
      $(".development").fadeIn("slow");
      });

      $(".management").click(function(){
        $(".management").slideUp("slow");
        $("#hide3").slideToggle("slow");
      });
      $("#hide3").click(function(){
        $("#hide3").fadeOut("slow");
        $(".management").fadeIn("slow");
        });
});

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
