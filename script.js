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
document.addEventListener("contextmenu", e => e.preventDefault()); 
document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        alert("Element is disabled");
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
        alert("Element is disabled");
        e.preventDefault();
    }

    if (e.key === "F12") {
        alert("Source code is disabled");
        e.preventDefault();
    }
});

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