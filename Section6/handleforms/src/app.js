import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    //creating new array instaed of mutating it.
    const updatedBook = [...books, { id: 123, title: title }];
    setBooks(updatedBook);
    console.log("Need to add book with", title);
  };
  return <BookCreate onCreate={createBook} />;
}

export default App;
