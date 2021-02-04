const themeColor = {
  primaryColor: "#cb997e",
  complimentColor: "#a5a58",
  navColor: "#eddcd2",
  backColor: "white",
  fontColor: "black",
  bgImage: "./image/bg-night.jpg",
  descbox: "#f5deb3",
};

function changeTheme() {
  if (
    document
      .querySelector("button")
      .innerHTML.includes('<i class="fas fa-moon"></i>')
  ) {
    themeColor.primaryColor = "#05050D";
    themeColor.complimentColor = "#8338ec";
    themeColor.navColor = "#272733";
    themeColor.backColor = "#323242";
    themeColor.fontColor = "white";
    document.querySelector("button").innerHTML = '<i class="fas fa-sun"></i>';
    themeColor.bgImage = "./assets/image/bg-night.jpg";
    themeColor.descbox = "#2be3a4";
  } else {
    themeColor.primaryColor = "#8338ec";
    themeColor.complimentColor = "#ff00d4";
    themeColor.navColor = "#5714b6";
    themeColor.backColor = "white";
    themeColor.fontColor = "black";
    document.querySelector("button").innerHTML = '<i class="fas fa-moon"></i>';
    themeColor.bgImage = "./assets/image/bg.jpg";
    themeColor.descbox = "#f5deb3";
  }
  document.querySelector("footer").style.backgroundColor =
    themeColor.primaryColor;
  document.querySelector("nav").style.backgroundColor = themeColor.navColor;
  document.querySelector("body").style.backgroundColor = themeColor.backColor;
  document.querySelector("body").style.color = themeColor.fontColor;
  document.querySelector("button").style.color = themeColor.complimentColor;
  document.querySelector("button").style.backgroundColor = themeColor.backColor;

  var x, i;

  x = document.getElementsByClassName("descbox");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = themeColor.descbox;
  }
  x = document.getElementsByClassName("card2");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundImage = "url(" + themeColor.bgImage + ")";
  }
  x = document.getElementsByClassName("back");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = themeColor.backColor;
  }

  x = document.getElementsByClassName("big");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = themeColor.complimentColor;
  }
  x = document.querySelectorAll("h3");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = themeColor.complimentColor;
  }
  x = document.querySelectorAll("a");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = themeColor.complimentColor;
  }
}

// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

btn[0].onclick = function () {
  modal[0].style.display = "block";
};
span[0].onclick = function () {
  modal[0].style.display = "none";
};
btn[1].onclick = function () {
  modal[1].style.display = "block";
};
span[1].onclick = function () {
  modal[1].style.display = "none";
};

btn[2].onclick = function () {
  modal[2].style.display = "block";
};
span[2].onclick = function () {
  modal[2].style.display = "none";
};
btn[3].onclick = function () {
  modal[3].style.display = "block";
};
span[3].onclick = function () {
  modal[3].style.display = "none";
};
btn[4].onclick = function () {
  modal[4].style.display = "block";
};
span[4].onclick = function () {
  modal[4].style.display = "none";
};
btn[5].onclick = function () {
  modal[5].style.display = "block";
};
span[5].onclick = function () {
  modal[5].style.display = "none";
};

btn[6].onclick = function () {
  modal[6].style.display = "block";
};
span[6].onclick = function () {
  modal[6].style.display = "none";
};
btn[7].onclick = function () {
  modal[7].style.display = "block";
};
span[7].onclick = function () {
  modal[7].style.display = "none";
};
btn[8].onclick = function () {
  modal[8].style.display = "block";
};
span[8].onclick = function () {
  modal[8].style.display = "none";
};

btn[9].onclick = function () {
  modal[9].style.display = "block";
};
span[9].onclick = function () {
  modal[9].style.display = "none";
};

btn[10].onclick = function () {
  modal[10].style.display = "block";
};
span[10].onclick = function () {
  modal[10].style.display = "none";
};

btn[11].onclick = function () {
  modal[11].style.display = "block";
};
span[11].onclick = function () {
  modal[11].style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showMenu() {
  var x = document.getElementsByTagName("nav");
  console.log(x);
  if (x[0].className === "none") {
    x[0].className += " responsive";
  } else {
    x[0].className = "none";
  }
}
