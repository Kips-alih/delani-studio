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
  $(".work1").hover(function(){
  $(".subtitle1").show("slow");
  });

  $(".work2").hover(function(){
    $(".subtitle2").show("slow");
    });

  $(".work3").hover(function(){
    $(".subtitle3").show("slow");
    });

  $(".work4").hover(function(){
    $(".subtitle4").show("slow");
    });

  $(".work5").hover(function(){
    $(".subtitle5").show("slow");
    });

  $(".work6").hover(function(){
    $(".subtitle6").show("slow");
    });

  $(".work7").hover(function(){
    $(".subtitle7").show("slow");
    });

  $(".work8").hover(function(){
    $(".subtitle8").show("slow");
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
    $("form").trigger("reset");
  });
});
