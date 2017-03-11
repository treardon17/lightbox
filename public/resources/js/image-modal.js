'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageModal = function () {
    function ImageModal(element) {
        _classCallCheck(this, ImageModal);

        this.element = $(element);
        this.closeButton = $(this.element).find('.image-modal-exit')[0];
        this.modalImages = $('.image-container');
        this.imageIndex = 0;
        this.imageViewer = $(this.element).find('#image-modal-main-image');
        this.setupListeners();
    }

    _createClass(ImageModal, [{
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            $(this.closeButton).click(function () {
                _this.hide();
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            $(this.element).removeClass('modal-active');
        }
    }, {
        key: 'setImageIndex',
        value: function setImageIndex(index) {
            this.imageIndex = index;
            var imageURL = $(this.modalImages[index]).attr('image-data');
            $(this.imageViewer).css({
                'background-image': 'url(' + imageURL + ')'
            });
        }
    }, {
        key: 'show',
        value: function show() {
            $(this.element).addClass('modal-active');
        }
    }]);

    return ImageModal;
}();