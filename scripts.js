function changeLanguage(language) {
    // Implement language change logic here
    console.log("Language changed to: " + language);
    document.getElementById('language-btn').innerText = language.toUpperCase();
}