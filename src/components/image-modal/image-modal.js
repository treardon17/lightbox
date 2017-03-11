class ImageModal{
    constructor(element){
        this.element = $(element);
        this.closeButton = $(this.element).find('.image-modal-exit')[0];
        this.modalImages = $('.image-container');
        this.imageIndex = 0;
        this.imageViewer = $(this.element).find('#image-modal-main-image');
        this.setupListeners();
    }

    setupListeners(){
        $(this.closeButton).click(()=>{
            this.hide();
        });
    }

    hide(){
        $(this.element).removeClass('modal-active');
    }

    setImageIndex(index){
        this.imageIndex = index;
        let imageURL = $(this.modalImages[index]).attr('image-data');
        $(this.imageViewer).css({
            'background-image': 'url('+imageURL+')'
        });
    }

    show(){
        $(this.element).addClass('modal-active');
    }
}
