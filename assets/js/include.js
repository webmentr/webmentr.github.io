document.addEventListener("DOMContentLoaded", function () {
/* Load header */
fetch("/includes/header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
/* Active menu highlight */
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
if(link.getAttribute("href") === "/" && currentPage === ""){
link.classList.add("active");
}
if(link.getAttribute("href").includes(currentPage)){
link.classList.add("active");
}
});
/* Dark mode init after header loads */
initDarkMode();
});
/* Load footer */
fetch("/includes/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
});

/* DARK MODE FUNCTION */
function initDarkMode(){
const toggle = document.getElementById("darkToggle");
if(!toggle) return;
const icon = toggle.querySelector("i");
if(localStorage.getItem("darkMode") === "enabled"){
document.body.classList.add("dark-mode");
icon.classList.replace("fa-moon","fa-sun");
}
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")){
localStorage.setItem("darkMode","enabled");
icon.classList.replace("fa-moon","fa-sun");
}else{
localStorage.setItem("darkMode","disabled");
icon.classList.replace("fa-sun","fa-moon");
}
});
}
