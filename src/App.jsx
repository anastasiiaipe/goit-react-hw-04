import { fetchImages } from "./components/apiService/images-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetchImages(query, page)
      .then(({ results, total }) => {
        setImages((prev) => [...prev, ...results]);
        setTotal(total);
      })
      .catch((err) => console.error("Error fetching images:", err))
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotal(0);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      <Loader loading={loading} />
      {total > 0 && images.length < total}
    </>
  );
}

export default App;
