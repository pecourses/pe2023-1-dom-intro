'use strict';

const slides = [
  {
    src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape1',
  },
  {
    src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape2',
  },
  {
    src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape3',
  },
  {
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'landscape4',
  },
];

const slideImg = document.querySelector('img');
const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

try {
  // Виносимо відповідальність за обчислення для слайдера на клас
  const slider = new Slider(slides);

  updateSlideImage(slider.currentSlide);

  function nextSlideHandler() {
    slider.incSlideIndex();
    updateSlideImage(slider.currentSlide);
  }
  nextBtn.addEventListener('click', nextSlideHandler);

  function prevSlideHandler() {
    slider.decSlideIndex();
    updateSlideImage(slider.currentSlide);
  }
  prevBtn.addEventListener('click', prevSlideHandler);

  function updateSlideImage(currentSlide) {
    // currentSlide - об'єкт {src, alt}
    slideImg.src = currentSlide.src;
    slideImg.alt = currentSlide.alt;

    slideImg.onerror = () => {
      slideImg.src =
        'https://kaverisias.com/kv-app/uploads/2018/01/catalog-default-img.gif';
    };
  }
} catch (e) {
  slideImg.src =
    'https://kaverisias.com/kv-app/uploads/2018/01/catalog-default-img.gif';
}
