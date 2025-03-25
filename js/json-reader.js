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
                projectDetails.classList.add("project-details");

                // Title
                const title = document.createElement("h1");
                title.textContent = project.title;
                projectDetails.appendChild(title);

                // Create a <ul> for the description and technologies
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
    pass
}
else if (window.location.pathname.includes('resume.html')) {
    pass
}
else if (window.location.pathname.includes('rhodes-classes.html')) {
    pass
}
else if (window.location.pathname.includes('skills-and-projects.html')) {
    skillsAndProjects()
}