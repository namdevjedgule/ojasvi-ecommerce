document.addEventListener("DOMContentLoaded", () => {

    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });

    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    let lastScroll = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            // scrolling DOWN → hide navbar
            navbar.classList.add("hide");
        } else {
            // scrolling UP → show navbar
            navbar.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

});