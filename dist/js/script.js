// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Hamburger Click
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// send to wa
$(document).on('click','#send', function(){
  /* Inputan Formulir */
  var input_name          = $("#name").val(),
      input_email         = $("#email").val(),
      input_description   = $("#description").val();

  /* Pengaturan Whatsapp */
  var walink      = 'https://api.whatsapp.com/send',
      phone       = '6281269276427',
      text        = 'Halo Andika👋'

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var walink = 'whatsapp://send';
  }

  if(input_name != ""){
      /* Whatsapp URL */
      var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
          '*Nama* : ' + input_name + '%0A' +
          '*Alamat Email* : ' + input_email + '%0A' +
          '*Pesan* : ' + input_description + '%0A';

      /* Whatsapp Window Open */
      window.open(checkout_whatsapp,'_blank');
    }
  });

// switch sesuai toggle mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}


