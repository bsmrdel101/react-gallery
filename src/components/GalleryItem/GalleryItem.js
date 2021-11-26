import { useState } from "react";

function GalleryItem({galleryData}) {
    const [showImage, setShowImage] = useState(true);
    const [likeCount, setLikeCount] = useState(0);

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
            <img key={galleryData.id} 
                src={galleryData.path}
                onClick={flipImage}/>
            {/* return (<p key={galleryData.id} onClick={flipImage}>
                {galleryData.description}</p>); */}
        </>
    );
};

export default GalleryItem;