import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.galleryList}>
      {images.map((image) => (
        <li key={image.id} className={style.galleryItem}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
