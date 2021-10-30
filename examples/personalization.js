// This mocks external script which provides personalized content (and uses cookies to identify the user).
// As such, it should only by run when user has given consent for "personalization" category.
document.getElementById('personalization-content').innerText = 'personalization.js loaded and executed';
