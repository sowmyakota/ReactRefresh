import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    //creating new array instead of mutating it.
    const updatedBook = [...books, { id: Math.random() * 9999, title: title }];
    setBooks(updatedBook);
    console.log("Need to add book with", title);
  };
  return (
    <div>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
