import $ from 'jquery';
import Module from '../../includes/Module';
import App from '../../includes/App';

export default class Header extends Module {

    constructor() {
        super({
            name: 'Header',
            self: '.js-header'
        });
    }

    init() {
        this.$burger = $('.js-burger', this.$root);
        this.$menu = $('.js-menu', this.$root);

        this.$burger.on('click', $.proxy(this.openMenu, this));
    }

    openMenu(e) {
        let target = e.currentTarget;
        $(target).toggleClass('burger--click');
        this.$menu.toggleClass('menu--open');
    }
}
