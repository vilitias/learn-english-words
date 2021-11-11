import "./Learning.css";
import React, { useEffect, useState } from "react";
import { uniqBy } from "lodash";
import ReactTooltip from "react-tooltip";
import { ReactComponent as ArrowIcon } from "../../images/arrowIcon.svg";

export default function Learning({ words, setLearnedWords, learnedWords }) {
  let [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (!currentId && words.length > 0) {
      setCurrentId(words[0]._id);
    }
  }, [words]);

  let [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const currentIndex = words.findIndex((el) => {
    return el._id === currentId;
  });
  const currentWord = currentIndex >= 0 ? words[currentIndex] : null;
  const nextWord = words[currentIndex + 1];
  const prevWord = words[currentIndex - 1];

  const goToNextWord = () => {
    if (isTranslationVisible) {
      setIsTranslationVisible(false);
    }
    setLearnedWords(uniqBy([...learnedWords, currentWord], "_id"));
    if (nextWord) {
      setCurrentId(nextWord._id);
    } else {
      alert("No more words!");
    }
  };

  // useEffect(() => console.log(learnedWords), [learnedWords]);

  const previousWord = () => {
    if (prevWord) {
      if (isTranslationVisible) {
        setIsTranslationVisible(false);
      }
      setCurrentId(prevWord._id);
    }
  };

  if (!currentWord) {
    return null;
  }
  return (
    <div className="learning-screen-main">
      <button className="change-card-button-left" onClick={previousWord}>
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
          {currentWord.englWord}
        </p>
        <p className="card-transcription">{currentWord.englTranscription}</p>

        <p
          className={`card-translation 
              ${
                isTranslationVisible
                  ? "translation-visible"
                  : "translation-hidden"
              }
          `}
        >
          {currentWord.ruslWord}
        </p>
      </div>
      <button className="change-card-button-right" onClick={goToNextWord}>
        <ArrowIcon />
      </button>
    </div>
  );
}
