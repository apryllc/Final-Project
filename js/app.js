var email = document.getElementById('email').value;
document.getElementById('submitbtn').addEventListener('click', checkEmail);
function checkEmail()
{
if (([/'@'/].test(email)) )
    {
        alert('Thanks for your order!')
    }
    else
    {
        alert('Please enter a valid email address.')  
        }
}