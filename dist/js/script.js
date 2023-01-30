function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");
  let paragrapf = document.getElementById("paragrapf");
    
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more +";
    moreText.style.display = "none";
    paragrapf.style.border = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less +";
    moreText.style.display = "inline";
    paragrapf.style.border = "1px solid blue";
  }
}