import Country from "./Country/Country";

const Countries = ({ countries }) => {
  return (
    <div className="row row-cols-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {countries.map((country) => (
        <Country key={country.name} allCountry={country} />
      ))}
    </div>
  );
};

export default Countries;
