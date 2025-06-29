// A more efficient and scalable way to manage your team members
document.addEventListener('DOMContentLoaded', () => {

    const members = [
        { id: 'member-g', name: 'Genevieve Appiah', picture: './images/genev.jpg' },
        { id: 'member-a', name: 'Abdul Gafar', picture: './images/abdul.jpg' },
        { id: 'member-j', name: 'Jerusha Quarcoo', picture: './images/naak.jpg' },
        { id: 'member-i', name: 'Isaac Forson', picture: './images/newike.webp' }
    ];

    const imageContainer = document.getElementById('image');
    const infoElement = document.getElementById('info');
    const nameElements = document.querySelectorAll('.name');
    
    let currentIndex = 0;

    // Function to update the UI based on the active member's index
    function updateUI(index) {
        // Update image and info text
        imageContainer.style.backgroundImage = `url(${members[index].picture})`;
        infoElement.innerText = members[index].name;

        // Loop through all name elements to manage active class
        nameElements.forEach((el, i) => {
            if (i === index) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    // Set up click event listeners for each member name
    nameElements.forEach((el, index) => {
        el.addEventListener('click', () => {
            // Stop the automatic rotation when a user clicks a name
            clearInterval(autoRotateInterval);
            // Update the index and UI
            currentIndex = index;
            updateUI(currentIndex);
        });
    });

    // Set the initial UI state on page load
    updateUI(currentIndex);

    // Set up the automatic rotation
    const autoRotateInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % members.length;
        updateUI(currentIndex);
    }, 4000);
});