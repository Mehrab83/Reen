var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = 'none';
  });
}



// banner 
$('#banner').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>',
});

AOS.init();
// banner

// qty button
let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;

}
// qty button
// deals slide start
// $('.deals_slide').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows: true,
//   prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
//   nextarrow: '<i class="fa-solid fa-chevron-right"></i>',
// });
// deals slide end

$('.seller_slide').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>',
});

// Main Menu
const stickyNavbar = document.querySelector("section#main_menu");

document.addEventListener("scroll", () => {
  if (window.scrollY > 666) {
    stickyNavbar.classList.add('scrolling');
    
  }
  else{
    stickyNavbar.classList.remove('scrolling');
    
  }
  console.log(window.scrollY)
})
// Main Menu
// popular post
$('.post_slider').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left prevArrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextArrow"></i>',
});

// popular post


$('.counter').counterUp({
  delay: 10,
  time: 1000
});




