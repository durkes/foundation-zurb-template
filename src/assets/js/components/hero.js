import $ from 'jquery';

// index hero changer
$(function () {
    const indexHero = $('#index-hero');
    if (!indexHero.length) return; // not on page; stop
    const heroContent = $('#index-hero .hero-content');

    const delay = 8 * 1000;
    const slideData = [];

    const defaultStyle = ''; // use css for default
    const darkShadow = 'text-shadow: 0 0 10px rgba(0, 0, 0, 0.8)';

    slideData.push(['yktK2qaiVHI', darkShadow, 'Example Hero Message 1']);
    slideData.push(['mcSDtbWXUZU', darkShadow, 'Example Hero Message 2']);
    slideData.push(['Oalh2MojUuk', darkShadow, 'Example Hero Message 3']);
    slideData.push(['7e2pe9wjL9M', darkShadow, 'Example Hero Message 4']);

    // shuffle array
    function shuffleSlides() {
        slideData.sort(() => 0.5 - Math.random());
    }

    let imgIdx = 0;
    shuffleSlides();
    setHero(); // start immediately

    function setHero() {
        const imgId = slideData[imgIdx][0];
        const imgUrl = `https://source.unsplash.com/${imgId}/1600x800`;
        const style = slideData[imgIdx][1];
        const tagline = slideData[imgIdx][2];

        const imgPreload = new Image();
        imgPreload.onload = () => {
            // change hero image
            indexHero.css({ 'background-image': 'url(' + imgUrl + ')' });

            // change text and style
            heroContent.text(tagline);
            heroContent.attr('style', style);

            imgIdx++;
            if (imgIdx === slideData.length) {
                imgIdx = 0; // start over
                shuffleSlides();
            }
            setTimeout(setHero, delay); // loop after delay
        };
        imgPreload.src = imgUrl;
    }
});