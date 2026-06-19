const weddingDate = new Date(
"September 13, 2026 07:30:00"
).getTime();

setInterval(() => {

const now = new Date().getTime();

const distance =
weddingDate - now;

const days =
Math.floor(distance /
(1000*60*60*24));

const hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
},1000);
const galleryImages =
document.querySelectorAll('.gallery-grid img');

const lightbox =
document.getElementById('lightbox');

const lightboxImg =
document.getElementById('lightbox-img');

galleryImages.forEach(image => {

image.addEventListener('click', () => {

lightbox.style.display = 'flex';

lightboxImg.src = image.src;

});

});

lightbox.addEventListener('click', () => {

lightbox.style.display = 'none';

});
const hiddenElements =
document.querySelectorAll('.hidden');

const observer =
new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

hiddenElements.forEach((el) =>
observer.observe(el)
);

function openInvitation(){

const welcome =
document.getElementById("welcome-screen");

welcome.classList.add("fade-out");

setTimeout(() => {

document.getElementById("home")
.style.display = "flex";

document.getElementById("main-content")
.style.display = "block";

document.getElementById("navbar")
.style.display = "flex";

document.getElementById("home")
.classList.add("hero-fade");

},600);

setTimeout(() => {

welcome.style.display = "none";

},1500);

}