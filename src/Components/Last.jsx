import React from "react";
import { Link } from "react-router-dom";

function Last(props) {
  return (
    <>
      <h1>Voila!!!!!</h1>
      <h3>You have to come to last page of this Web Application</h3>
      <h3>Below are the movies added to your WatchList</h3>
      {props.list.length == 0 ? (
        <h2>No movies added</h2>
      ) : (
        <ol>
          {props.list.map((movie) => {
            return <li>{movie}</li>;
          })}
        </ol>
      )}
      <Link to="/">
        <button id="btn8">Finish</button>
      </Link>
    </>
  );
}

export default Last;
