const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    document.getElementById("popmenu").style.width = "300px";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");

    menuOpen = false;
    document.getElementById("popmenu").style.width = "0px";
  }
});
