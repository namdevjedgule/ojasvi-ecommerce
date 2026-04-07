document.addEventListener("DOMContentLoaded", () => {

    fetch("navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            const navbar = document.querySelector(".navbar");

            if (navbar) {
                let lastScroll = 0;

                window.addEventListener("scroll", () => {
                    let currentScroll = window.pageYOffset;

                    if (currentScroll > lastScroll) {
                        navbar.classList.add("hide");
                    } else {
                        navbar.classList.remove("hide");
                    }

                    lastScroll = currentScroll;
                });
            }
        });

    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    const buttons = document.querySelectorAll(".filter-buttons button");
    const products = document.querySelectorAll(".product-card");

    function updateCounts() {
        buttons.forEach(button => {
            const filter = button.dataset.filter;
            let count = 0;

            products.forEach(product => {
                const category = product.dataset.category;

                if (filter === "all" || category === filter) {
                    count++;
                }
            });

            const span = button.querySelector("span");
            if (span) span.textContent = count; 
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            products.forEach(product => {
                const category = product.dataset.category;

                if (filter === "all" || category === filter) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    updateCounts();

});