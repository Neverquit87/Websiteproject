var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function getStats() {
    $.ajax("https://qrng.anu.edu.au/API/jsonI.php?length=4&type=uint16")
    .done((data) => {
        postStats(data);
    })
    .fail((jqXHR, textStatus) => {
        console.log("Request failed: " + textStatus);
    });
}


function postStats(data) {
    console.log(data);
    counts = data.data.sort((a, b) => {return a - b});
    console.log(counts);
    $("#center_count")[0].innerHTML = counts[0];
    $("#user_count")[0].innerHTML = counts[1];
    $("#booking_count")[0].innerHTML = counts[2];
    $("#hour_count")[0].innerHTML = counts[3];
}

getStats();
setInterval(getStats, (1000 * 60 * 3));
