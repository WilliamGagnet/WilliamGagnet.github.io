fetch('../data/education.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the whole JSON to check its structure

        /*
        for (const item of data) {
            console.log(item); // This will now work
        }
        */
       
        for (let i = 0; i < data.length; i++) {
            const mainSection = document.createElement("div");
            mainSection.classList.add("main-section");
            
            Object.values(data[i]).forEach(value => {
                const newP = document.createElement("p"); // Create a new <p> element
                newP.textContent = value; // Set text
                mainSection.appendChild(newP); // Append to div
            });

            document.getElementById("main").appendChild(mainSection); // Append to div
        }
        
    })
    .catch(error => console.error('Error loading JSON:', error));