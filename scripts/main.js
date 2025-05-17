// Select all buttons and time-data elements
const buttons = document.querySelectorAll('#daily-btn, #weekly-btn, #monthly-btn');
const timeDataElements = document.querySelectorAll('.time-data');

// Function to update displayed data based on timeframe
showTimeframe = (timeframe) =>{
    // Update time-data visibility
    timeDataElements.forEach(data => {
        data.classList.toggle('hidden', data.dataset.timeframe !== timeframe); // Show only the selected timeframe
    });

    // Update button styles
    buttons.forEach(btn => {
        btn.classList.toggle('text-white', btn.id === `${timeframe}-btn`); // Highlight selected button
        btn.classList.toggle('text-nuetral-purple-500', btn.id !== `${timeframe}-btn`); // Dim unselected buttons
    });
}

// Initialize with Monthly data visible
showTimeframe('weekly');

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const timeframe = button.id.split('-')[0]; // Extract timeframe (daily, weekly, monthly)
        showTimeframe(timeframe);
    });
});