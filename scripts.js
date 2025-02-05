function changeLanguage(language) {
    // Implement language change logic here
    console.log("Language changed to: " + language);
    document.getElementById('language-btn').innerText = language.toUpperCase();
}

$(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  
    // If you want to keep full screen on window resize
    $(window).resize(function(){
      $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
  });