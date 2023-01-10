import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const createBook = (title) => {
    console.log("Need to add book with", title);
  };
  const [books, setBooks] = useState([]);
  return <BookCreate onCreate={createBook} />;
}

export default App;
