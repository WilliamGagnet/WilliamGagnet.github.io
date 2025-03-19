function skillsAndProjects() {
fetch('../data/skills-and-projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("main");

        data.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("main-section");

            const title = document.createElement("h1");
            title.textContent = project.title;
            card.appendChild(title);

            const description = document.createElement("p");
            description.textContent = project.description;
            card.appendChild(description);

            const technologies = document.createElement("p");
            technologies.textContent = project.technologies.join(", ");
            card.appendChild(technologies);

            if (project.link) {
                const link = document.createElement("a");
                link.href = project.link;
                link.target = "_blank";
                link.textContent = "View Project";
                card.appendChild(link);
            }

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