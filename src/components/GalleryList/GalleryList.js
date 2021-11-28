import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryData, getGallery}) {
    return (
        <>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryData.map((galleryImage) => {
                return (
                    <div class="gallery-item">
                        <GalleryItem key={galleryImage.id} galleryImage={galleryImage} getGallery={getGallery} />
                    </div>
                );
            })}
        </>
    );
};

export default GalleryList;
