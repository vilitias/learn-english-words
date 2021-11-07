import "./MainPage.css";

export default function MainPage({ themes }) {
  return (
    <div className="MainPage">
      <h1 className="main-title">
        Expand your vocabulary ~ Learn 10 new english words a day
      </h1>

      {/* <label>
        Choose the topic:
        <select>
          {themes.map((theme) => {
            return <option key={theme}>{theme}</option>;
          })}
        </select>
      </label> */}
      <h2>Choose the topic:</h2>
      <div className="themes-wrapper">
        {themes.map((theme) => {
          return (
            <div key={theme} className="theme-card">
              {theme}
            </div>
          );
        })}
      </div>
      <h2>or</h2>
      <div className="theme-card">get random words from all the topics</div>
    </div>
  );
}
