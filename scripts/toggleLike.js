function toggleLike() {
  const like = document.querySelectorAll('.element__like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('element__like_theme_dark');
    });
  });
}

toggleLike();


