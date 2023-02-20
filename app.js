const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlink li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Media Vormgever", "Editor", "Visual Designer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})