window.onload = function () {
            setTimeout(function () {
                document.getElementById("offerModal").style.display = "block";
            }, 3000);
        };

        function closeOffer() {
            document.getElementById("offerModal").style.display = "none";
        }

        window.onclick = function (event) {
            let modal = document.getElementById("offerModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.addEventListener("contextmenu", e => e.preventDefault()); // disable right click
        document.onkeydown = function (e) {
            if (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "i")) {
                return false; // disable Ctrl+U, Ctrl+S, Ctrl+Shift+I
            }
        }
       

        const scrollBtn = document.getElementById("scrollUpBtn");

        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollBtn.style.display = "block";
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.style.display = "none";
                scrollBtn.classList.remove("show");
            }
        };

        scrollBtn.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };