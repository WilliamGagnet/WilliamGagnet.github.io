const button = document.getElementById("theme-toggle-button")
let videoElement = document.getElementById("backgroundVideo");
let sourceElement = document.getElementById("videoSource");

button.addEventListener("click", function() {
    // dark mode -> light mode
    if (button.innerHTML.includes("Dark")) {
        // changes button text
        button.innerHTML = '<i class="fa-solid fa-sun"></i> Light';

        // video background
        sourceElement.src = "assets/videos/coverr-cloudy-sky-2765-1080p.mp4"

        // overlay
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";

        // main
        document.getElementById("main").style.color = "black";
    }

    // light mode -> auto mode
    else if (button.innerHTML.includes("Light")) {
        // changes button text
        button.innerHTML = '<i class="fa-solid fa-gears"></i> Auto';

        // get current time
        let currentHour = new Date().getHours(); // Get the current hour (0-23)

        // Daytime (6 AM - 6 PM)
        if (currentHour >= 6 && currentHour < 18) {
            // video background
            sourceElement.src = "assets/videos/coverr-cloudy-sky-2765-1080p.mp4";

            // overlay
            document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";

            // main
            document.getElementById("main").style.color = "black";

        // Nighttime (6 PM - 6 AM)
        } else {
            // video background
            sourceElement.src = "assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4";

            // overlay
            document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";

            // main
            document.getElementById("main").style.color = "white";
        }
    }

    // auto mode -> dark mode
    else if (button.innerHTML.includes("Auto")) {
        // changes button text
        button.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';

        // video background
        sourceElement.src = "assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4"

        // overlay
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";

        // main
        document.getElementById("main").style.color = "white";
    }

    // loads new video background
    videoElement.load();
});