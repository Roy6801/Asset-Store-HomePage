const display = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("dob").value;
  var city = document.getElementById("city").value;
  var languages = [];

  var count = document.querySelectorAll(".language");

  var passReg = {
    upper: /[A-Z]/,
    lower: /[a-z]/,
    number: /[0-9]/,
    space: /\s/,
  };
  if(username === null || !username){
    alert("Enter Username!")
  }
  else if (
    !(
      passReg.upper.test(password) &&
      passReg.lower.test(password) &&
      passReg.number.test(password) &&
      !passReg.space.test(password)
    )
  ) {
    alert(
      "At least one uppercase letter, one lowercase letter and one number Required!! No spaces allowed!!"
    );
    return false;
  } else if (!email.match(/.+@.+\..+/)) {
    alert("Invalid Email Format!!");
    return false;
  } else {
    for (let i = 0; i < count.length; i++) {
      if (count[i].checked) {
        languages.push(count[i].id);
      }
    }

    var s = "";
    s += "Username: " + username;
    s += "\nPassword: " + password;
    s += "\nEmail: " + email;
    s += "\nDate of Birth: " + date;
    s += "\nCity: " + city;
    s += "\nProgramming Languages known: ";
    languages.sort();
    s += languages;
    alert(s);
  }
};
