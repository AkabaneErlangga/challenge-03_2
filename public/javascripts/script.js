const sidebarButton = document.querySelector("#sidebar-btn")
const sidebar = document.querySelector(".sidebar")
const content = document.querySelector("#content")
const navbar = document.querySelector(".navbar")

sidebarButton.onclick = () => {
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
    navbar.classList.toggle("active");
}
