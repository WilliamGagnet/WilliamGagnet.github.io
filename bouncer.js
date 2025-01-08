let x = 100;  // Initial horizontal position
let y = 100;  // Initial vertical position

// Generates a random speed between 1 and 4 everytime the site is loaded
let speed = Math.floor(Math.random() * 3) + 1;
console.log("Speed:", speed);

let dx = speed;  // Horizontal speed (positive for rightward movement)
let dy = speed;  // Vertical speed (positive for downward movement)

const bouncer = document.getElementById("bouncer");

function animate() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  const rect = bouncer.getBoundingClientRect();

  // Handle bouncing off the right wall
  if (x + rect.width >= viewportWidth) {
    x = viewportWidth - rect.width; // Stop at the right edge
    dx = -Math.abs(dx); // Reverse direction, ensure it moves left
    bouncer.style.textShadow = `0px 0px 15px red`;
  }
  
  // Handle bouncing off the left wall
  if (x <= 0) {
    x = 0; // Stop at the left edge
    dx = Math.abs(dx); // Reverse direction, ensure it moves right
    bouncer.style.textShadow = `0px 0px 15px lime`;
  }

  // Handle bouncing off the bottom wall
  if (y + rect.height >= viewportHeight) {
    y = viewportHeight - rect.height; // Stop at the bottom edge
    dy = -Math.abs(dy); // Reverse direction, ensure it moves up
    bouncer.style.textShadow = `0px 0px 15px cyan`;
  }

  // Handle bouncing off the top wall
  if (y <= 0) {
    y = 0; // Stop at the top edge
    dy = Math.abs(dy); // Reverse direction, ensure it moves down
    bouncer.style.textShadow = `0px 0px 15px yellow`;
  }

  // Update position
  x += dx;
  y += dy;

  // Apply the new position to the element
  bouncer.style.left = `${x}px`;
  bouncer.style.top = `${y}px`;

  requestAnimationFrame(animate); // Repeat the animation
}

animate();