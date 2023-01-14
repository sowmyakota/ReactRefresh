import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    // const response = await axios.get("http://localhost:3001/books");
    // setBooks(response.data);
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response);
  };
  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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

  const createBook = async (title) => {
    //creating new array instead of mutating it.
    // const updatedBook = [...books, { id: Math.random() * 9999, title: title }];
    // setBooks(updatedBook);
    // console.log("Need to add book with", title);
    const res = await axios.post("http://localhost:3001/books", {
      title,
    });
    console.log(res);
    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
