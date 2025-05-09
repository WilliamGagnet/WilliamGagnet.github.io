function education() {
    fetch('../data/education.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("main");

            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("main-section");

                const image = document.createElement("img");
                image.src = item.image;
                card.appendChild(image);

                const cardDetails = document.createElement("div");
                cardDetails.classList.add("card-details");

                // Name
                const nameItem = document.createElement("h1");
                nameItem.textContent = item.name;
                cardDetails.appendChild(nameItem);

                // Create a <ul> for the description and links
                const detailsList = document.createElement("ul");

                // Degree
                const degreeItem = document.createElement("li");
                degreeItem.textContent = item.degree;
                detailsList.appendChild(degreeItem);

                // Time Frame
                const timeframeItem = document.createElement("li");
                timeframeItem.textContent = item.timeframe;
                detailsList.appendChild(timeframeItem);

                // Description
                const descriptionItem = document.createElement("li");
                descriptionItem.textContent = item.description;
                detailsList.appendChild(descriptionItem);

                // Loop through each link object in the 'links' array
                item.links.forEach(link => {
                    const listItem = document.createElement("li");

                    // Create a <a> element for each link
                    const linkElement = document.createElement("a");
                    linkElement.href = link.url; // Set the URL from the JSON
                    linkElement.target = link.target;
                    linkElement.innerHTML = link.text; // Set the link text from the JSON

                    // Append the link to the list item
                    listItem.appendChild(linkElement);

                    // Append the list item to the <ul>
                    detailsList.appendChild(listItem);
                });

                // Append the <ul> to cardDetails
                cardDetails.appendChild(detailsList);

                card.appendChild(cardDetails);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function rhodesClasses() {
    fetch('../data/rhodes-classes.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("main");

            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("main-section");

                const cardDetails = document.createElement("div");
                cardDetails.classList.add("card-details");
                cardDetails.style.width = `100%`;

                // Class Name
                const nameItem = document.createElement("h1");

                // Tag <span>
                const tagSpan = document.createElement("span");
                tagSpan.classList.add("tag");
                tagSpan.textContent = item.tag;
                tagColorChange(tagSpan)
                
                nameItem.appendChild(tagSpan);
                nameItem.appendChild(document.createTextNode(" " + item.name));
                cardDetails.appendChild(nameItem);

                // Create a <ul> for the description and links
                const detailsList = document.createElement("ul");

                // Semester
                const semesterItem = document.createElement("li");
                semesterItem.innerHTML = "Semester: " + item.semester;
                detailsList.appendChild(semesterItem);

                // Description
                const descriptionItem = document.createElement("li");
                descriptionItem.textContent = item.description;
                detailsList.appendChild(descriptionItem);

                // Append the <ul> to cardDetails
                cardDetails.appendChild(detailsList);

                card.appendChild(cardDetails);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function tagColorChange(tagElement) {
    // Define color mappings for categories
    const categoryColors = {
        "Systems": "#ff5733", // Red-Orange
        "Theory/Math": "#3498db", // Blue
        "Graphics": "#2ecc71", // Green
        "Basics": "#f1c40f", // Yellow
        "Misc": "#9b59b6" // Purple
    };

    // Apply styles to each tag based on its category
    const category = tagElement.textContent.trim();

    if (categoryColors[category]) {
        tagElement.style.borderColor = categoryColors[category];
        tagElement.style.color = categoryColors[category];
    }
}

function skillsAndProjects() {
    fetch('../data/skills-and-projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("main");

            data.forEach(project => {
                const card = document.createElement("div");
                card.classList.add("main-section");

                const image = document.createElement("img");
                image.src = project.image;
                card.appendChild(image);

                const projectDetails = document.createElement("div");
                projectDetails.classList.add("card-details");

                // Title
                const title = document.createElement("h1");
                title.textContent = project.title;
                projectDetails.appendChild(title);

                // Create a <ul> for the description, technologies, and link
                const detailsList = document.createElement("ul");

                // Description
                const descriptionItem = document.createElement("li");
                descriptionItem.textContent = project.description;
                detailsList.appendChild(descriptionItem);

                // Technologies
                const technologiesItem = document.createElement("li");
                technologiesItem.textContent = "Technologies: " + project.technologies.join(", ");
                detailsList.appendChild(technologiesItem);

                // Link
                if (project.link) {
                    const linkItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.href = project.link;
                    link.target = "_blank";
                    link.innerHTML = '<i class="fa-brands fa-github"></i> View Project';
                    linkItem.appendChild(link);
                    detailsList.appendChild(linkItem);
                }

                // Append the <ul> to projectDetails
                projectDetails.appendChild(detailsList);

                card.appendChild(projectDetails);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

if (window.location.pathname.includes('about-me.html')) {
    pass
}
else if (window.location.pathname.includes('education.html')) {
    education()
}
else if (window.location.pathname.includes('resume.html')) {
    pass
}
else if (window.location.pathname.includes('rhodes-classes.html')) {
    rhodesClasses()
}
else if (window.location.pathname.includes('skills-and-projects.html')) {
    skillsAndProjects()
}