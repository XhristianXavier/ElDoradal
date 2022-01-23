const menuIconId = document.querySelector('#menuIconId');
menuIconId.addEventListener('click',(e) =>{
  e.preventDefault();
  document.body.classList.toggle('show-menu-mobile');
});
const itemsMenuDesktop = document.querySelectorAll('#menuDesktopId li .menu-desktop__link');
itemsMenuDesktop.forEach((element,index) =>{
    if(index === 0){
      if(window.location.pathname ==='/index.html'){
        element.classList.add('underline-link');
      }
      else{
        let currentMenu = localStorage.getItem('current-menu');
        document.querySelectorAll('#menuDesktopId li .menu-desktop__link').forEach((elem,i) =>{
          if(i === Number(currentMenu)){
            elem.classList.add('underline-link');
          }
      }); 
      }
    }
    element.addEventListener('click',(e) =>{
        e.preventDefault();
            document.querySelectorAll('#menuDesktopId li .menu-desktop__link').forEach((elem) =>{
                elem.classList.remove('underline-link');
            }); 
            element.classList.add('underline-link');
            let directionURL = e.target.getAttribute('href');
            localStorage.setItem("current-menu", index);
            window.location.href = directionURL;
    })
});
window.addEventListener('resize', (e) =>{
  let widthScreen = window.innerWidth;
  if(widthScreen >= 1024) {
    if(document.body.classList.contains('show-menu-mobile')){
      document.body.classList.remove('show-menu-mobile');
    }
  }
});
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if(document.body.classList.contains('show-menu-mobile') === false){
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      document.body.classList.remove("scroll-up");
      return;
    }
    if (currentScroll > lastScroll && !document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-up");
      document.body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      document.body.classList.contains("scroll-down")
    ) {
      document.body.classList.remove("scroll-down");
      document.body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  }
});