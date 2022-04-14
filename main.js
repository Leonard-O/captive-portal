const input = document.querySelector('#auth_voucher');
const ok = document.querySelector('#ok');
const watch = document.querySelector('#watch');
const promoHome = document.querySelector('.promo-home');
const logo = document.querySelector('.logo');
// const logo = document.querySelector('#logo');
const wifi = document.querySelector('.wifi');
const promoP = document.querySelector('.promoP');
const form = document.querySelector('.form');
const back = document.querySelector('.back');
const backHome = document.querySelector('.backHome');

// let newValue = '';
// ok.addEventListener('click', () => {
//     // console.log(input.value);
//     newValue = input.value;
//     // console.log(newValue);
//     if ((newValue = '')) {
//         console.log('hi people');
//     }
// });

watch.addEventListener('click', () => {
    let btn = document.createElement('button');
    // btn.style.width = '5rem';

    btn.innerHTML = 'back';
    back.appendChild(btn);

    // logo.style.width = '5rem';
    logo.style.display = 'none';
    wifi.style.display = 'none';
    promoHome.style.display = 'block';
    promoP.style.paddingTop = '2rem';
    form.style.display = 'none';
    watch.style.display = 'none';
    back.style.display = 'block';

    const video = document.createElement('video');
    video.style.maxWidth = '100%';
    video.src = './videos/storyBoardTvIntro.mp4';
    video.autoplay = true;
    promoHome.appendChild(video);

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });

    back.addEventListener('click', () => {
        logo.style.display = 'block';
        wifi.style.display = 'block';
        promoHome.style.display = 'none';
        form.style.display = 'block';
        back.style.display = 'none';
        watch.style.display = 'block';

        promoHome.removeChild(video);
        back.removeChild(btn);
    });
});