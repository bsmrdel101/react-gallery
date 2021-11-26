import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryData}) {
    return (
        <div>
            <GalleryItem galleryData={galleryData} />
        </div>
    );
};

export default GalleryList;
