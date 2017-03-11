'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageSection = function () {
    function ImageSection(element) {
        _classCallCheck(this, ImageSection);

        this.element = $(element);
        this.modal = new ImageModal('#image-modal');
        this.links = $(this.element).find('.image-section-link');
        this.setupListeners();
    }

    _createClass(ImageSection, [{
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            $(this.links).click(function (event) {
                _this.showModal({ event: event });
            });
        }
    }, {
        key: 'showModal',
        value: function showModal() {
            var pObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { event: null };

            this.modal.show();
            if (pObject.event) {
                var imageNum = $(pObject.event.target).attr('image-number');
                console.log(imageNum);
                this.modal.setImageIndex(imageNum);
            }
        }
    }]);

    return ImageSection;
}();

$(document).ready(function () {
    var section = $('.image-section')[0];
    var imageSection = new ImageSection(section);
});