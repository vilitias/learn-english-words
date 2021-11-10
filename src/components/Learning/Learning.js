import "./Learning.css";
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { ReactComponent as ArrowIcon } from "../../images/arrowIcon.svg";

export default function Learning({ words, setLearnedWords, learnedWords }) {
  let [index, setIndex] = useState(0);

  let [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const nextWord = () => {
    if (isTranslationVisible) {
      setIsTranslationVisible(false);
    }
    if (learnedWords) setLearnedWords([...learnedWords, words[index]]);
    index++;
    setIndex(index);
  };

  useEffect(() => console.log(learnedWords), [learnedWords]);

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
        <ArrowIcon className="arrow-rotated" />
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
        <ArrowIcon />
      </button>
    </div>
  );
}
