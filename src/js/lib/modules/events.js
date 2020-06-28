import $ from '../../core';
$.prototype.on = function (eventName, callback, intercept = false) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback, intercept);
    }
    return this;
};
$.prototype.off = function (eventName, callback, intercept = false) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback, intercept);
    }
    return this;
};
$.prototype.click = function () {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener('click');
    }
    return this;
};
