import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const auth = "D5N3ySbIbgJRhQyIzul5r7yuza62xggjx72HxqsoyuVc5CHOkP6P2ciz";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const search = async () => {
    let result = await axios.get(initialURL, {
      headers: { Authorization: auth },
    });
    console.log(result);
  };

  return (
    <div className="search">
      <input className="input" onChange={() => {}} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
