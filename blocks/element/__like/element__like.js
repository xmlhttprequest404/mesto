export function toggleLike() {
  let like = document.querySelectorAll('.element__like');

  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
      like[i].classList.toggle('element__like_theme_dark');
    });
  }
}

toggleLike();
