import "./App.css";
// import bgTexture from "./images/bg-texture.jpg";style={{ backgroundImage: `url(${bgTexture})` }}
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import Learning from "./components/Learning/Learning";

function App() {
  let [themes, setThemes] = useState(["Body", "Appearance and character"]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       for (let i = 0; i < data.length; i++) {
  //         if (!themes.includes(data[i].theme)) {
  //           setThemes([...themes, data[i].theme]);
  //         }
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // });
  return (
    <div className="App">
      <MainPage themes={themes} />
      {/* <Learning /> */}
    </div>
  );
}

export default App;
