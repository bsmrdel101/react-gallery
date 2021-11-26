import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryData}) {
    return (
        <div>
            <p>Gallery goes here</p>
            <GalleryItem galleryData={galleryData} />
        </div>
    );
};

export default GalleryList;
