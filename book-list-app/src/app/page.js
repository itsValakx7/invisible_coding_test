"use client";

import { useState } from "react";
import "../styles/style.css";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel set in the Roaring Twenties about wealth and tragedy.",
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism and surveillance.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({ title: "", author: "", description: "" });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (!newBook.title || !newBook.author || !newBook.description) {
      alert("Please fill in all fields.");
      return;
    }
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="book-container">
      <header className="book-header">
        <h1>My Book List</h1>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>+ Add Book</button>
      </header>

      <section className="book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add a New Book</h2>
            <input type="text" name="title" placeholder="Book Title" value={newBook.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleChange} />
            <textarea name="description" placeholder="Short Description" value={newBook.description} onChange={handleChange}></textarea>
            <button className="save-btn" onClick={addBook}>Save</button>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
