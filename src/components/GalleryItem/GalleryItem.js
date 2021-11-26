import { useState } from "react";

function GalleryItem({galleryImage}) {
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
            {showImage ?
                <img key={galleryImage.id} 
                src={galleryImage.path}
                onClick={flipImage}/> 
                : 
                <p onClick={flipImage}>{galleryImage.description}</p>}
        </>
    );
};

export default GalleryItem;