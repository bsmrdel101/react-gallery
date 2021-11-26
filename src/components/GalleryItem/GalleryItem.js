import axios from "axios";
import { useState } from "react";

function GalleryItem({galleryImage, getGallery}) {
    const [showImage, setShowImage] = useState(true);
    // const [imageLikes, setImageLikes] = useState(galleryImage.likes);

    const flipImage = () => {
        if (showImage) {
          setShowImage(false);
        } else {
          setShowImage(true);
        }
    };

    const handleLikedImage = () => {
        axios({
            method: 'PUT',
            url: `gallery/like/${galleryImage.id}`
        })
        .then((response) => {
            console.log('response ', response.data);
            getGallery();
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    }

    return (
        <div>
            {/* Toggles between image and description */}
            {showImage ?
                <img key={galleryImage.id} 
                src={galleryImage.path}
                onClick={flipImage}/> 
                : 
                <p onClick={flipImage}>{galleryImage.description}</p>}
            {/* Image likes */}
            <p>{galleryImage.likes} likes</p>
            <button onClick={handleLikedImage}>❤️</button>
        </div>
    );
};

export default GalleryItem;