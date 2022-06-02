let menu = document.querySelector(".menu"),
  list = document.querySelector(".phone .list"),
  body = document.querySelector("body"),
  black = document.createElement("div"),
  back = document.querySelector(".back"),
  hide_icon = document.querySelectorAll(".main h2 .icon"),
  list_a = document.querySelectorAll(".normal ul")
menu.onclick = () => {
  list.classList.add("show");
  black.classList.add("black");
  body.append(black);
};
black.onclick = hideList;
back.onclick = hideList;
function hideList() {
  list.classList.remove("show");
  black.classList.remove("black");
}
hide_icon.forEach(function (ele) {
  ele.onclick = function () {
    if (this.parentElement.classList == "showed") {
      this.parentElement.classList = "";
    }else{
        this.parentElement.classList = "showed"
    }
  };
});
