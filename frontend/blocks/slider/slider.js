import $ from 'jquery';
import Module from '../../includes/Module';
import Swiper from '../../../node_modules/swiper/dist/js/swiper.min';

export default class Slider extends Module {

    constructor() {
        super({
            name: 'Slider',
            self: '.js-slider'
        });
    }

    init() {
        this.$container = $('.js-slider-container', this.$root);
        this.initSlider();
    }

    initSlider() {
        this.$slider = new Swiper(this.$container, {
            paginationClickable: true,
            loop: true,
            slidesPerView: 1,
            speed: 800,
            effect: 'fade',
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            nextButton: '.js-slider-next',
            prevButton: '.js-slider-prev'
        });
    }
}
