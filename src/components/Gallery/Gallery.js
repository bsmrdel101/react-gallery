
function Gallery({galleryList}) {
    return (
        <div>
            <p>Gallery goes here</p>
            {galleryList.map(() => {
                return (
                    <img src="images/goat_small.jpg"/>
                );
            })}
        </div>
    );
};

export default Gallery;