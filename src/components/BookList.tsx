// import { useEffect } from "react";
import Book from "./Book";
import img1 from "../images/atmoic.jpg";
import img2 from "../images/ikigai.jpg";
import img3 from "../images/psychology.jpg";
// interface Props {
//   bookId : number
// }

const BookList = () => {
  // let filterValue = 0;

  const bookData = [
    {
      image: img1,
      title: "Atomic Habits",
      author: "James Clear",
      id: 1,
    },
    {
      image: img2, 
      title: "Ikigai",
      author: "Francesc Miralles",
      id: 2,
    },
    {
      image: img3,
      title: "The Psychology Of Money",
      author: "Morgan Housel",
      id: 3,
    },
  ];


  return (
    <>
      <section className="book-list-container">
        {bookData.map((book) => (
          <Book
            image={book.image}
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.id}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
