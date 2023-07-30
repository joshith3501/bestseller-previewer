// import { useEffect } from "react";
import Book from "./Book";

// interface Props {
//   bookId : number
// }

const BookList = () => {
  // let filterValue = 0;

  const bookData = [
    {
      image: "./images/atmoic.jpg",
      title: "Atomic Habits",
      author: "James Clear",
      id: 1,
    },
    {
      image: "./images/ikigai.jpg",
      title: "Ikigai",
      author: "Francesc Miralles",
      id: 2,
    },
    {
      image: "./images/psychology.jpg",
      title: "The Psychology Of Money",
      author: "Morgan Housel",
      id: 3,
    },
  ];

//   let filteredData = bookData.filter((book) => book.id === bookId);
//   useEffect(() => {
//   console.log(bookData.find((book) => book.id === bookId));
// }, [bookId]);

//   if(filteredData.length === 0) filteredData = [...bookData];

  const showBook = (id: number) => {
    console.log(bookData.find((book) => book.id === id))
  }

  return (
    <>
      <section className="book-list-container">
        {bookData.map((book) => (
          <Book
            image={book.image}
            title={book.title}
            author={book.author}
            id={book.id}
            getBook={showBook}
            key={book.id}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
