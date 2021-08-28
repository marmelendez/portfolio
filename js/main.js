const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
$(window).height();
$(window).width();


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

(document).ready(function(){
    if(window.innerWidth < 1340){
      ('#icon').addClass('backup-btn-group').removeClass('btn-group');
    }
  });
  
(window).resize(function(){
    if(window.innerWidth < 1340){
      ('.btn-group').addClass('backup-btn-group').removeClass('btn-group');
    }else{
      ('.backup-btn-group').addClass('btn-group').removeClass('backup-btn-group');
    }
  });