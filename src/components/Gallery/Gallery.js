
function Gallery({galleryList}) {
    return (
        <div>
            <p>Gallery goes here</p>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryList.map((galleryList) => {
                return <img key={galleryList.id} src="images/goat_small.jpg"/>
            })}
        </div>
    );
};

export default Gallery;