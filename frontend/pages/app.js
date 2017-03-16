'use strict';

import $ from 'jquery';
import './app.styl';

import App from '../includes/App.js';
import Slider from '../blocks/slider/slider';
import Carousel from '../blocks/carousel/carousel';
import Header from '../blocks/header/header';
import ImageBorder from '../blocks/image-border/image-border';

$(() => {

    if (App.is_ff) {
        App.htmlTag.addClass('ff');
    }
    if (App.is_chr) {
        App.htmlTag.addClass('chrome');
    }
    if (App.is_ie) {
        App.htmlTag.addClass('ie');
    }
    if (App.is_android) {
        App.htmlTag.addClass('android');
    }
    if (App.is_mac) {
        App.htmlTag.addClass('mac');
    }
    if (App.is_safari) {
        App.htmlTag.addClass('safari');
    }
    if (App.is_ios) {
        App.htmlTag.addClass('ios');
    }

    if (App.is_edge) {
        App.htmlTag.addClass('edge');
    }

    App.modules.push(new Slider());
    App.modules.push(new Carousel());
    App.modules.push(new Header());
    App.modules.push(new ImageBorder());

});




