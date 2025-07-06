const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


const labels = document.querySelectorAll('.meals-menu label');
  const container = document.querySelector('.meals-images');

  function shuffleImages() {
    const images = Array.from(container.children);
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.appendChild(images[j]);
      images.splice(j, 1);
    }
  }

  labels.forEach(label => {
    label.addEventListener('click', () => {
      
      labels.forEach(l => l.classList.remove('active'));
      label.classList.add('active');

      
      shuffleImages();
    });
  });
