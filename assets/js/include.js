
document.addEventListener("DOMContentLoaded", function () {
fetch("/includes/header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});
fetch("/includes/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
});
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
if(link.getAttribute("href") === currentPage){
link.classList.add("active");
}
});
