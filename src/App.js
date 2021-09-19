import { useState } from "react";
import "./App.css";

const employeeArr = [
  { id: "1", title: "", name: "Mehedi Sarkar", salary: "50tk/day" },
  { id: "2", title: "Mr.", name: "Bean", salary: "300k" },
  { id: "3", title: "Mrs.", name: "Emma Watson", salary: "200k" },
];

const Employees = ({ title, name, salary }) => {
  return (
    <div className="Employee">
      <h2>
        Name: {title} {name}
      </h2>
      <span>Salary: {salary}</span>
    </div>
  );
};

const ControlBTN = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    if (count >= 20) return;
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <span className="value">Count: {count}</span>
      <div className="buttons">
        <button onClick={decrease}>Decrease(-)</button>
        <button onClick={increase}>Increase(+)</button>
      </div>
    </div>
  );
};

const LoadCountries = () => {
  return null;
};

function App() {
  return (
    <div className="App">
      <div className="Employees">
        {employeeArr.map((employee) => (
          <Employees
            key={employee.id + "-" + employee.name}
            title={employee.title}
            name={employee.name}
            salary={employee.salary}
          />
        ))}
      </div>

      <div className="controlButton">
        <ControlBTN />
      </div>

      <div className="countries">
        <LoadCountries />
      </div>
    </div>
  );
}

export default App;
