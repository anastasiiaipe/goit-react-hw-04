import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [images, setImages] = useState("");

  const saveImage = (event) => {
    const imageValue = event.target.value;

    setImages(imageValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (images.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(images);
    setImages("");
  };

  return (
    <header>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button className={style.searchBtn} type="submit">
          <FiSearch className={style.searchIcon} />
        </button>
        <input
          className={style.searchInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          onChange={saveImage}
          value={images}
          autoComplete="off"
          autoFocus
        />
      </form>

      <Toaster position="bottom-center" reverseOrder={false} />
    </header>
  );
};
export default SearchBar;
