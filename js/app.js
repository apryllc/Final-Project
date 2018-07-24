
// jquery selects the submit button, then on that item listen for clicks and runs the defined function //
$("#submitbtn").on("click", function(submit) {
// variables declared (let is constant) //    
    let email = $("#email");
// below variable is a standard regular expression //
//escape char, ^ beginning of input, [] holds string, ^ negates everything in string, +@ in email, dollar size is closing char //
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if-else loop //
// test method checks the value of the email variable against the regular expression variable //    
    if (emailRegex.test(email.val()) === true) {
// if true //
//selects order form div, replaces it with html message confirming order //
        $(".orderform").html("<h3>Thanks for placing an order with Louisville's Best Brittle company!<br><br>Your order will be shipped in 2-3 business days to the address provided.<br><br>Happy snacking!</h3>");
// prevents page from reloading
        submit.preventDefault();
    } 
// if false //
    else {
//select email box in form, adds validation class styles from css, then inserts html message after //
    $("#email").addClass("validation").after("<br><b>Please enter a valid email address.<b>");
// prevents page from reloading //
    submit.preventDefault();
    }
  });

  