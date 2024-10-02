import React, { useState, useEffect } from "react";
import Card from "./Card";

const FetchFlags = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [fltData, setfltData] = useState("");

  console.log("StateData", data);

  async function fecthFlags() {
    try {
      let apiData = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      const flagResponse = await apiData.json();
      console.log(flagResponse);
      setData(flagResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fecthFlags();
  }, []);

  const filertedData = data.filter((item) =>
    item.name.toLowerCase().includes(fltData.toLowerCase())
  );

  console.log("filertedData", filertedData);

  handleChange = (e) => {
    setfltData(e.target.name);
  };

  return (
    <div>
      <Card
        flags={data}
        searchChnage={handleChange}
        fltData={fltData}
        searchFlag={filertedData}
      />
    </div>
  );
};

export default FetchFlags;
