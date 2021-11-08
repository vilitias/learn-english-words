import "./App.css";
// import bgTexture from "./images/bg-texture.jpg";style={{ backgroundImage: `url(${bgTexture})` }}
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import Learning from "./components/Learning/Learning";

function App() {
  let [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch(`https://engl-tab.herokuapp.com/themes`)
      .then((res) => res.json())
      .then((data) => {
        const updateThemes = [...themes];
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].theme);
          updateThemes.push(data[i].theme);
        }
        setThemes(updateThemes);
      });
  }, []);

  return (
    <div className="App">
      <MainPage themes={themes} />
      {/* <Learning /> */}
    </div>
  );
}

export default App;
