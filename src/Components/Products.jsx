import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let datav = [];
function Products(props) {
  const [data, setData] = useState([]);
  const [a, setA] = useState(0);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/624657b01a1b610f084921f5")
      .then(async (response) => {
        return await response.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <h1 className="mh">Movies</h1>
      <Link to="/">
        <button id="btn5">Home</button>
      </Link>
      <div className="movie-list">
        {data.map((movie, index) => {
          if (index < a + 10 && index >= a) {
            return (
              <div className="rect">
                <img src={movie.info.image_url} className="img-rect" />
                <p style={{ margin: "25px" }}>
                  {movie.title}- Year: {movie.year}
                </p>
                <button
                  className="btn7"
                  onClick={() => {
                    datav.push(movie.title);
                    props.setList(datav);
                  }}
                >
                  Add to Watchlist
                </button>
              </div>
            );
          }
        })}
        <button
          id="btn3"
          onClick={() => {
            const b = a;
            setA(b + 10);
          }}
        >
          More
        </button>
        {a > 0 ? (
          <button
            id="btn4"
            onClick={() => {
              const b = a;
              setA(b - 10);
            }}
          >
            Pervious
          </button>
        ) : null}
        <Link to="/last">
          <button id="btn6">Confirm</button>
        </Link>
      </div>
    </>
  );
}

export default Products;
