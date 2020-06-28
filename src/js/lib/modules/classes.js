import $ from '../../core';
$.prototype.addClasses = function (...selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...selector);
    }
    return this;
};
$.prototype.removeClasses = function (...selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...selector);
    }
    return this;
};
$.prototype.addClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(selector);
    }
    return this;
};
$.prototype.removeClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(selector);
    }
    return this;
};
$.prototype.toggleClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(selector)) {
            this[i].classList.remove(selector);
        } else {
            this[i].classList.add(selector);
        }
    }
    return this;
};