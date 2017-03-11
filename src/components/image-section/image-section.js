class ImageSection{
    constructor(element){
        this.element = $(element);
        this.modal = new ImageModal('#image-modal');
        this.links = $(this.element).find('.image-section-link');
        this.setupListeners();
    }

    setupListeners(){
        $(this.links).click((event)=>{
            this.showModal({event: event});
        });
    }

    showModal(pObject = {event: null}){
        this.modal.show();
        if(pObject.event){
            let imageNum = $(pObject.event.target).attr('image-number');
            console.log(imageNum);
            this.modal.setImageIndex(imageNum);
        }
    }
}

$(document).ready(()=>{
    let section = $('.image-section')[0];
    let imageSection = new ImageSection(section);
});
