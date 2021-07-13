import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodList from "./components/FoodList";
import './scss/styled.scss';

function App() {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);

  const YOUR_APP_ID = "72977a9f";
  const YOUR_APP_KEY = "461cd2c4086824e7560be67cac5e25eb";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  useEffect(() => {
    const getFoods = async () => {
      const res = await axios.get(url);
      setFoods(res.data.hits);
      console.log(res.data.hits);
    };

    getFoods();
  }, [url]);

  const handleChange = (e) => {
    setQuery(e.target.value)
}

  const onSubmit = (e) => {
    e.preventDefault();
    const getFood = async () => {
      const res = await axios.get(url);
      setFoods(res.data.hits);
    };

    getFood()
  }

  return (
    <div className="food-api">
      <h1>Food API</h1>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search food..."
            className="searchinput"
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="list">
        {foods.map((food, i) => (
          <div key={i}>
            <FoodList food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
