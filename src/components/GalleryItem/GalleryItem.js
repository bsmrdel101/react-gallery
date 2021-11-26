import { useState } from "react";

function GalleryItem({galleryData}) {
    const [showImage, setShowImage] = useState(true);

    const flipImage = () => {
        if (showImage) {
          setShowImage(false);
        } else {
          setShowImage(true);
        }
    };

    return (
        <>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryData.map((galleryData) => {
                if (showImage) {
                    return (
                        <img key={galleryData.id} 
                            src={galleryData.path}
                            onClick={flipImage}/>
                    );
                } else {
                    return (<p key={galleryData.id} onClick={flipImage}>
                        {galleryData.description}</p>);
                }
            })}
        </>
    );
};

export default GalleryItem;