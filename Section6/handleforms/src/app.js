import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const editBookByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    //creating new array instead of mutating it.
    const updatedBook = [...books, { id: Math.random() * 9999, title: title }];
    setBooks(updatedBook);
    console.log("Need to add book with", title);
  };
  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
