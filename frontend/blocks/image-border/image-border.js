import Module from '../../includes/Module';
let $ = require('jquery');
require('fancybox')($);



export default class ImageBorder extends Module {

    constructor() {
        super({
            name: 'Image-Border',
            self: '.js-image-border'
        });
    }

    init() {
        this.$fancyImage = $('.js-fancybox');
        this.$fancyImage.fancybox();
    }
}