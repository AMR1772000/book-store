import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {info ? (
        <div>
          <p className="fw-bold">Title: {info.title}</p>
          <p className="fst-italic">Inserted By: {info.userName}</p>
          <p className="fst-italic">Description: {info.description}</p>
          <p className="fst-italic">Price: {info.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no books selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
