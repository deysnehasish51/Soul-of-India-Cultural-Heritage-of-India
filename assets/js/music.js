
// Get a reference to the select element
const selectState = document.getElementById("select-state");

// Function to update the selected option based on the state in the URL
function updateSelectedOption() {
    // Get the state from the URL
    const url = new URL(window.location.href);
    const state = url.searchParams.get("state");

    // Update the selected option in the dropdown
    selectState.value = state;
}

// Add an event listener to detect changes in the URL
window.addEventListener("popstate", updateSelectedOption);

// Initial update based on the current URL
updateSelectedOption();


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;