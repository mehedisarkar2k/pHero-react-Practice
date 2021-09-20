import React from "react";

const Country = ({ allCountry }) => {
  // console.log(props.allCountry);
  const { name, capital, flag, population } = allCountry;

  const time = Math.round(Math.random() * 50);

  // , population
  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={flag} alt={name} />

        <div className="card-body">
          <h3 className="card-title">Name: {name}</h3>
          <h5 className="card-title">Capital: {capital}</h5>
          <p className="text-muted mb-0">
            Total-Population: <span className="fw-bold">{population}</span>
          </p>
        </div>

        <div className="card-footer">
          <small className="text-muted">
            Last updated {time <= 1 ? "just now." : time + " mins ago."}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Country;
