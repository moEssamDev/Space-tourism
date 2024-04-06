let menu_list_icon = document.getElementById("toggle");
let menu_list = document.querySelector("header nav ul");

if (menu_list_icon) {
  menu_list_icon.onclick = function () {
    menu_list.classList.toggle("openandclose");

    if (menu_list.classList.contains("openandclose")) {
      menu_list_icon.src = "../../assets/shared/icon-close.svg";
    } else {
      menu_list_icon.src = "../../assets/shared/icon-hamburger.svg";
    }
  };
}

if (document.getElementById("hamburger")) {
  document.getElementById("hamburger").onclick = function () {
    document.getElementById("hamburger").classList.toggle("open");

    if (document.getElementById("hamburger").classList.contains("open")) {
      document.getElementById("hamburger").src = "assets/shared/icon-close.svg";
      document.querySelector("header nav ul").style.right = 0;
    } else {
      document.getElementById("hamburger").src =
        "assets/shared/icon-hamburger.svg";
      document.querySelector("header nav ul").style.right = -350 + "px";
    }
  };
}
console.log(document.getElementById("hamburger"));

// pages's transport transition
document.querySelectorAll(".transition-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.querySelector(".page-transition-overlay").style.opacity = 1;
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

