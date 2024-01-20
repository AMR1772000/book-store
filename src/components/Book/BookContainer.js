import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../store/bookSlice";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import "./book.css";

const PostContainer = () => {
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [selectedBook, setSelectedBook] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);  

  const getBookId = (bookId) => {
    const selectedBook = books.find((book) => book.id === bookId);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            getBookId={getBookId}
            dispatch={dispatch}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
