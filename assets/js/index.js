    var nama = prompt('Before We Get Started, May I Know Your Name?');
    document.getElementById("nma").innerHTML = nama;
    console.log(nama);

    function validate() {
      var name = document.forms['message']['name'].value;
      var email = document.forms['message']['email'].value;
      var phone = document.forms['message']['phone'].value;
      var message = document.forms['message']['message'].value;

      if (nama == "" || email == "" || message == "") {
        alert("Oops, you forget some field there, Buddy!");
        return false;
      }
      document.getElementById('nm').innerText = name;
      document.getElementById('em').innerText = email;
      document.getElementById('ph').innerText = phone;
      document.getElementById('msg').innerText = message;
      return false;

    }