import $ from 'jquery';
import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

export default class Carousel extends Module {

    constructor() {
        super({
            name: 'Carousel',
            self: '.js-carousel'
        });
    }

    init() {
        this.$container = $('.js-carousel-container', this.$root);
        this.initSlider();
    }

    initSlider() {
        this.$carousel = new Swiper(this.$container, {
            paginationClickable: true,
            loop: true,
            slidesPerView: 3,
            speed: 800,
            spaceBetween: 30,
            autoplay: 3500,
            autoplayDisableOnInteraction: false,
            nextButton: '.js-carousel-next',
            prevButton: '.js-carousel-prev',
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
            }
        });
    }
}
