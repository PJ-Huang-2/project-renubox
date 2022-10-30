
function openNav() {
  let sideBar = document.querySelector('#sideBar');
  sideBar.classList.remove("side-Bar");
  sideBar.classList.add("sidebar-open");
}
function closeSideBar() {
  let sideBar = document.querySelector('#sideBar');
  sideBar.classList.remove("sidebar-open");
  sideBar.classList.add("side-Bar");
}