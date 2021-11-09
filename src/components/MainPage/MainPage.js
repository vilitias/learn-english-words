import "./MainPage.css";
import { Link } from "react-router-dom";
// при выборе темы

export default function MainPage({ themes }) {
  return (
    <div className="MainPage">
      <h1 className="main-title">
        Expand your vocabulary ~ Learn 10 new english words a day
      </h1>
      <h2>Choose the topic:</h2>
      <div className="themes-wrapper">
        {themes.map((theme) => {
          return (
            <Link className="router-link" to={`/learning/${theme}`}>
              <div key={theme} className="theme-card">
                {theme}
              </div>
            </Link>
          );
        })}
      </div>
      <h2>or</h2>
      <Link to="/learning/all" className="router-link">
        <div className="theme-card">get random words from all the topics</div>
      </Link>
    </div>
  );
}
