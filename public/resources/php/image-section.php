<?php
    $image_dir = './resources/images/lightbox';
    $image_files = scandir($image_dir);
    $index = 0;

    foreach ($image_files as $key => $image) {
        if(strlen($image) > 2){
            $image_url = './resources/images/lightbox/'.$image;
            $image_url_css = '../resources/images/lightbox/'.$image;
            echo '<a href="#" class="image-section-link">
                <div id="image-section-'.$key.'"" class="image-container" image-data="'.$image_url_css.'" image-number="'.$index.'" style="background-image: url('.$image_url.')"></div>
            </a>';
            $index += 1;
        }
    }
?>
