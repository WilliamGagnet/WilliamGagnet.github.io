const button = document.getElementById("theme-toggle-button")

button.addEventListener("click", function() {
    if (button.innerHTML.includes("Light")) {
        button.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';
    } 
    else if (button.innerHTML.includes("Dark")) {
        button.innerHTML = '<i class="fa-solid fa-gears"></i> Auto';
    }
    else if (button.innerHTML.includes("Auto")) {
        button.innerHTML = '<i class="fa-solid fa-sun"></i> Light';
    }
});