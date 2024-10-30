function generateOTP(Otp) {
  var Otp = "";
  var digits = "1234567890";

  var len = digits.length;

  for (i = 0; i < 6; i++) {
    Otp += Math.floor(Math.random() * len);
  }
  

  return "Yours OneTimePassword: "+Otp;
}

generateOTP();
var OTP = generateOTP();
var display = document.getElementById("display");
var button = document.getElementById("btn");

button.addEventListener("click", function () {
   display.innerHTML=generateOTP()
   display.style.filter="blur(0px)"
});
