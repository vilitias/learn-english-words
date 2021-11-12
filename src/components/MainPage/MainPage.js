import "./MainPage.css";
import { Link } from "react-router-dom";
import { kebabCase } from "lodash";

export default function MainPage({ themes }) {
  return (
    <div className="MainPage">
      <h1 className="main-title">
        <div>Expand your vocabulary</div>
        <div>Learn 10 new english words a day</div>
      </h1>
      <h2 className="main-page-h2-underlined">
        Choose the topic: <div className="underline"></div>
      </h2>
      <div className="themes-wrapper">
        {themes.map((theme) => {
          return (
            <Link
              className="router-link"
              to={`/learning/${kebabCase(theme.themeName)}`}
            >
              <div key={theme.themeName} className="theme-card">
                {theme.themeName}
              </div>
            </Link>
          );
        })}
      </div>
      <h2>or</h2>
      <Link to="/learning/all" className="router-link">
        <div className="theme-card-all">get words from all topics</div>
      </Link>
    </div>
  );
}
