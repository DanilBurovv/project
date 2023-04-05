const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const searchCont = document.getElementById('search')
const svg = openBtn.querySelector('svg')

openBtn.addEventListener('click', handleOpen);

function handleOpen() {
    searchCont.style.height = '90px';
  }

  svg.addEventListener('click', svgOpen);

  function svgOpen(event) {
    event.stopPropagation();
    handleOpen();
  }
  
  closeBtn.addEventListener('click', handleClose);

  function handleClose() {
    searchCont.style.height = '0';
  }

  document.addEventListener('click', handleClick);

  function handleClick(event) {
    const target = event.target;
    if (target !== openBtn && target !== searchCont && !searchCont.contains(target)) {
      searchCont.style.height = '0';
    }
  }

  window.addEventListener ('scroll', function(){
    searchCont.style.height = '0'
    if (window.scrollY === 0) {
      openBtn.style.display = 'block';
    } else {
      openBtn.style.display = 'none';
    }
  })



  const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});