
// jquery selects the submit button, then on that item listen for clicks and run the defined function //
$("#submitbtn").on("click", function() {
// variables declared (let is constant) //    
    let email = $("#email");
// below variable is a standard regular expression //    
    let emailRegex = /^[@]+$/;
// if-else loop //
// test method checks the value of the email variable against the regular expression variable //    
    if (emailRegex.test(email.val()) === true) {
// if true //
        alert('Thanks for your order!');
    } 
// if false //
    else {
      alert('Please enter a valid email address.');
    }
  });