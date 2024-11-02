const navBar = document.getElementById('nav-bar');
const sideBar = document.getElementById('side-bar');
const sideBarLinks = document.querySelectorAll("#side-bar .side-bar-links a");


//open sidebar when clicked on navBar 
navBar.addEventListener('click', () => {
    sideBar.classList.toggle("active");
});

//close sidebar when any link is clicked
sideBarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove("active");
    });
});