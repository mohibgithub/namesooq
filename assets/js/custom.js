document.addEventListener('DOMContentLoaded', function () {
  const langSwitcher = document.querySelector('.lang-switcher');
  const selected = langSwitcher.querySelector('.lang-switcher-selected');
  const options = langSwitcher.querySelectorAll('.lang-option');

  options.forEach(option => {
    option.addEventListener('click', function (event) {
      event.preventDefault();

      const newLabel = this.dataset.lang;
      const newFlag = this.dataset.flag;

      if (newLabel && newFlag) {
        selected.innerHTML = `<img src="${newFlag}" alt="${newLabel.toLowerCase().slice(0, 2)}" class="lang-flag"> ${newLabel}`;
      }

      options.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const video = document.getElementById('myVideo');
  const playBtn = document.getElementById('playBtn');

  if (video && playBtn) {
    playBtn.addEventListener('click', function () {
      video.play();
    });

    video.addEventListener('play', function () {
      video.setAttribute('controls', '');
      playBtn.style.display = 'none';
    });

    video.addEventListener('ended', function () {
      playBtn.style.display = 'flex';
      video.removeAttribute('controls');
    });
  }

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    const card = btn.closest('.faq-card');
    const icon = btn.querySelector('.faq-icon');
    const answer = card.querySelector('.faq-answer');

    answer.style.maxHeight = '0px';
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      const isOpen = card.classList.contains('open');

      // Close all open FAQ cards first
      faqQuestions.forEach((otherBtn) => {
        const otherCard = otherBtn.closest('.faq-card');
        const otherIcon = otherBtn.querySelector('.faq-icon');
        const otherAnswer = otherCard.querySelector('.faq-answer');
        if (otherCard !== card && otherCard.classList.contains('open')) {
          otherAnswer.style.maxHeight = '0px';
          otherCard.classList.remove('open');
          otherBtn.setAttribute('aria-expanded', 'false');
          otherIcon.innerText = '+';
          otherIcon.classList.remove('rotated');
        }
      });

      if (isOpen) {
        answer.style.maxHeight = '0px';
        card.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        icon.innerText = '+';
        icon.classList.remove('rotated');
      } else {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        card.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        icon.innerText = '−';
        icon.classList.add('rotated');
      }
    });
  });
});