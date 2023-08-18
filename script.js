$(function () {
  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }

  $(".btn").on("mousedown", function (e) {
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $(".btn").on(
    "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
    ".btn-ripple",
    function () {
      $(this).remove();
    }
  );
});


// for register popup
$(document).ready(function() {
  $(".register-form").submit(function(event) {
    event.preventDefault();
    
    // Show the popup
    $("#popup").css("display", "flex");
    
    // Hide the popup after a certain time
    setTimeout(function() {
      $("#popup").fadeOut();
    }, 3000); // 3000 milliseconds (3 seconds)
  });
});



$(document).ready(function() {
  $(".register-form").submit(function(event) {
    event.preventDefault();
    
    var passwordInput = $("#floatingPassword").val();
    
    if (passwordInput.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    
    // Show the popup
    $("#popup").css("display", "flex");
    
    // Hide the popup after a certain time
    setTimeout(function() {
      $("#popup").fadeOut();
    }, 3000); // 3000 milliseconds (3 seconds)
  });
});


// for login succes page
$(document).ready(function () {
  $(".item").click(function () {
    if (!$(this).hasClass("active")) {
      $(".item.active").removeClass("active").animate({ maxHeight: "0" }, 500);
      $(this).addClass("active").animate({ maxHeight: "1000px" }, 500);
    }
  });
});



$(document).ready(function () {
  $(".login_succes.html").click(function (e) {
    e.preventDefault(); 
  
    window.location.href = "login_success.html";
  });
});