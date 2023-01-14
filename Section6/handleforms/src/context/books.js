import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    // const response = await axios.get("http://localhost:3001/books");
    // setBooks(response.data);
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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

  const valueToShare = {
    books,
    deleteBookById,
    editBookByID,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
