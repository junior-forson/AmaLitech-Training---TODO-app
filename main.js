
//Change theme
document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.querySelector('.theme');
  
    if (themeIcon) {
      themeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
          themeIcon.src = 'images/icon-sun.svg';
        } else {
          themeIcon.src = 'images/icon-moon.svg';
        }
      });
    }
  });

  
 //Count Items left
const itemCount = document.querySelector('.count span');
const mobCount = document.querySelector('.mob-count span');

itemCount.innerText = document.querySelectorAll('.list').length;
mobCount.innerText = document.querySelectorAll('.list').length;
