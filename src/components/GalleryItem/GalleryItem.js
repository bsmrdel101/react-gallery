
function GalleryItem({galleryData}) {
    return (
        <>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryData.map((galleryData) => {
                return <img key={galleryData.id} src="images/goat_small.jpg"/>
            })}
        </>
    );
};

export default GalleryItem;