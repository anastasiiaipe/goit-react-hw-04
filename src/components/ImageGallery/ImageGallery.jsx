import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </li>
    </ul>
  );
};
export default ImageGallery;
