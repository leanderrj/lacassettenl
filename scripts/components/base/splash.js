// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Player from '@vimeo/player';

export default window.component(async (node, ctx) => {
  const playButton = document.querySelector('.home-page__play-button');
  const overlay = document.querySelector('.home-page__splash-overlay');
  const vimeoPlayer = document.querySelector('.home-page__vimeo-container iframe');
  const lottiePlayer = document.querySelector('lottie-player');
  const splashImages = document.querySelectorAll('.home-page__splash-image');

  lottiePlayer.addEventListener('load', () => {
    document
      .querySelector('.home-page__loading-screen')
      .classList.add('opacity-0', 'pointer-events-none');
  });

  if (screen.width >= 1024) {
    node.addEventListener('mousemove', e => {
      splashImages.forEach(image => {
        const { parallaxValue } = image.dataset;
        const x = (e.clientX * parallaxValue) / 250;
        const y = (e.clientY * parallaxValue) / 250;
        image.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });
  }

  const iframe = document.querySelector('.home-page__vimeo');

  playButton.addEventListener('click', () => {
    if (
      iframe.src !==
      `https://player.vimeo.com/video/601088734?color=FFBA00&title=0&byline=0&portrait=0&badge=0`
    ) {
      iframe.src = `https://player.vimeo.com/video/601088734?color=FFBA00&title=0&byline=0&portrait=0&badge=0`;
    }
    overlay.classList.remove('pointer-events-none', 'opacity-0');
    overlay.classList.add('opacity-95');
    vimeoPlayer.classList.add('pointer-events-auto');
    vimeoPlayer.classList.add('scale-100');
    const player = new Player(iframe);
    player.play();
  });
  overlay.addEventListener('click', () => {
    const player = new Player(iframe);
    player.pause();
    overlay.classList.remove('opacity-95');
    overlay.classList.add('pointer-events-none', 'opacity-0');
    vimeoPlayer.classList.remove('pointer-events-auto');
    vimeoPlayer.classList.remove('scale-100');
  });
});
