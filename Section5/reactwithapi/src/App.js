import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result.data.results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
