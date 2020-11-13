import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const ConsumeUseFetch = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch("/products");
  useEffect(() => {
    if (!response) {
      doFetch();
    }
  }, [response]);
  const handleClick = (event) => {
    event.preventDefault();
    doFetch();
  };
  console.log("useFetch", isLoading, response, error);
  return (
    <div>
      <button onClick={handleClick}> get data </button>
      {isLoading ? (
        <h1>loading</h1>
      ) : response ? (
        response.map((item) => (
          <div key={item.id}>
            <li>{item.namaProduk}</li>
          </div>
        ))
      ) : (
        <h1> nodata </h1>
      )}
    </div>
  );
};
export default ConsumeUseFetch;
