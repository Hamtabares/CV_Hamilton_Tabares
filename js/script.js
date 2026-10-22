document.addEventListener('DOMContentLoaded', () => {
  console.log('CV cargado');

  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));

  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    let current = 0;
    const step = Math.ceil(target / 45);

    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target + '+';
        return;
      }
      counter.textContent = current + '+';
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  });
});
