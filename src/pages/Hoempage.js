import React, { useState, useEffect } from "react";
import axios from "axios";

import Search from "../components/Search";
import Picture from "../components/Picture";

const Hoempage = () => {
  let [input, setInput] = useState(null);
  let [data, setData] = useState(null);
  const auth = "D5N3ySbIbgJRhQyIzul5r7yuza62xggjx72HxqsoyuVc5CHOkP6P2ciz";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={() => search(searchURL)} setInput={setInput} />
      <div className="pictures">
        {/* logical operator && */}
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Hoempage;
