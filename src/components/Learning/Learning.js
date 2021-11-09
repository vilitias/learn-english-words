import "./Learning.css";
import { useState } from "react";
import ReactTooltip from "react-tooltip";

export default function Learning({ words }) {
  let [index, setIndex] = useState(0);
  // const [words, setWords] = useState([
  //   {
  //     _id: "618248281db151eec6767f87",
  //     englWord: "man",
  //     englTranscription: "[mæn]",
  //     ruslWord: "человек, мужчина",
  //     theme: "body",
  //   },
  // ]);
  let [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const nextWord = () => {
    if (isTranslationVisible) {
      setIsTranslationVisible(false);
    }
    index++;
    setIndex(index);
  };
  const previousWord = () => {
    if (index > 0) {
      if (isTranslationVisible) {
        setIsTranslationVisible(false);
      }
      index--;
      setIndex(index);
    }
  };
  return (
    <div className="learning-screen-main">
      <button className="change-card-buttons" onClick={previousWord}>
        {/* <span className="change-card-text"> */}
        <svg
          className="arrow-rotated"
          enable-background="new 0 0 32 32"
          viewBox="0 0 32 32"
        >
          <polygon
            fill="none"
            points="26,16 6,3 6,29 "
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </svg>{" "}
        {/* </span> */}
      </button>
      <div className="card">
        <ReactTooltip
          id="translationTip"
          place="top"
          effect="solid"
          type="light"
        >
          Reveal the translation
        </ReactTooltip>
        <p
          className="card-word"
          data-tip
          data-for="translationTip"
          onClick={() => setIsTranslationVisible(!isTranslationVisible)}
        >
          {words[`${index}`].englWord}
        </p>
        <p className="card-transcription">
          {words[`${index}`].englTranscription}
        </p>

        <p
          className={`card-translation 
              ${
                isTranslationVisible
                  ? "translation-visible"
                  : "translation-hidden"
              }
          `}
        >
          {words[`${index}`].ruslWord}
        </p>
      </div>
      <button className="change-card-buttons" onClick={nextWord}>
        {" "}
        {/* <span className="change-card-text"> */}
        <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32">
          <polygon
            fill="none"
            points="26,16 6,3 6,29 "
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </svg>{" "}
        {/* </span>{" "} */}
      </button>
    </div>
  );
}
