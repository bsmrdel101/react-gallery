
function Gallery({galleryList}) {
    return (
        <div>
            <p>Gallery goes here</p>
            {galleryList.map(() => {
                return <img key="{galleryList.id}" src="images/goat_small.jpg"/>
            })}
        </div>
    );
};

export default Gallery;