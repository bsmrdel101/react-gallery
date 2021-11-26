import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryData}) {
    return (
        <>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryData.map((galleryImage) => {
                return <GalleryItem key={galleryImage.id} galleryImage={galleryImage} />
            })}
        </>
    );
};

export default GalleryList;
