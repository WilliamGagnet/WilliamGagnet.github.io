const button = document.getElementById("theme-toggle-button")
let videoElement = document.getElementById("backgroundVideo");
let sourceElement = document.getElementById("videoSource");

button.addEventListener("click", function() {
    // dark mode -> light mode
    if (button.innerHTML.includes("Dark")) {
        // changes button text
        button.innerHTML = '<i class="fa-solid fa-sun"></i> Light';

        // video background
        if (document.title.includes("Home")) {
            sourceElement.src = "assets/videos/coverr-cloudy-sky-2765-1080p.mp4"
        }
        else {
            sourceElement.src = "../assets/videos/coverr-cloudy-sky-2765-1080p.mp4"
        }

        // overlay
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";

        // main
        document.getElementById("main").style.color = "black";

        // main-section
        if (!document.title.includes("Home")) {
            document.querySelectorAll(".main-section").forEach((element) => {
                element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                element.style.border = "2px solid rgba(255, 255, 255, 0.8)";
                element.style.boxShadow = "0px 0px 15px black";
            });
        }
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
            if (document.title.includes("Home")) {
                sourceElement.src = "assets/videos/coverr-cloudy-sky-2765-1080p.mp4"
            }
            else {
                sourceElement.src = "../assets/videos/coverr-cloudy-sky-2765-1080p.mp4"
            }

            // overlay
            document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0)";

            // main
            document.getElementById("main").style.color = "black";

            // main-section
            if (!document.title.includes("Home")) {
                document.querySelectorAll(".main-section").forEach((element) => {
                    element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                    element.style.border = "2px solid rgba(255, 255, 255, 0.8)";
                    element.style.boxShadow = "0px 0px 15px black";
                });
            }

        // Nighttime (6 PM - 6 AM)
        } else {
            // video background
            if (document.title.includes("Home")) {
                sourceElement.src = "assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4"
            }
            else {
                sourceElement.src = "../assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4"
            }

            // overlay
            document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";

            // main
            document.getElementById("main").style.color = "white";

            // main-section
            if (!document.title.includes("Home")) {
                document.querySelectorAll(".main-section").forEach((element) => {
                    element.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                    element.style.border = "2px solid rgba(0, 0, 0, 0.9)";
                    element.style.boxShadow = "0px 0px 15px white";
                });
            }
        }
    }

    // auto mode -> dark mode
    else if (button.innerHTML.includes("Auto")) {
        // changes button text
        button.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';

        // video background
        if (document.title.includes("Home")) {
            sourceElement.src = "assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4"
        }
        else {
            sourceElement.src = "../assets/videos/coverr-lights-swaying-in-the-evening-breeze-5160-1080p.mp4"
        }

        // overlay
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.5)";

        // main
        document.getElementById("main").style.color = "white";

        // main-section
        if (!document.title.includes("Home")) {
            document.querySelectorAll(".main-section").forEach((element) => {
                element.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                element.style.border = "2px solid rgba(0, 0, 0, 0.9)";
                element.style.boxShadow = "0px 0px 15px white";
            });
        }
    }

    // loads new video background
    videoElement.load();
});