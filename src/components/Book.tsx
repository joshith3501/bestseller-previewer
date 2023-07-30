// import { MouseEventHandler } from "react";

interface Props {
  image: string;
  title: string;
  author: string;
  id: number;
  getBook: (id: number) => void;
}

function Book({ image, title, author, id }: Props) {
  
  return (
    <article key={id} className="book-container">
      <img src={image} alt={title} className="book-image" />
      <button onClick={() => {getBook(id)}}>Click me!</button>
      <strong className="book-title">{title}</strong>
      <small className="book-author">{author}</small>
    </article>
  );
}

export default Book;
