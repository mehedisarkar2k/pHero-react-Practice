import React, { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const [allCountries, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div className="container">
      <Countries countries={allCountries} />
    </div>
  );
}

export default App;
