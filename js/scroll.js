const stickySections = [...document.querySelectorAll('.sticky-wrap')];

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

function handleScroll() {
  requestAnimationFrame(() => {
    for (let i = 0; i < stickySections.length; i++) {
      transform(stickySections[i]);
    }
  });
}

function handleResize() {
  // Добавьте обработчик изменения размера окна при необходимости
}

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.horizontal-scroll');

  const scrollPercentage = calculateScrollPercentage(offsetTop);
  applyTransform(scrollSection, -scrollPercentage);
}

function calculateScrollPercentage(offsetTop) {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  let percentage = ((scrollY - offsetTop) / windowHeight) * 100;
  return Math.min(100, Math.max(0, percentage));
}

function applyTransform(element, percentage) {
  element.style.transform = `translate3d(${percentage}vw, 0, 0)`;
}
