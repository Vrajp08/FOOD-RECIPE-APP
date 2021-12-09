import './App.css';
import axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';


function App() {
  const [query, setquery] = useState("")
  const [recipes, setrecipes] = useState([])
  const [healthLabels, sethealthLabels] = useState("vegan")
  const YOUR_APP_ID = "cfe142ab"
  const YOUR_APP_KEY = "fa6a9614485f0db9daa512d05631a215	"
  var url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`

  async function getRecipes() {
    var result = await axios.get(url);
    setrecipes(result.data.hits)
    // console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
      <h1>Food recipe 🍴</h1>
      <form className="searchform" onSubmit={onSubmit}>
        <input className="searchform_input" type="text" placeholder="Food Name"
          value={query} onChange={(e) => setquery(e.target.value)} />
        <input className="searchform_search" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option onClick={() => sethealthLabels("Vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("Vegetarian")}>Vegetarian</option>

          <option onClick={() => sethealthLabels("Paleo")}>Paleo</option>

          <option onClick={() => sethealthLabels("Dairy-Free")}>Dairy-Free</option>

          <option onClick={() => sethealthLabels("Fish-Free")}>Fish-Free</option>

          <option onClick={() => sethealthLabels("Alcohol-Free")}>Alcohol-Free</option>
          <option onClick={() => sethealthLabels("Egg-Free")}>Egg-Free</option>



        </select>
      </form>
      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
