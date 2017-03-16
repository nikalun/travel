import $ from 'jquery';

export default class Module {
    constructor(opt1) {
        this.options = {
            name: 'Module',
            self: ''
        };

        this.options = $.extend(this.options, opt1);
        if (this.options.self.length > 0) {
            this.$root = $(this.options.self);
            this.init();
        }

    }

    init() {}
}