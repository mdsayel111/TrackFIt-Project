import { Helmet } from "react-helmet-async";
import GalleryTitle from "../../Components/Gallery/GalleryTile/GalleryTitle";
import ScrollGallery from "../../Components/Gallery/ScrollGallery/ScrollGallery";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>TracFit | Gallery</title>
      </Helmet>
      <GalleryTitle />
      <ScrollGallery />
    </div>
  );
};

export default Gallery;
