import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryData}) {
    return (
        <>
            {galleryData.map((galleryData) => {
                <GalleryItem galleryData={galleryData} />
            })}
        </>
    );
};

export default GalleryList;
