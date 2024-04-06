let menu_list_icon = document.getElementById("toggle");
let menu_list = document.querySelector("header nav ul");

menu_list_icon.onclick = function () {
  menu_list.classList.toggle("openandclose");

  if (menu_list.classList.contains("openandclose")) {
    menu_list_icon.src = "../../assets/shared/icon-close.svg";
    if (menu_list.classList.contains("home")) {
      menu_list_icon.src = "assets/shared/icon-close.svg";
    }
  } else {
    menu_list_icon.src = "../../assets/shared/icon-hamburger.svg";
    if (menu_list.classList.contains("home")) {
      menu_list_icon.src = "assets/shared/icon-hamburger.svg";
    }
  }
};

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

